import express from 'express';
const router = express.Router();
import { getAllPosters, addPoster } from '../controllers/gallery_controller.js';
import {addOrder} from "../controllers/orders_controller.js";

router.get('/data', getAllPosters);
router.post('/add', addPoster);
router.post('/addOrder', addOrder);

export default router;