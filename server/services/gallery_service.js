import debug from "debug";
import PostersModel from '../model/user_model.js';

async function getPosters() {
    try {
        return await PostersModel.GET_ALL();
    } catch (err) {
        debug(`Error getting posters: ${err}`);
    }
}

async function addPoster(poster) {
    try {
        return await PostersModel.ADD(poster);
    } catch (err) {
        debug(`Error adding a poster: ${err}`);
    }
}

export default {
    getPosters,
    addPoster
}