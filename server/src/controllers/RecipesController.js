const {Recipe} = require('../models')

module.exports = {
  async index (req, res) {
    try {
        const recipes = await Recipe.findAll({
          limit: 10
        })
        res.send(recipes)
    } catch (err) {
      res.status(400).send({
        error: `An error has ocurred trying to fetch the recipes: ${err}`
      })
    } 
  },
  async post (req, res) {
    try {
        const recipe = await Recipe.create(req.body)
        res.send(recipe)
    } catch (err) {
      res.status(400).send({
        error: `An error has ocurred trying to create the recipes: ${err}`
      })
    } 
  }
}