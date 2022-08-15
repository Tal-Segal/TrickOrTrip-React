import express from 'express';
const router = express.Router();
import { getAllUsers, addUser, deleteUser, editUser } from '../controllers/management_controller.js';

router.get('/data', getAllUsers);
router.post('/add', addUser);
router.delete('/delete/:name', deleteUser);
router.put('/edit/:name/:role', editUser);

export default router;