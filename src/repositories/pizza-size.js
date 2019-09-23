var ObjectId = require('mongodb').ObjectID;
const BaseRepository = require('./base');

const PizzaSizeSchema = require('../models/pizza-size');

class PizzaSizeRepository extends BaseRepository {
}

let pizzaSizeRepository = new PizzaSizeRepository(PizzaSizeSchema);
module.exports = pizzaSizeRepository;