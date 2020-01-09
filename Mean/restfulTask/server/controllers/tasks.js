var mongoose = require("mongoose");
var Task = mongoose.model("Task");

module.exports = {

    index: function(req, res){
        Task.find({})
        .then(task => res.json(task))
        .catch(err => res.json(err))
    },
    create: function(req,res){
        Task.create(req.body)
        .then(task => res.json(task))
        .catch(err=> res.json(err))
    },
    show: function(req,res){
        console.log(req.params)
      Task.findById(req.params.id)
      .then(task => res.json(task))
      .catch(err => res.json(err))
    },
    update: function(req,res){
        console.log(req.params)
      Task.findByIdAndUpdate(req.params.id, req.body)
      .then(task => res.json(task))
      .catch(err => res.json(err))
    },
    delete: function(req,res){
        console.log(req.params)
      Task.findByIdAndDelete(req.params.id)
      .then(task => res.json(task))
      .catch(err => res.json(err))
    }
   
}