const express = require("express");
const { addTodo } = require("../controllers/Todos");

const todosRouter = express.Router();

todosRouter.post("/", addTodo);

module.exports = todosRouter;