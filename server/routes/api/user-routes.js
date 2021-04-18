const router = require('express').Router();
// const sequelize = require('../../config/connection');
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

// This creates the user along with creating the user's session
// Stores it as a cookie
router.post('/', (req, res) => {
    // expects {username: 'name', email: 'email@email.com', password: 'password1234'}
    User.create({
            username: req.body.username,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            ttc: req.body.ttc,
            pregnant: req.body.pregnant,
            postpartum: req.body.postpartum,
            email: req.body.email,
            password: req.body.password,
        })
        .then(dbUserData => {
            req.session.save(() => {
                req.session.user_id = dbUserData.id;
                req.session.username = dbUserData.username;
                req.session.loggedIn = true;

                res.json(dbUserData);
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST, login route
// Logging in restores the User's cookie
// user's cooke is stored in the db
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

            req.session.save(() => {
                req.session.user_id = dbUserData.id;
                req.session.username = dbUserData.username;
                req.session.loggedIn = true;

                res.json({ user: dbUserData, message: 'You are now logged in' });
            })
        });
});

// If the user is logged in, redirects the user
// otherwise, they stay on the landing page
router.get('/login', (req, res) => {
    console.log(req.session)
    if (req.session.loggedIn) {
        res.redirect('/home')
        return
    } else {
        res.redirect('/')
    }
})

// Logout functionality
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    } 
})

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