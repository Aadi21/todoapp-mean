var Todo = require('../model/todoModel');

module.exports.create = function (req, res) {
  var todo = new Todo(req.body);
  todo.save(function (err, result) {
    if(err){
      console.log(err);
    }
    res.json(result);
  });
};

module.exports.list = function (req, res) {
  Todo.find({}, function (err, results) {
    if(err){
      console.log(err);
    }
    res.json(results);
  });
};

module.exports.update = function (req, res) {
  var todo = new Todo(req.body);
  var update = {};
  update.title = todo.title;
  if(todo.done){
    update.done = todo.done;
  }
  var id = req.param('id');
  Todo.findOneAndUpdate({_id: id}, update,  function (err, result) {
    if(err){
      console.log(err);
    }
    res.json(result);
  });
};

module.exports.getOne = function (req, res) {
  var id = req.param('id');
  if(id){
    Todo.findOne({_id: id}, function (err, results) {
      if(err){
        console.log(err);
      }
      res.json(results);
    });
  }
};

module.exports.deleteOne = function (req, res) {
  var id = req.param('id');
  if(id){
      Todo.findOneAndRemove({_id: id}, function (err, results) {
        if(err){
          console.log(err);
        }
        res.json(results);
      });
  }
};
