<template>
  <b-row>
    <b-col>
      <b-form-input
        v-model="ingredient.name"
        placeholder="name"
        size="lg"
        class="form-input--text-field-input"
      ></b-form-input>
    </b-col>
    <b-col>
      <b-form-input
        v-model="ingredient.amount"
        placeholder="amount"
        size="lg"
        class="form-input--text-field-input"
      ></b-form-input>
    </b-col>
    <b-col>
      <b-form-input
        v-model="ingredient.unit"
        placeholder="unit"
        size="lg"
        class="form-input--text-field-input"
      ></b-form-input>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data () {
    return {
      ingredient: {
        recipe_id: null,
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
