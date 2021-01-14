const taskModel = require('../model')
const TaskService = require('../../../services/task')

class TaskController {
  constructor() {
    this.db = taskModel
    this.taskService = new TaskService()
  }
  async getAll(req, res) {
    try {
      const Task = await this.taskService.getAll()
      return res.status(200)
        .json({
          data: Task
        })
    } catch {
      return res.status(500)
    }
  }
  async create(req, res) {
    const { content, title } = req.body
    const newProduct = {
      content,
      title
    }
    try {
      const newTaskCreated = await this.taskService.create(newProduct)
      if (newTaskCreated) {
        return res.status(200).json({
          data: newTaskCreated
        })
      }
    } catch {
      return res.status(500).json({
        message: 'No se pudo crear la nota',
        code: 500
      })
    }
  }
  async getBy(req, res) {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        message: 'Parametros invalidos',
        code: 400
      })
    }
    try {
      const task = await this.taskService.getBy(id)
      return res.status(200).json({
        data: task
      })
    } catch {
      return res.status(500).json({
        message: 'Error interno',
        code: 500
      })
    }
  }
  async delete(req, res) {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        message: 'Parametros invalidos',
        code: 400
      })
    }
    try {
      const resp = await this.taskService.delete(id)
      if (resp.deletedCount !== 0) {
        return res.status(500).json({
          message: 'Borrado correctamente'
        })
      }
    } catch {
      return res.status(500).json({
        message: 'No se ha podido borrar'
      })
    }

  }
  async edit(req, res) {
    const { newTask, id } = req.body

    if (!id || Object.keys(newTask).length === 0) {
      return res.status(400).json({
        message: 'Parametros invalidos',
        code: 400
      })
    }
    try {
      const taskEdited = await this.taskService.edit(id, newTask)
      console.log(taskEdited)
      if (taskEdited) {
        return res.status(200).json({
          data: taskEdited
        })
      }
    } catch {
      return res.status(404).json({
        message: 'Task no encontrado',
        code: 404
      })
    }
  }
}
module.exports = TaskController