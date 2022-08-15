const express = require('express');
const router = express.Router();

const { getGalleryView, getAllPosters, addPoster } = require('../controllers/gallery_controller.js');

router.get('/', getGalleryView);
router.get('/data', getAllPosters);
router.post('/add', addPoster);

module.exports = router;