const { Ingredient } = require("../models");

module.exports = {
  async index(req, res) {
    try {
      const ingredients = await Ingredient.findAll();
      res.send(ingredients);
    } catch (err) {
      res.status(500).send({
        error: `An error has ocurred trying to fetch ingredients for this recipe: ${err}`,
      });
    }
  },
  async post(req, res) {
    try {
      const ingredient = await Ingredient.create(req.body);
      res.send(ingredient);
    } catch (err) {
      res.status(500).send({
        error: `An error has ocurred: ${err}`,
      });
    }
  },
};
