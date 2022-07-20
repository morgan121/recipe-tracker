module.exports = (sequelize, DataTypes) => {
  const Subrecipe = sequelize.define(
    "Subrecipe",
    {
      subrecipe_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      recipe_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      title: DataTypes.STRING,
      prep_time: DataTypes.INTEGER,
      cook_time: DataTypes.INTEGER,
    },
    {
      classMethods: {
        associate: function (models) {
          Subrecipe.belongsTo(models.Recipe, { foreignKey: "recipe_id" });
          // Subrecipe.hasMany(models.SubrecipeIngredients);
        },
      },
    }
  );

  return Subrecipe;
};
