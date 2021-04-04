const router = require('express').Router();
const { Midwife } = require('../../models');

// GET /api/users
router.get('/', (req, res) => {
    Midwife.findAll({
            attributes: { exclude: ['password'] }
        })
        .then(dbMidwifeData => res.json(dbMidwifeData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /api/users/id
router.get('/:id', (req, res) => {
    Midwife.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(dbMidwifeData => {
            if (!dbMidwifeData) {
                res.status(404).json({ message: 'No Midwife was found with ID' });
                return;
            }
            res.json(dbMidwifeData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    // expects {username: 'name', email: 'email@email.com', password: 'password1234'}
    Midwife.create({
            username: req.body.username,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
        })
        .then(dbMidwifeData => {
            req.session.save(() => {
                req.session.midwife_id = dbMidwifeData.id;
                req.session.email = dbMidwifeData.email;
                req.session.loggedIn = true;
    
                res.json(dbMidwifeData);
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Testing JWT routes
/*
router.post('/jwt', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })
    .then(dbMidwifeData => {
        if (dbMidwifeData) {
            return token
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})
*/

// POST, login route
router.post('/login', (req, res) => {
    // expects {email: 'email@email.com', password: 'password'}
    Midwife.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(dbMidwifeData => {
            if (!dbMidwifeData) {
                res.status(400).json({ message: 'No user with that email' });
                return
            }
            const validPassword = dbMidwifeData.checkPassword(req.body.password);

            if (!validPassword) {
                res.status(400).json({ message: 'Incorrect Password' })
                return
            }

            req.session.save(() => {
                req.session.midwife_id = dbMidwifeData.id;
                req.session.email = dbMidwifeData.email;
                req.session.loggedIn = true;

                res.json({ user: dbMidwifeData, message: 'You are now logged in' });
            })
        });
});

// If the user is logged in, redirects the user
// otherwise, they stay on the landing page
router.get('/login', (req, res) => {
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
            res.redirect('/')
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
    Midwife.update(req.body, {
            // "individualHooks" has to be set for the bcrypt hashing
            individualHooks: true,
            where: {
                id: req.params.id
            }
        })
        .then(dbMidwifeData => {
            if (!dbMidwifeData[0]) {
                res.status(404).json({ message: 'No user was found with this ID' });
                return;
            }
            res.json(dbMidwifeData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE /api/users/id
router.delete('/:id', (req, res) => {
    Midwife.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(dbMidwifeData => {
            if (!dbMidwifeData) {
                res.status(404).json({ message: 'No user was found with this ID' });
                return
            }
            res.json(dbMidwifeData);
        })
        .catch(err => {
            console.log(err);
            res.json(500).json(err);
        });
});

module.exports = router;