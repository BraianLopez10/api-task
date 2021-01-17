const TaskService = require("../../../services/task");
class TaskController {
  constructor() {
    this.taskService = new TaskService();
  }
  async getAll(req, res, next) {
    try {
      const Task = await this.taskService.getAll();
      return res.status(200).json({
        data: Task,
        message: "Todas las tareas",
      });
    } catch (err) {
      next(err);
    }
  }
  async create(req, res, next) {
    const { content, title } = req.body;
    const newProduct = {
      content,
      title,
    };
    try {
      const task = await this.taskService.create(newProduct);
      return res.status(201).json({
        data: task,
        message: "Task creada",
      });
    } catch (err) {
      next(err);
    }
  }
  async getBy(req, res, next) {
    const { id } = req.params;
    try {
      const task = await this.taskService.getBy(id);
      return res.status(200).json({
        data: task,
      });
    } catch (err) {
      next(err);
    }
  }
  async delete(req, res, next) {
    const { id } = req.params;
    try {
      const resp = await this.taskService.delete(id);
      if (resp.deletedCount !== 0) {
        return res.status(200).json({
          message: "Borrado correctamente",
        });
      }
    } catch (err) {
      next(err);
    }
  }
  async edit(req, res, next) {
    const { newTask, id } = req.body;

    try {
      const resp = await this.taskService.edit(id, newTask);
      return res.status(200).json({
        data: resp,
        message: "Task actualizada",
      });
    } catch (err) {
      next(err);
    }
  }
}
module.exports = TaskController;
