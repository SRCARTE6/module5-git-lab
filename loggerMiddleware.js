// loggerMiddleware.js

function loggerMiddleware(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next(); // Move to the next middleware or route handler
}

module.exports = loggerMiddleware;