<template>
  <panel title="Recipes">
    <div
      v-for="recipe in recipes"
      :key="recipe.recipe_id">
      {{recipe.title}} -
      {{recipe.author}}
    </div>
  </panel>
</template>

<script>
import RecipesService from '@/services/RecipesService'
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  },
  data () {
    return {
      recipes: null
    }
  },
  async mounted () {
    // do a request to backend for all recipes
    this.recipes = (await RecipesService.index()).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
