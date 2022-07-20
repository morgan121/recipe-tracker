<template>
  <b-form inline>
    <b-form-input
      v-model="subrecipeingredient.name"
      placeholder="Ingredient"
      size="lg"
      class="form-input--text-field-input mr-4"
    ></b-form-input>
    <b-form-input
      v-model="subrecipeingredient.amount"
      placeholder="Amount"
      size="lg"
      class="form-input--text-field-input mr-4"
    ></b-form-input>
    <b-form-input
      v-model="subrecipeingredient.unit"
      placeholder="Unit"
      size="lg"
      class="form-input--text-field-input mr-4"
    ></b-form-input>
  </b-form>
</template>

<script>
import Ingredient from '@/components/Ingredient'

export default {
  components: {
    Ingredient
  },
  data () {
    return {
      subrecipeingredient: {
        name: null,
        amount: null,
        unit: null
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
