const express = require("express");
const mongoose = require("mongoose");
const notesRouter = require("./routes/Note");

const app = express();
mongoose.connect("mongodb+srv://pixel:abcd1234@cluster0.ykxlaxs.mongodb.net/?retryWrites=true&w=majority");

app.use("/Notes", notesRouter);
app.listen(3000, () => console.log("Listening on port 3000"));