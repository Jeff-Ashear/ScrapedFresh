const router = require("express").Router(); 
const viewRoutes = require('./views');



router.use('/', viewRoutes);

module.exports = router; 