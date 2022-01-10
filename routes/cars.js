var express = require('express');
var router = express.Router();

var cars_controller = require('../controllers/carsController');

router.get('/', cars_controller.anka);
router.get('/data', cars_controller.data)
router.get('/id', cars_controller.quack);


module.exports = router;