

const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
   name : String,
   location: String,
   cantact: String,
   website: String
});

const restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = restaurant;