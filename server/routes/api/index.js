const router = require('express').Router();

const userRoutes = require('./user-routes');
const settingsRoutes = require('./settings-routes');

router.use('/users', userRoutes);
router.use('/settings', settingsRoutes);

module.exports = router;