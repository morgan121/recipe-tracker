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
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      recipes: [
        {
          title: 'Tikka Masala',
          author: 'Myself',
          calories: '100 kJ'
        },
        {
          title: 'Chicken Salad',
          author: 'Myself',
          calories: '100 kJ'
        },
        {
          title: 'Corn',
          author: 'Myself',
          calories: '100 kJ'
        }
      ]
    }
  },
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
