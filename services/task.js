const TaskModel = require('../components/tasks/model')

class TaskService {
  constructor() { }

  async getAll() {
    const task = await TaskModel.find()
    return task
  }
  async create(newTask) {
    const newTaskCreated = await TaskModel.create(newTask)
    return newTaskCreated
  }
  async getBy(id) {
    const task = await TaskModel.findOne({ _id: id })
    return task
  }
  async delete(id) {
    const res = await TaskModel.deleteOne({ _id: id })
    console.log(res)
    return res
  }
  async edit(id, content) {
    const taskEdit = await TaskModel.updateOne({ _id: id }, { content })
    return taskEdit
  }
}

module.exports = TaskService