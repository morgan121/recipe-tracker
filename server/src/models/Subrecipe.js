module.exports = (sequelize, DataTypes) => {
  const Subrecipe = sequelize.define('Subrecipe', {
    subrecipe_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    prep_time: DataTypes.INTEGER,
    cook_time: DataTypes.INTEGER
  },
  {
    classMethods: {
      associate: function(models){      
        Subrecipe.belongsToMany(models.Recipe, { foreignKey: 'recipe_id', through: 'RecipeSubrecipe' })
        Subrecipe.belongsToMany(models.Ingredients, { foreignKey: 'ingredient_id', through: 'SubrecipeIngredients' })
      }
    }
  })

  return Subrecipe
}