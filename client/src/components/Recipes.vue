<template>
  <panel title="Recipes">
    <div
      v-for="recipe in recipes"
      :key="recipe.title">
      {{recipe.title}} -
      {{recipe.author}} -
      {{recipe.calories}}
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
    this.recipes = await RecipesService.index()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
