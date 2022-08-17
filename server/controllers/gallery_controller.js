import service from "../services/gallery_service.js";

const getAllPosters = async (req, res) => {
    res.json(await service.getPosters());
}

const addPoster = async (req, res) => {
    let body = req.body;
    let image = "https://media.architecturaldigest.com/photos/5772f9fc381c2b8d156a0dcc/master/w_2200,h_1467,c_limit/aerial-photographs-mountains-08.jpg";
    await service.addPoster(image, body.description, new Date().toLocaleString() + "", body.price);
    res.sendStatus(200);
}


export {
    getAllPosters,
    addPoster
};