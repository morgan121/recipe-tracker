module.exports = (sequelize, DataTypes) => {
  const Subrecipe = sequelize.define(
    "Subrecipe",
    {
      subrecipe_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: DataTypes.STRING,
      prep_time: DataTypes.INTEGER,
      cook_time: DataTypes.INTEGER,
    },
    {
      classMethods: {
        associate: function (models) {
          Subrecipe.belongsToMany(models.Recipe, {
            through: "RecipeSubrecipe",
          });
          Subrecipe.hasMany(models.SubrecipeIngredients);
        },
      },
    }
  );

  return Subrecipe;
};
