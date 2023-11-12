const mongoose = require("mongoose");
const { Schema } = mongoose;

const TodoSchema = new Schema(
  {
    text: String,
    id: String,
    status: String
  }
);
const Todo = mongoose.model("Todo", TodoSchema);
module.exports = Todo