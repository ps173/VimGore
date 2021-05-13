const mongoose = require('mongoose')

// schema for code snippet 
const snippetSchema = new mongoose.Schema({
    code : {
        type : String,
        required : true
    },
    answer:{
        type : String,
        required : true
    },
    minKeyStrokes:{
        type : Number,
        required : true
    },
    language:{
        type : String,
        required : true
    }
})

module.exports = mongoose.model('Snippets',snippetSchema)
