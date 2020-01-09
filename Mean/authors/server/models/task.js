var mongoose = require("mongoose");

var AuthorSchema = new mongoose.Schema({
    name: {type: String, required: [true, "need to add name pls"], minlength: 3},
}, {timestamps: true});

mongoose.model("Author", AuthorSchema);