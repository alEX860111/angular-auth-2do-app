var express = require("express");
var app = express();
var todos = {
  joe: ["homework"],
  lisa: ["sports", "dishes"]
};

var sendTodos = function(res) {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(todos.joe));
};

app.use(express.static(__dirname + "/public"));

app.use(express.bodyParser());

app.get("/api/todos", function(req, res) {
  sendTodos(res);
});

app.post("/api/todos", function(req, res) {
  todos.joe.push(req.body.todo);
  sendTodos(res);
});

app.del("/api/todos/:id", function(req, res) {
  todos.joe.splice(req.params.id, 1);
  sendTodos(res);
});

var server = app.listen(3000, function() {
  console.log("Listening on port %d", server.address().port);
});
