var mongoose = require("mongoose");
var Author = mongoose.model("Author");

module.exports = {

    index: function(req, res){
        Author.find({})
        .then(Author => res.json(Author))
        .catch(err => res.json(err))
    },
    create: function(req,res){
      console.log(req.body)
      Author.create(req.body)
        .then(task => res.json(task))
        .catch(err=> res.json(err))
    },
    edit: function(req,res){
        console.log(req.params)
      Author.findByIdAndUpdate(req.params.id, req.body, { runValidators: true }, 
        )
      .then(task => res.json(task))
      .catch(err =>{
        
       res.json(err)})
    },
}