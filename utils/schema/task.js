const joi = require("joi");

const createTask = joi.object({
  content: joi.string().max(40).required(),
  title: joi.string().max(20).required(),
  done: joi.boolean(),
});

const idTask = joi.object({
  id: joi.string().regex(/^[0-9a-fA-F]{24}$/),
});

const updateTask = joi.object({
  newTask: {
    content: joi.string().max(40),
    title: joi.string().max(20),
    done: joi.boolean(),
  },
  id: joi.string().regex(/^[0-9a-fA-F]{24}$/),
});

module.exports = {
  createTask,
  idTask,
  updateTask,
};
