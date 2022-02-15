module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    recipe_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    difficulty: DataTypes.ENUM('Easy', 'Medium', 'Hard'),
    meal_type: DataTypes.ENUM('Sweet', 'Savoury'),
    recipe_image_url: DataTypes.STRING,
    recipe_url: DataTypes.STRING,
    notes: DataTypes.TEXT
  },
  {
    classMethods: {
      associate: function(models){      
        Recipe.hasMany(models.Subrecipe, { onDelete: "CASCADE", hooks: true})
      }
    }
  })

  return Recipe
}