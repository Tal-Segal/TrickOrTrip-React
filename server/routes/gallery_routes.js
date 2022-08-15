import express from 'express';
const router = express.Router();
import { getAllPosters, addPoster } from '../controllers/gallery_controller.js';

router.get('/data', getAllPosters);
router.post('/add', addPoster);

export default router;