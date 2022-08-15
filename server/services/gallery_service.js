const debug = require("debug");
const model = require('../model/index.js')("Poster");

async function getPosters() {
    try {
        return await model.GET_ALL();
    } catch (err) {
        debug(`Error getting posters: ${err}`);
    }
}

async function addPoster(poster) {
    try {
        return await model.ADD(poster);
    } catch (err) {
        debug(`Error adding a poster: ${err}`);
    }
}

module.exports = {
    getPosters,
    addPoster
}