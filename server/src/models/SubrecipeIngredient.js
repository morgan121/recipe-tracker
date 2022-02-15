module.exports = (sequelize, DataTypes) => {
  const SubrecipeIngredients = sequelize.define('SubrecipeIngredients', {
    subrecipe_id: DataTypes.INTEGER,
    ingredient_id: DataTypes.INTEGER
  })

  return SubrecipeIngredients
}