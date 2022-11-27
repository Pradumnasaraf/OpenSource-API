const pageNotFound = async function (req, res) {
  res
    .status(404)
    .end(
      '<p align="center"> 404 - Page not found, try something new, or try contacting <a href="https://twitter.com/pradumna_saraf">Pradumna Saraf</a></p>'
    );
};

module.exports = pageNotFound;
