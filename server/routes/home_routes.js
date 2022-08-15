import express from 'express';
const router = express.Router();


import login from '../controllers/login_controller.js';
router.post('/login', login);

import signup from '../controllers/signup_controller.js';
router.post('/signup', signup);


export default router;