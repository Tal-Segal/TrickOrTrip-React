import mongo from "mongoose";

let schema = new mongo.Schema({
    source: String,
    description: String,
    creation_date: String,
    price: String
});


/*schema.statics.GET_ALL = async function() {
    return this.find({}).exec();
};

schema.statics.ADD = async function(poster) {
    return this.create({
        source: poster[0], description: poster[1], creation_date: poster[2]
    });
};*/

const PosterModel = mongo.model("Poster", schema);
export default PosterModel;