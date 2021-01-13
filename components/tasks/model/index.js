const mongoose = require('mongoose')

const TaskModel = new mongoose.Schema({
  done: {
    type: mongoose.SchemaTypes.Boolean,
    default: false
  },
  content: {
    type: mongoose.SchemaTypes.String,
    default: ''
  }
}, { timestamps: true })

const Task = mongoose.model('Task', TaskModel)

module.exports = Task