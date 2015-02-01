var app = angular.module("myapp", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {
  $routeProvider
    .when("/todos", {
      templateUrl: "views/todos.html",
      controller: "myctrl"
    });
}])

app.controller("myctrl", ["$scope", "$http", function($scope, $http) {
  var setTodos = function(todos) {
    $scope.todos = todos;
  };

  $scope.todos = [];

  $http.get("api/todos").success(setTodos);

  $scope.submit = function() {
    $http.post("api/todos", {
      todo: $scope.input
    }).success(setTodos);
    $scope.input = "";
  };

  $scope.removeTodo = function(index) {
    $http.delete("api/todos/" + index).success(setTodos);
  };
}]);
