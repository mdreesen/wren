const router = require('express').Router();

const userRoutes = require('./user-routes');
// const postRoutes = require('./post-routes');
const midwifeRoutes = require('./midwife-routes');

router.use('/users', userRoutes);
// router.use('/posts', postRoutes);
router.use('/midwife', midwifeRoutes);

module.exports = router;