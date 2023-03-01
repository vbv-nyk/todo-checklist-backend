const express = require("express");
const { addTodo, updateTodo, deleteTodo, getTodos } = require("../controllers/Todos");

const todosRouter = express.Router();

todosRouter.get("/", getTodos);
todosRouter.post("/", addTodo);
todosRouter.put("/:id", updateTodo);
todosRouter.delete("/:id", deleteTodo);

module.exports = todosRouter;