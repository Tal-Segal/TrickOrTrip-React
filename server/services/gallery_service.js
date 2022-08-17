import debug from "debug";
import PosterModel from '../model/poster_model.js';

async function getPosters() {
    try {
        return await PosterModel.find({}).exec();
    } catch (err) {
        debug(`Error getting posters: ${err}`);
    }
}

async function addPoster(source, description, date, price) {
    try {
        return await PosterModel.create({
            source: source, description: description, creation_date: date, price: price
        });
    } catch (err) {
        debug(`Error adding a poster: ${err}`);
    }
}

export default {
    getPosters,
    addPoster
}