const Todos = require("../models/Todo")

const addTodo = async (req, res) => {
    const { title, link, iconURL, note } = req.body;
    const todo = await Todos.create({ title, link, iconURL, note });
    res.send(todo);
}

const updateTodo = (req, res) => {

}

const deleteTodo = (req, res) => {

}

const getTodos = (req, res) => {

}

module.exports = { addTodo, updateTodo, deleteTodo, getTodos };