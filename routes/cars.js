var express = require('express');
var router = express.Router();

var cars_controller = require('../controllers/carsController');

router.get('/', cars_controller.anka);
router.get('/12', cars_controller.quack);

module.exports = router;