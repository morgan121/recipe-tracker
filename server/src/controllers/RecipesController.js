const {Recipe} = require('../models')

module.exports = {
  async index (req, res) {
    try {
        const recipes = Recipe.findAll({
          // include: [
          //    { model: RecipeIngredients}
          // ],
          limit: 10
        })
        console.log("MH: ", recipes)
        res.send(recipes)
    } catch (err) {
      res.status(400).send({
        error: 'An error has ocurred trying to fetch the recipes'
      })
    } 
  },
  async post (req, res) {
    try {
        const recipe = Recipe.create(req.body)
        res.send(recipe)
    } catch (err) {
      res.status(400).send({
        error: 'An error has ocurred trying to create the recipe'
      })
    } 
  }
}