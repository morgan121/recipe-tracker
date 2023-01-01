<template>
  <b-form @submit="create">
    <div class="row">
      <div class="col-sm-6">
        <panel title="Recipe Details">
          <b-form-radio-group
            buttons
            v-model="difficulty_selected"
            :options="difficulty_options"
            class="mt-3"
            button-variant="success"
            checked
          ></b-form-radio-group>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <b-form-radio-group
            buttons
            v-model="meal_type_selected"
            :options="meal_type_options"
            class="mt-3"
            button-variant="success"
          ></b-form-radio-group>

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
          <b-form-input
            v-model="recipe.prep_time"
            placeholder="Prep time (mins)"
            size="lg"
            class="form-input--text-field-input"
          ></b-form-input>
          <b-form-input
            v-model="recipe.cook_time"
            placeholder="Cook time (mins)"
            size="lg"
            class="form-input--text-field-input"
          ></b-form-input>
        </panel>

        <panel title="Recipe Notes">
          <b-form-textarea
            v-model="recipe.notes"
            size="lg"
            class="form-textarea--text-field-textarea"
            :rows="3"
            placeholder="Recipe notes"
          ></b-form-textarea>
        </panel>
      </div>

      <div class="col-sm-6">
        <panel title="Ingredients">
          <b-form inline>
            <ingredient></ingredient>
            <b-button
              size="lg"
              type="submit"
              variant="success"
              @click="addIngredient()">
              Add Ingredient
            </b-button>
          </b-form>
        </panel>
      </div>
      <br>
      <b-col>
        <b-button
          size="lg"
          type="submit"
          variant="success"
          align-self="centre">
          CREATE RECIPE
        </b-button>
      </b-col>
    </div>
  </b-form>
</template>

<script>
import Panel from '@/components/Panel'
import Ingredient from './Ingredient.vue'
import RecipesService from '@/services/RecipesService'
import IngredientsService from '@/services/IngredientsService'

export default {
  components: {
    Panel,
    Ingredient
  },
  data () {
    return {
      recipe: {
        recipe_id: null,
        title: null,
        difficulty: null,
        meal_type: null,
        recipe_image_url: null,
        recipe_url: null,
        notes: null,
        prep_time: null,
        cook_time: null
      },
      difficulty_selected: [],
      difficulty_options: [
        {value: 'Easy', text: 'Easy'},
        {value: 'Medium', text: 'Medium'},
        {value: 'Hard', text: 'Hard'}
      ],
      meal_type_selected: [],
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
        this.recipe.difficulty = this.difficulty_selected
        this.recipe.meal_type = this.meal_type_selected
        await RecipesService.post(this.recipe)

        await IngredientsService.post(this.ingredients)
        this.$router.push({name: 'recipes'}).catch(() => {})
      } catch (err) {
        console.log(err)
      }
    },
    addIngredient () {
      console.log('MH: here')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
