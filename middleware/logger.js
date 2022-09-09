const logger = async (req, res, next) => {
  console.log(`Endpoint: ${req.url}, Method: ${req.method}`);
  next();
};

module.exports = logger;
