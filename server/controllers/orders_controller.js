import service from "../services/orders_service.js";

const getOrders = async (req, res) => {
    let p = req.params;
    res.json(await service.getOrders(p.name));
}

const addOrder = async (req, res) => {
    await service.addOrder(req.body.date, req.body.price, req.body.credit_card, req.body.username);
    res.sendStatus(200);
}

export {
    getOrders,
    addOrder
};