<template>
  <panel title="Recipe Details">
    {{recipe.title}}
    <br>
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
      recipe: null
    }
  },
  async mounted () {
    const recipeId = this.$store.state.route.params.recipeId
    this.recipe = (await RecipesService.show(recipeId)).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
