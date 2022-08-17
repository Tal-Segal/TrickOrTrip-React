import debug from "debug";
import OrderModel from '../model/order_model.js';

async function getOrders(username) {
    try {
        return await OrderModel.find({'username': username}).exec();
    } catch (err) {
        debug(`Error getting posters: ${err}`);
    }
}

async function addOrder(date, price, credit_card, username) {
    try {
        return await OrderModel.create({
            date: date, price: price, credit_card: credit_card, username: username
        });
    } catch (err) {
        debug(`Error adding a poster: ${err}`);
    }
}

export default {
    getOrders,
    addOrder
}