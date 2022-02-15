module.exports = (sequelize, DataTypes) => {
  const RecipeSubrecipe = sequelize.define('RecipeSubrecipe', {
    recipe_id: DataTypes.INTEGER,
    subrecipe_id: DataTypes.INTEGER
  })

  return RecipeSubrecipe
}