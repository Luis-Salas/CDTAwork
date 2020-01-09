var mongoose = require("mongoose");
var Cake = mongoose.model("Cake");
var Rating = mongoose.model("Rate");


module.exports = {

    index: function(req, res){
        Cake.find({})
        .then(task => res.json(task))
        .catch(err => res.json(err))
    },
    create: function(req, res){
        Cake.create(req.body)
        .then(task => res.json(task))
        .catch(err => res.json(err))
    },
    createComment: function(req, res){
        Rating.create(req.body)
        .then(rate => {
            Cake.findOneAndUpdate({_id: req.params.id}, {$push: {ratings:rate}})
            .then(cake => res.json(cake))
        })
        .catch(err => res.json(err))
    },
    show: function(req, res){
        Cake.findById(req.params.id)
        .then(cake => {
            res.json(cake)
        })
        .catch(err => res.json(err))
    }
}