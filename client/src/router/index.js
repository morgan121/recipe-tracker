/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Register from "@/components/Register";
import Login from "@/components/Login";
import Recipes from "@/components/Recipes";
import CreateRecipe from "@/components/CreateRecipe";
import Recipe from "@/components/Recipe";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "root",
      component: HelloWorld
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/recipes",
      name: "recipes",
      component: Recipes
    },
    {
      path: "/recipes/create",
      name: "recipes-create",
      component: CreateRecipe
    },
    {
      path: "/recipes/:recipeId",
      name: "recipe",
      component: Recipe
    }
  ]
});
