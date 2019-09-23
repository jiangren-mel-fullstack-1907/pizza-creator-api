var express = require('express');
var router = express.Router();
var weathersRouter = require('./weathers');
var citiesRouter = require('./cities');
var ordersRouter = require('./orders');
var toppingsRouter = require('./toppings');
var pizzaSizesRouter = require('./pizza-size');
var usersRouter = require('./user');
const authGuard = require('../middlewares/authGuard');

router.use('/weathers', weathersRouter);
router.use('/cities', authGuard, citiesRouter);
router.use('/toppings', toppingsRouter);
router.use('/pizzaSizes', pizzaSizesRouter);
router.use('/orders', ordersRouter);
router.use('/users', usersRouter);

module.exports = router;
