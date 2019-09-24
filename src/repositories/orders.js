const BaseRepository = require('./base');

const OrderSchema = require('../models/order');

class OrderRepository extends BaseRepository {
    async getAllWithToppings(query) {
        return this.Model.find(query).
            populate('orderItems.topping').
            populate('customer', 'name email address').
            populate('pizzaSize');
    }

}

let orderRepository = new OrderRepository(OrderSchema);
module.exports = orderRepository;