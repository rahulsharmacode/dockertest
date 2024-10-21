const mongoose = require("mongoose");

const blogSechema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
},{
    timestamp : true
})

const BlogModel = mongoose.model('blogs' , blogSechema);
module.exports = {BlogModel};