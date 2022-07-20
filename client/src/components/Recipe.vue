<template>
  <panel title="Recipe Details">
    {{recipe.title}}
    <div
      v-for="subrecipe in subrecipes"
      :key="subrecipe.subrecipe_id">
      {{subrecipe.title}}
    </div>
  </panel>
</template>

<script>
import RecipesService from '@/services/RecipesService'
import SubrecipesService from '@/services/SubrecipesService'
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  },
  data () {
    return {
      recipe: {},
      subrecipes: {}
    }
  },
  async mounted () {
    const recipeId = this.$store.state.route.params.recipeId
    this.recipe = (await RecipesService.show(recipeId)).data

    this.subrecipes = (await SubrecipesService.index(recipeId)).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
