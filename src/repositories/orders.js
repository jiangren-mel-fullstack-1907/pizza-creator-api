var ObjectId = require('mongodb').ObjectID;

const BaseRepository = require('./base');

const OrderSchema = require('../models/order');
const ToppingSchema = require('../models/topping');

class OrderRepository extends BaseRepository {
    constructor(OrderModel, ToppingModel) {
        super(OrderModel)
        this.ToppingModel = ToppingModel;
    }

    async addTopping(orderId, toppingId) {
        let aOrder = await this.Model.findOne({ _id: ObjectId(orderId) });
        if (!aOrder) {
            throw new Error('order not found');
        }
        await this.Model.findByIdAndUpdate(
            orderId,
            {
                $addToSet: {
                    toppings: toppingId
                }
            },
            {
                new: true
            }
        );
    }

    async removeTopping(orderId, toppingId) {
        let aOrder = await this.Model.findOne({ _id: ObjectId(orderId) }).lean();
        if (!aOrder) {
            throw new Error('order not found');
        }
        await this.Model.findByIdAndUpdate(
            orderId,
            {
                $pull: {
                    toppings: toppingId
                }
            },
            {
                new: true
            }
        );
    }

    async getToppingsByOrderId(id) {
        return this.Model.findOne({ _id: ObjectId(id) }).populate('toppings');
    }

    async getAllWithToppings(query) {
        return this.Model.find(query).populate('orderItems.topping');
    }

}

let orderRepository = new OrderRepository(OrderSchema, ToppingSchema);
module.exports = orderRepository;