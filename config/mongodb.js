const mongoose = require("mongoose");
const restaurantSchema = require("../src/models/restaurant");
const menuSchema = require("../src/models/menu");

url ="mongodb+srv://tabhi:abhi2001@cluster0.1vgwy.mongodb.net/mongooseFDDB?retryWrites=true&w=majority";

exports.mongooseConnect= async ()=>{
    try{ 
    await mongoose.connect(url)
    console.log("connected using mongoose");   
    }catch(err){
        console.log(err);
    }
}