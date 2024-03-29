const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed : {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Task', taskSchema);
