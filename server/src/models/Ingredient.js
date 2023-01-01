module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define("Ingredient", {
    ingredient_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    recipe_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    name: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    unit: DataTypes.STRING,
  },
  {
    classMethods: {
      associate: function (models) {
        Ingredient.belongsTo(models.Recipe, { foreignKey: "recipe_id" });
      },
    },
  });

  return Ingredient;
};
