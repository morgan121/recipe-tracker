<template>
  <b-form @submit="create">
    <div class="row">
      <div class="col-sm-6">
        <panel title="Recipe Details">
          <b-form-checkbox-group
            buttons
            v-model="recipe.difficulty"
            :options="difficulty_options"
            class="mt-3"
          ></b-form-checkbox-group>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <b-form-checkbox-group
            buttons
            v-model="recipe.meal_type"
            :options="meal_type_options"
            class="mt-3"
          ></b-form-checkbox-group>

          <b-form-input
            v-model="recipe.title"
            placeholder="Title"
            required
            size="lg"
            class="form-input--text-field-input"
          ></b-form-input>

          <b-form-input
            v-model="recipe.recipe_url"
            placeholder="Recipe link"
            size="lg"
            class="form-input--text-field-input"
          ></b-form-input>

          <b-form-input
            v-model="recipe.recipe_image_url"
            placeholder="Image link"
            size="lg"
            class="form-input--text-field-input"
          ></b-form-input>
        </panel>
      </div>

      <div class="col-sm-6">
        <panel title="Recipe Notes">
          <b-form-textarea
            v-model="recipe.notes"
            size="lg"
            class="form-textarea--text-field-textarea"
            :rows="3"
          ></b-form-textarea>
        </panel>
      </div>
      <br>
      <div>
        <b-button size="lg" type="submit" variant="success">CREATE RECIPE</b-button>
      </div>
    </div>
  </b-form>
</template>

<script>
import Panel from '@/components/Panel'
import RecipesService from '@/services/RecipesService'

export default {
  components: {
    Panel
  },
  data () {
    return {
      recipe: {
        title: null,
        difficulty: null,
        meal_type: null,
        recipe_image_url: null,
        recipe_url: null,
        notes: null
      },
      difficulty_options: [
        {value: 'Easy', text: 'Easy'},
        {value: 'Medium', text: 'Medium'},
        {value: 'Hard', text: 'Hard'}
      ],
      meal_type_options: [
        {value: 'Main', text: 'Main'},
        {value: 'Side', text: 'Side'},
        {value: 'Dessert', text: 'Dessert'},
        {value: 'Drink', text: 'Drink'}
      ]
    }
  },
  methods: {
    async create () {
      try {
        event.preventDefault()
        await RecipesService.post(this.recipe)
        this.$router.push({name: 'recipes'}).catch(() => {})
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
