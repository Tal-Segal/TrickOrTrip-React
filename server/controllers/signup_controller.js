import service from "../services/management_service.js";

const signup = async (req, res) => {

    alert("start");
    await service.addUser(req.body.username, req.body.password, req.body.role, req.body.image);
    alert( req.body.role);
    res.json({ userRole :  req.body.role });
}

export default signup;