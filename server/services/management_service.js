import debug from "debug";
import UserModel from '../model/user_model.js';

async function getUsers() {
    try {
        debug('Trying to get all users')
        return await UserModel.find({'isValid': true}).exec();
    } catch (err) {
        debug(`Error getting users: ${err}`);
    }
}

async function addUser(username, password, role) {
    try {
        return await UserModel.create({
            username: username, password: password, role: role,
            image: "https://us.123rf.com/450wm/warrengoldswain/warrengoldswain1604/warrengoldswain160400123/54730116-beautiful-indian-hispanic-latino-mixed-race-corporate-business-woman-holding-an-organiser.jpg?ver=6",
            start_date: new Date().toLocaleString() + "", isValid: true
        });
    } catch (err) {
        debug(`Error adding a user: ${err}`);
    }
}

async function editUser(id, args) {
    try {
        return await UserModel.findByIdAndUpdate(id, args);
    } catch (err) {
        debug(`Error editing a user: ${err}`);
    }
}

async function deleteUser(id) {
    try {
        return await UserModel.findByIdAndUpdate(id, {isValid: false});
    } catch (err) {
        debug(`Error deleting a user: ${err}`);
    }
}

async function getUserByUsername(username) {
    try {
        let user = await UserModel.find({'username': username, 'isValid': true}).exec();
        return user === [] ? undefined : user[0];
    } catch (err) {
        debug(`Error getting user by username: ${err}`);
    }
}

export default {
    getUsers,
    addUser,
    editUser,
    deleteUser,
    getUserByUsername
}