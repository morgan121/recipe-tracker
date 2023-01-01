/* eslint-disable */
import Api from "@/services/Api";

export default {
  index(recipeId) {
    return Api().get(`ingredients/${recipeId}`);
  },
  post(ingredient) {
    return Api().post("ingredients", ingredient);
  }
};
