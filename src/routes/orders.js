const express = require('express');
const router = express.Router();
const { asyncHandler } = require('../utils/asyncHandler');
const orderRepository = require('../repositories/orders');
const { formatResponse } = require('../utils/helper');
const validateId = require('../middlewares/validateId');

router.get('/', asyncHandler(async function (req, res, next) {
  let result = await orderRepository.getAllWithToppings(req.query);
  return formatResponse(res, result);
}));

router.post('/', asyncHandler(async function (req, res, next) {
  let result = await orderRepository.create(req.body);
  return formatResponse(res, result);
}));

router.get('/:id', validateId, asyncHandler(async function (req, res, next) {
  let result = await orderRepository.getById(req.params.id);
  if (!result) {
    return formatResponse(res, 'Not found', 404);
  }
  return formatResponse(res, result);
}));

router.patch('/:id', validateId, asyncHandler(async function (req, res, next) {
  let aOrder = await orderRepository.getToppingsByOrderId(req.params.id);
  if (!aOrder) {
    return formatResponse(res, 'Not found', 404);
  }

  let result = await orderRepository.patch(req.params.id, req.body);
  return formatResponse(res, result);
}));

router.put('/:id', validateId, asyncHandler(async function (req, res, next) {
  let aOrder = await orderRepository.getToppingsByOrderId(req.params.id);
  if (!aOrder) {
    return formatResponse(res, 'Not found', 404);
  }

  let result = await orderRepository.put(req.params.id, req.body);
  return formatResponse(res, result);
}));

router.delete('/:id', validateId, asyncHandler(async function (req, res, next) {
  let aOrder = await orderRepository.deleteById(req.params.id);
  if (!aOrder) {
    return formatResponse(res, 'Not found', 404);
  }
  return formatResponse(res, result);
}));

module.exports = router;
