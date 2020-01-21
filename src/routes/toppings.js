const express = require('express');
const router = express.Router();
const toppingRepository = require('../repositories/toppings');

router.get('/', async function (req, res, next) {
  try {
    let result = await toppingRepository.getAll(req.query);
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/', async function (req, res, next) {
  try {
    let existingToppings = await toppingRepository.getAll({ name: req.body.name });
    if (existingToppings.length > 0) {
      res.status(400).json('topping existed');
    } else {
      let result = await toppingRepository.create(req.body);
      res.json(result);
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
});

router.get('/:id', async function (req, res, next) {
  try {
    let result = await toppingRepository.getById(req.params.id);
    if (!result) {
      res.sendStatus(404);
    } else {
      res.json(result);
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
});

router.patch('/:id', async function (req, res, next) {
  try {
    let result = await toppingRepository.patch(req.params.id, req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json(error.message)
  }
});

router.put('/:id', async function (req, res, next) {
  try {
    let result = await toppingRepository.put(req.params.id, req.body);
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message)
  }
});

router.delete('/:id', async function (req, res, next) {
  try {
    let result = await toppingRepository.deleteById(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message)
  }
});

module.exports = router;
