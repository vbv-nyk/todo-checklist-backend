const express = require("express");
const { addTodo, updateTodo } = require("../controllers/Todos");

const todosRouter = express.Router();

todosRouter.post("/", addTodo);
todosRouter.put("/:id", updateTodo);

module.exports = todosRouter;