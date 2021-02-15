const router = require('express').Router();
const { Post, User } = require('../../models');
const { post } = require('./user-routes');

// get all posts
router.get('/', (req, res) => {
    console.log('======================================');
    Post.findAll({
            // Query configuration
            attributes: ['id', 'ttc', 'pregnant', 'postpartum', 'created_at'],
            order: [
                ['created_at', 'DESC']
            ],
            include: [{
                model: User,
                attributes: ['username']
            }]
        })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get a single post
router.get('/:id', (req, res) => {
    Post.findOne({
            where: {
                id: req.params.id
            },
            attributes: ['id', 'ttc', 'pregnant', 'postpartum', 'created_at'],
            include: [{
                model: User,
                attributes: ['username']
            }]
        })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this ID' })
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err);
        });
});

// Creating a Post
router.post('/', (req, res) => {
    // expects {user_id: 1, ttc: boolean, pregnant: boolean, postpartum: boolean}
    Post.create({
            user_id: req.body.user_id,
            ttc: req.body.ttc,
            pregnant: req.body.pregnant,
            postpartum: req.body.postpartum
        })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err)
            res.json(500).json(err);
        });
});

// Updating a Post
router.put('/:id', (req, res) => {
    Post.update({
            ttc: req.body.ttc,
            pregnant: req.body.pregnant,
            postpartum: req.body.postpartum
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No Post found with this ID' })
                return;
            }
            res.json(dbPostData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });
});

// Deleting a Post
router.delete('/:id', (req, res) => {
    Post.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No Post found with this ID' })
                return
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});



module.exports = router;