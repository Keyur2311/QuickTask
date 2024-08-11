const mongoose = require('mongoose')
const { Schema } = mongoose;
const RestaurantSchema = new Schema({
    cuisine: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
        unique: true
    },
    rating: {
        type: String,
        required: true,
    },
});

const Resaurant = mongoose.model('user', RestaurantSchema)
Resaurant.createIndexes()
module.exports = Resaurant
