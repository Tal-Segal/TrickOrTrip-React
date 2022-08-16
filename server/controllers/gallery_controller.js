import service from "../services/gallery_service.js";

const getAllPosters = async (req, res) => {
    res.json(await service.getPosters());
}

const addPoster = async (req) => {
    let body = req.body;
    let poster = [req.file.source, body.description, Date.now.toString, body.price];
    await service.addPoster(poster);

}


export {
    getAllPosters,
    addPoster
};