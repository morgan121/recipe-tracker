<template>
  <b-card
    :header="title"
    header-bg-variant="success"
    header-text-variant="white"
    style="max-width: 70rem;"
    body-class="text-center"
    class="center"
  >
    <slot>
      No slot content defined
    </slot>
  </b-card>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
