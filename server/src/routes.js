const AuthenticationController = require("./controllers/AuthenticationController");
const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy");
const RecipesController = require("./controllers/RecipesController");
const IngredientsController = require("./controllers/IngredientsController");

module.exports = (app) => {
  app.post(
    "/register",
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  );
  app.post("/login", AuthenticationController.login);

  app.get("/recipes", RecipesController.index);
  app.post("/recipes", RecipesController.post);

  app.get("/recipes/:recipeId", RecipesController.show);
  app.delete("/recipes/:recipeId", RecipesController.delete);

  app.get("/ingredients/:recipeId", IngredientsController.index);
  app.post("/ingredients", IngredientsController.post);
};
