module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define('Ingredient', {
    ingredient_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    unit: DataTypes.STRING,
    calories_per_unit: DataTypes.FLOAT
  },
  {
    classMethods: {
      associate: function(models){      
        Ingredient.belongsToMany(models.Subrecipe, { through: 'SubrecipeIngredients' })
      }
    }
  })

  return Ingredient
}