import mongo from "mongoose";

let schema = new mongo.Schema({
    date: String,
    price: String,
    credit_card: String,
    username: String
});


const OrderModel = mongo.model("Order", schema);
export default OrderModel;