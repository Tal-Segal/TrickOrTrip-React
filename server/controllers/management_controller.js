const service = require("../services/management_service.js");

const getAllUsers = async (req, res) => {
    res.json(await service.getUsers());
}

const addUser = async (req, res) => {
    let body = req.body;
    let user = [body.username, body.password, body.role, body.image];

    let newUser = await service.addUser(user);

    if (typeof newUser !== "string") {
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
}

const editUser = async (req) => {
    let params = req.params;
    let user = await service.getUserByUsername(params.name);
    console.log(params);
    await service.editUser(user._id, { role: params.role });
}

const deleteUser = async (req, res) => {

    let p = req.params;
    let user = await service.getUserByUsername(p.name);

    await service.deleteUser(user._id);

    if (typeof user !== "string") {
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
}

const getManagementView = (req, res) => {
    res.render("management");
}


module.exports = {
    getAllUsers,
    addUser,
    editUser,
    deleteUser,
    getManagementView
};