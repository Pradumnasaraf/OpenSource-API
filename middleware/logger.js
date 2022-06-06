const logger= (req, res, next) => {
    console.log(`Endpoint: ${req.url}, Time: ${Date.now()}`)
    next()
  }

module.exports = logger

