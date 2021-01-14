const mongoose = require('mongoose')

const TaskModel = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  done: {
    type: mongoose.SchemaTypes.Boolean,
    default: false
  },
  content: {
    type: mongoose.SchemaTypes.String,
    required: true
  }
}, { timestamps: true })

const Task = mongoose.model('Task', TaskModel)

module.exports = Task