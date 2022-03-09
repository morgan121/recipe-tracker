module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    recipe_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    difficulty: DataTypes.STRING,
    meal_type: DataTypes.STRING,
    recipe_image_url: DataTypes.STRING,
    recipe_url: DataTypes.STRING,
    notes: DataTypes.TEXT
  },
  {
    classMethods: {
      associate: function(models){      
        Recipe.belongsToMany(models.Subrecipe, { through: 'RecipeSubrecipe' })
      }
    }
  })

  return Recipe
}