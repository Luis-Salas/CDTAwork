const Task = require('mongoose').model('Task');

module.exports = {
  index(req, res) {
    Task.find({})
      .then(people => res.json(people))
      .catch(error => res.json(error));
  },

  show(req, res) {
    console.log(req.params)
    Task.findById(req.params.id)
      .then(task => {
        res.json(task ? task : 'no such task!');
      })
      .catch(error => res.json(error));
  },
  create(req, res) {
    console.log(req.body, "body")
    Task.create(req.body)
      .then(task => res.json(task))
      .catch(error => res.json(error));
  },
  destroy(req, res) {
    console.log(req.params.id)
    Task.findByIdAndRemove(req.params.id)
      .then(result => res.json(result))
      .catch(error => res.json(error));
  },
  update(req,res){
    console.log(req.bod)
    Task.findByIdAndUpdate(req.params.id, req.body)
    .then(result => res.json(result))
    .catch(error => res.json(error));
  }
};
