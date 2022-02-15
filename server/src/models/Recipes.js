module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    recipeID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    serves: DataTypes.INTEGER,
    calories: DataTypes.FLOAT,
    difficulty: DataTypes.ENUM('Easy', 'Medium', 'Hard'),
    mealType: DataTypes.STRING,
    recipeImageUrl: DataTypes.STRING,
    recipeUrl: DataTypes.STRING,
    notes: DataTypes.TEXT
  })

  const RecipeIngredients = sequelize.define('RecipeIngredients', {
    ingredientID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    ingredientName: DataTypes.STRING,
    ingredientQuantity: DataTypes.STRING
  },
  {
    classMethods: {
      associate: function(models) {
        RecipeIngredients.belongsTo(models.Recipe)
      }
    }
  })

  return Recipe
}