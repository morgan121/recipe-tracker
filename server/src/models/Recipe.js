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
    author: DataTypes.STRING,
    difficulty: {
      type: DataTypes.ENUM('Easy', 'Medium', 'Hard'),
      allowNull: false
    },
    meal_type: {
      type: DataTypes.ENUM('Main', 'Side', 'Dessert', 'Drink'),
      allowNull: false
    },
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