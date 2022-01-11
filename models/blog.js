const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({  //make our Schema
    title: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    }
}, {timestamps: true})

const blog = mongoose.model('blog', blogSchema); //pluarlised it and look

//to export
module.exports = blog;
