app.controller('todosController', ['$scope', '$resource', function ($scope, $resource) {
  var Todo = $resource('/api/todos/:id');

  Todo.query(function (results) {
    $scope.todos = results;
  });

  $scope.createTodo = function () {
    var todo = new Todo();
    todo.title = $scope.title;
    todo.done = $scope.done;

    todo.$save(function (result) {
      $scope.todos.push(result)
      $scope.title = "";
      $scope.done = false;
    });
  };

  $scope.editTodo = function (id) {
    Todo.get({id: id}, function (result) {
      $scope.title = result.title;
      $scope.done = result.done;
    });
  };

  $scope.deleteTodo = function (id) {
    Todo.remove({id: id}, function (result) {
      Todo.query(function (results) {
        $scope.todos = results;
      });
    });
  };

}]);
