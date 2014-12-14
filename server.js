var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    todoController    = require('./server/controller/todoController');

console.log("There There");
mongoose.connect('mongodb://localhost:27017/todos');

app.use(bodyParser());

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

//REST IN PEACE
app.post('/api/todos', todoController.create);
app.get('/api/todos', todoController.list);
app.get('/api/todos/:id', todoController.getOne);
app.delete('/api/todos/:id', todoController.deleteOne);


app.listen(3000, function () {
  console.log("Server Started ... listening on 3000");
});
