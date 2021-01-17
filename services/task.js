const TaskModel = require("../components/tasks/model");

class TaskService {
  constructor() {}

  async getAll() {
    return await TaskModel.find();
  }
  async create(newTask) {
    return await TaskModel.create(newTask);
  }
  async getBy(id) {
    return await TaskModel.findOne({ _id: id });
  }
  async delete(id) {
    return await TaskModel.deleteOne({ _id: id });
  }
  async edit(id, newTask) {
    return await TaskModel.updateOne({ _id: id }, { ...newTask });
  }
  async updateState(newState, id) {
    return await TaskModel.updateOne({ _id: id }, { done: newState });
  }
}

module.exports = TaskService;
