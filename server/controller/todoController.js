var Todo = require('../model/todoModel');

module.exports.create = function (req, res) {
  var todo = new Todo(req.body);
  todo.save(function (err, result) {
    res.json(result);
  });
};

module.exports.list = function (req, res) {
  Todo.find({}, function (err, results) {
    res.json(results);
  });
};

module.exports.getOne = function (req, res) {
  var id = req.param('id');
  if(id){
    Todo.findOne({_id: id}, function (err, results) {
      res.json(results);
    });
  }
};

module.exports.deleteOne = function (req, res) {
  var id = req.param('id');
  if(id){
      Todo.findOneAndRemove({_id: id}, function (err, results) {
        res.json(results);
      });
  }
};
