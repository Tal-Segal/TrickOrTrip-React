import debug from "debug";
import OrderModel from '../model/order_model.js';

async function getOrders(username) {
    try {
        return await OrderModel.find({'username': username}).exec();
    } catch (err) {
        debug(`Error getting posters: ${err}`);
    }
}

async function addOrder(order) {
    try {
        return await OrderModel.create({
            date: order[0], price: order[1], credit_card: order[2], username: order[3]
        });
    } catch (err) {
        debug(`Error adding a poster: ${err}`);
    }
}

export default {
    getOrders,
    addOrder
}