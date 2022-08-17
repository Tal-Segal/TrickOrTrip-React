import express from 'express';
const router = express.Router();
import { getOrders } from '../controllers/orders_controller.js';

router.get('/data/:name', getOrders);

export default router;