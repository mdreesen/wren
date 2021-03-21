const router = require('express').Router();

// const postRoutes = require('./post-routes');
const workerRoutes = require('./worker-routes');

// router.use('/posts', postRoutes);
router.use('/user', workerRoutes);

module.exports = router;