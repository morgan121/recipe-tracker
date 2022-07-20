const { Recipe } = require("../models");

module.exports = {
  async index(req, res) {
    try {
      const recipes = await Recipe.findAll({
        limit: 10,
      });
      res.send(recipes);
    } catch (err) {
      res.status(500).send({
        error: `An error has ocurred trying to fetch the recipes: ${err}`,
      });
    }
  },
  async show(req, res) {
    try {
      const recipe = await Recipe.findByPk(req.params.recipeId);
      res.send(recipe);
    } catch (err) {
      res.status(500).send({
        error: `An error has ocurred trying to fetch the recipe: ${err}`,
      });
    }
  },
  async post(req, res) {
    try {
      const recipe = await Recipe.create(req.body);
      res.send(recipe);
    } catch (err) {
      res.status(500).send({
        error: `An error has ocurred trying to create the recipes: ${err}`,
      });
    }
  },
  async delete(req, res) {
    try {
      await Recipe.delete(req.body, {
        where: {
          id: req.params.recipeId,
        },
      });
    } catch (err) {
      res.status(500).send({
        error: `An error has ocurred trying to delete the recipes: ${err}`,
      });
    }
  },
};
