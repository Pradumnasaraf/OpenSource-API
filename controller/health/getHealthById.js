const Health = require("../../models/schema.js");
const getHealthById = async (req, res) => {
    try {
      const h1 = await Health.findById(req.params.id);
      res.json(h1);
    } catch {
      res.status(404).json({ message: "Not found, try something new" });
    }
}; 
module.exports = getHealthById;