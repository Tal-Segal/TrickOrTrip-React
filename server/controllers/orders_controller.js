import service from "../services/orders_service.js";

const getOrders = async (req, res) => {
    let params = req.params;
    res.json(await service.getOrders(params.username));
    res.sendStatus(200);
}

const addOrder = async (req, res) => {
    console.log("here");
    console.log(req.params);
    let params = req.params;
    await service.addOrder(params.date, params.price, params.credit_card, params.username);
    res.sendStatus(200);
}

export {
    getOrders,
    addOrder
};