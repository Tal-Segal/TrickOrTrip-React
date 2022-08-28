import mongo from "mongoose";

import passportLocalMongoose from "passport-local-mongoose"


let schema = new mongo.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, enum: ['admin', 'employee', 'customer'], default: 'customer'},
    image: String,
    start_date: String,
    isValid: Boolean
});

schema.plugin(passportLocalMongoose)


const UserModel = mongo.model("User", schema);
export default UserModel;
