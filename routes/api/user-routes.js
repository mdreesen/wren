const router = require('express').Router();
const { valueFromAST } = require('graphql');
const { User } = require('../../models');

// GET /api/users
router.get('/', (req, res) => {
    User.findAll({
            attributes: { exclude: ['password'] }
        })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /api/users/id
router.get('/:id', (req, res) => {
    User.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user was found with ID' });
                return;
            }
            res.json(dbUserData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
    User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST, login route
router.post('/login', (req, res) => {
    // expects {email: 'email@email.com', password: 'password'}
    User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(400).json({ message: 'No user with that email' });
                return
            }
            const validPassword = dbUserData.checkPassword(req.body.password);

            if (!validPassword) {
                res.status(400).json({ message: 'Incorrect Password' })
                return
            }

            res.json({ user: dbUserData, message: 'You are now logged in' });

            // Verify user
        });
});

// PUT /api/users/id
// syntax would be
/*
UPDATE users
SET username = "userName", email = "email@email.com", password = "thisIsAPassword"
WHERE id = 1;
*/
router.put('/:id', (req, res) => {
    User.update(req.body, {
            // "individualHooks" has to be set for the bcrypt hashing
            individualHooks: true,
            where: {
                id: req.params.id
            }
        })
        .then(dbUserData => {
            if (!dbUserData[0]) {
                res.status(404).json({ message: 'No user was found with this ID' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE /api/users/id
router.delete('/:id', (req, res) => {
    User.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user was found with this ID' });
                return
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.json(500).json(err);
        });
});

module.exports = router;