var ObjectId = require('mongodb').ObjectID;
const BaseRepository = require('./base');

const ToppingSchema = require('../models/topping');

class ToppingRepository extends BaseRepository {
}

let toppingRepository = new ToppingRepository(ToppingSchema);
module.exports = toppingRepository;