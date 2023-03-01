const Todos = require("../models/Todo")

const addTodo = async (req, res) => {
    const { title, link, iconURL, note } = req.body;
    const todo = await Todos.create({ title, link, iconURL, note });
    res.send(todo);
}

const updateTodo = async (req, res) => {
    const { title, link, iconURL, note } = req.body;
    const { id } = req.params;
    const todo = await Todos.findByIdAndUpdate(id, { title, link, iconURL, note });
    res.send(todo);
}

const deleteTodo = async (req, res) => {
    const { id } = req.params;
    const todo = await Todos.findByIdAndDelete(id);
    res.send(todo);
}

const getTodos = async (req, res) => {
    const todos = await Todos.find({});
    res.send(todos);
}

module.exports = { addTodo, updateTodo, deleteTodo, getTodos };