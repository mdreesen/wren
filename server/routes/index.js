const router = require('express').Router();

const apiRoutes = require('./api');
const workerRoutes = require('./worker');

router.use('/api', apiRoutes);
router.use('/worker', workerRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;