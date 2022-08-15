import debug from "debug";
import PosterModel from '../model/poster_model.js';

async function getPosters() {
    try {
        return await PosterModel.find({}).exec();
    } catch (err) {
        debug(`Error getting posters: ${err}`);
    }
}

async function addPoster(poster) {
    try {
        return await PosterModel.create({
            source: poster[0], description: poster[1], creation_date: poster[2]
        });
    } catch (err) {
        debug(`Error adding a poster: ${err}`);
    }
}

export default {
    getPosters,
    addPoster
}