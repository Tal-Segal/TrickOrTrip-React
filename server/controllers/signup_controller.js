import service from "../services/management_service.js";

const signup = async (req, res) => {

    console.log(req.body);

    await service.addUser(req.body.username, req.body.password, req.body.role);
    res.json({ userRole :  req.body.role });
}

export default signup;