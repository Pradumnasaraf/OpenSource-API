const pageNotFound = async function (req, res) {
  res
    .status(404)
    .end(
      '404 - Page not found, try something new, or try contacting <a href="https://twitter.com/pradumna_saraf">Pradumna Saraf</a>'
    );
};

module.exports = pageNotFound;
