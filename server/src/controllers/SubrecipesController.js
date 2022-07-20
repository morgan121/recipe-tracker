const { Subrecipe } = require("../models");

module.exports = {
  async index(req, res) {
    try {
      const subrecipes = await Subrecipe.findAll();
      res.send(subrecipes);
    } catch (err) {
      res.status(500).send({
        error: `An error has ocurred trying to fetch the recipes: ${err}`,
      });
    }
  },
  async post(req, res) {
    try {
      const subrecipe = await Subrecipe.create(req.body);
      res.send(subrecipe);
    } catch (err) {
      res.status(500).send({
        error: `An error has ocurred trying to create the subrecipe: ${err}`,
      });
    }
  },
};
