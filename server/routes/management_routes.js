const express = require('express');
const router = express.Router();
const { getManagementView, getAllUsers, addUser, deleteUser, editUser } = require('../controllers/management_controller.js');

router.get('/data', getAllUsers);
router.post('/add', addUser);
router.delete('/delete/:name', deleteUser);
router.put('/edit/:name/:role', editUser);
router.get('/', getManagementView);

module.exports = router;