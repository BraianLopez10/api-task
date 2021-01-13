const router = require('express').Router()
const taskController = require('../controller')
const TaskController = new taskController()

router.route('/')
  .get((req, res) => TaskController.getAll(req, res))
  .post((req, res) => TaskController.create(req, res))
  .put((req, res) => TaskController.edit(req, res))
router.get('/:id', (req, res) => TaskController.getBy(req, res))
router.delete('/:id', (req, res) => TaskController.delete(req, res))

module.exports = router