<template>
  <panel title="Recipe Details">
    {{recipe.title}}
    <div
      v-for="ingredient in ingredients"
      :key="ingredient.ingredient_id">
      {{ingredient.name}}
    </div>
  </panel>
</template>

<script>
import RecipesService from '@/services/RecipesService'
import IngredientsService from '@/services/IngredientsService'
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  },
  data () {
    return {
      recipe: {},
      ingredients: {}
    }
  },
  async mounted () {
    const recipeId = this.$store.state.route.params.recipeId
    this.recipe = (await RecipesService.show(recipeId)).data

    this.ingredients = (await IngredientsService.index(recipeId)).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
