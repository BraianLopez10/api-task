const boom = require("@hapi/boom");
const joi = require("joi");

function validate(schema, check) {
  return function (req, res, next) {
    let valid = schema.validate(req[check]);
    console.log(valid);
    valid.error ? next(boom.badImplementation()) : next();
  };
}

module.exports = validate;
