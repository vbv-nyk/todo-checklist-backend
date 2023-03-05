const Todos = require("../models/Todo")

const addTodo = async (req, res) => {
    const { title, link, iconURL, note } = req.body;
    const todo = await Todos.create({ title, link, iconURL, note });
    res.send(JSON.stringify(todo));
}

const updateTodo = async (req, res) => {
    const { title, link, iconURL, note, done } = req.body;
    const { id } = req.params;
    const todo = await Todos.findByIdAndUpdate(id, { title, link, iconURL, note, done });
    res.send(JSON.stringify(todo));
}

const deleteTodo = async (req, res) => {
    const { id } = req.params;
    const todo = await Todos.findByIdAndDelete(id);
    res.send(JSON.stringify(todo));
}

const getTodos = async (req, res) => {
    const todos = await Todos.find({});
    res.send(JSON.stringify(todos));
}

module.exports = { addTodo, updateTodo, deleteTodo, getTodos };