import service from "../services/management_service.js";

const login = async (req, res) => {

    let users = await service.getUsers();

    const userExist=(user)=>user.username === req.body.username && user.password === req.body.password && user.isValid === true;

    if(users.some(userExist))
    {
        let user = await service.getUserByUsername(req.body.username);
        console.log("role: " + user.role);

        //res.sendStatus(200);
        res.json({ userRole : user.role });
    }
    else
    {
        res.sendStatus(404);
    }
}

export default login;