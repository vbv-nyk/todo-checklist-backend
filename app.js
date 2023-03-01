const { urlencoded, json } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const todosRouter = require("./routes/Todos");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect("mongodb+srv://pixel:abcd1234@cluster0.ykxlaxs.mongodb.net/?retryWrites=true&w=majority");

app.use("/Todos", todosRouter);

app.listen(3000, () => console.log("Listening on port 3000"));