const pageNotFound = async function (req, res) {
  res.status(404).send("404 - Page not found");
};

module.exports = pageNotFound;
