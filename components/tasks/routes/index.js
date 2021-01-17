const router = require("express").Router();
const taskController = require("../controller");
const TaskController = new taskController();
const validate = require("../../../middlewares/validation");
const schema = require("../../../utils/schema/task");

router.get("/", (req, res, next) => TaskController.getAll(req, res, next));
router.post("/", validate(schema.createTask, "body"), (req, res, next) =>
  TaskController.create(req, res, next)
);
router.put("/", validate(schema.updateTask, "body"), (req, res, next) =>
  TaskController.edit(req, res, next)
);
router.get("/:id", validate(schema.idTask, "params"), (req, res, next) =>
  TaskController.getBy(req, res, next)
);
router.delete("/:id", validate(schema.idTask, "params"), (req, res, next) =>
  TaskController.delete(req, res, next)
);

module.exports = router;
