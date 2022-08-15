const service = require("../services/gallery_service.js");

const getAllPosters = async (req, res) => {
    res.json(await service.getPosters());
}

const addPoster = async (req) => {
    let body = req.body;
    //let imageUrl = req.file ? 'images/' + req.file.filename : body.poster.source;
    let poster = [req.file, body.description, body.creation_date];
    await service.addPoster(poster);

}

const getGalleryView = (req, res) => {
    res.render("gallery");
}


module.exports = {
    getAllPosters,
    addPoster,
    getGalleryView
};