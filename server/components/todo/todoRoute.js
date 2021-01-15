const express = require("express");
let router = express.Router();
const todoController = require("./todoController");

router
    .route("/")
    .get(todoController.getAllTodos)
    .post(todoController.addTodo)
    .put(todoController.updateTodo);

router.route("/delete").post(todoController.deleteTodo)

module.exports = router;
