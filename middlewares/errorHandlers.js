const boom = require("@hapi/boom");

function wrapwithBoom(err, req, res, next) {
  if (!err.isBoom) {
    next(boom.badImplementation(err));
  }
  next(err);
}
function errorHandler(err, req, res, next) {
  const {
    output: { statusCode, payload },
  } = err;
  res.status(statusCode).json(payload);
}

function routeNoFound(req, res) {
  const { output } = boom.notFound();
  res.status(output.statusCode).json(output.payload);
}

module.exports = { errorHandler, wrapwithBoom, routeNoFound };
