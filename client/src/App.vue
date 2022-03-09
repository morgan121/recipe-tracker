<template>
  <div id="app">
    <page-header></page-header>
    <router-view/>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #697888;
  margin-top: 0px;
}
.btn {
  color: rgba(255, 255, 255, 0.85);
  font-size: 11pt;
  outline: none;
}
.card {
  margin: 0 auto;
  float: none;
  margin-top: 50px;
  margin-bottom: 10px;
}
.card-header {
  font-size: 16pt;
  padding: 7pt;
  text-align: left;
  padding-left: 10pt;
}
.form-input--text-field-input{
  border-radius: 0;
  border-width: 0px 0px 0px;
  border-bottom: 1px solid lightslategray;
  font-size: 16px;
  text-align: left;
  letter-spacing: 0px;
  padding-bottom: 10px;
  margin-top: 25px;
  margin-bottom: 25px;
}
.form-textarea--text-field-textarea{
  border-radius: 0;
  border-width: 0px 0px 0px 0px;
  font-size: 16px;
  text-align: left;
  letter-spacing: 0px;
}
.btn-secondary{
  background-color: #198754 !important;
  border-color: white;
  box-shadow: none !important;
}
.btn-secondary.active{
  background-color: #094429 !important;
  border-color: white;
  box-shadow: none !important;
}
input, button, optgroup, textarea {
  display: none;
}
</style>
