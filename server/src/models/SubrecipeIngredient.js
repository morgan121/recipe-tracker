module.exports = (sequelize, DataTypes) => {
  const SubrecipeIngredient = sequelize.define("SubrecipeIngredient", {
    ingredient_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    subrecipe_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    name: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    unit: DataTypes.STRING,
  });

  return SubrecipeIngredient;
};
