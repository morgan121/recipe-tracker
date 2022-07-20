/* eslint-disable */
import Api from "@/services/Api";

export default {
  post(subrecipe) {
    return Api().post("subrecipes", subrecipe);
  }
};
