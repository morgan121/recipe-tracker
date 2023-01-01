module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define(
    "Recipe",
    {
      recipe_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficulty: DataTypes.STRING,
      meal_type: DataTypes.STRING,
      recipe_image_url: DataTypes.STRING,
      recipe_url: DataTypes.STRING,
      prep_time: DataTypes.INTEGER,
      cook_time: DataTypes.INTEGER,
      notes: DataTypes.TEXT,
    },
    {
      classMethods: {
        associate: function (models) {
          Recipe.hasMany(models.Ingredient, { onDelete: "cascade" });
        },
      },
    }
  );

  return Recipe;
};
