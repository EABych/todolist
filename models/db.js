const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const toDoSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  checkbox: {
    type: Boolean,
    required: true
  },
});

const ToDo = mongoose.model("ToDo", toDoSchema);

//Export model
module.exports = ToDo;