/* eslint-disable */
import Api from "@/services/Api";

export default {
  index(recipeId) {
    return Api().get(`subrecipes/${recipeId}`);
  },
  post(subrecipe) {
    return Api().post("subrecipes", subrecipe);
  }
};
