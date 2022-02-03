const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');

// Middleware that instructs the server to make certain files readily available.
router.use(animalRoutes);
router.use(require('./zookeeperRoutes'));

module.exports = router;