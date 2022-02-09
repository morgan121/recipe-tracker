<template>
  <b-navbar fixed type="dark" sticky variant="success">
    <b-navbar-brand @click="navigateTo({name: 'root'})">RecipeTracker</b-navbar-brand>

    <b-navbar-nav>
      <b-nav-item
        href="#"
        variant="sucess"
        @click="navigateTo({name: 'recipes'})">
        BROWSE
      </b-nav-item>
    </b-navbar-nav>

    <b-navbar-nav class="ms-auto">
      <b-nav-item
        v-if="!$store.state.isUserLoggedIn"
        href="#"
        variant="sucess"
        @click="navigateTo({name: 'login'})">
        LOGIN
      </b-nav-item>

      <b-nav-item
        v-if="!$store.state.isUserLoggedIn"
        href="#"
        variant="sucess"
        @click="navigateTo({name: 'register'})">
        SIGN UP
      </b-nav-item>

      <b-nav-item
        v-if="$store.state.isUserLoggedIn"
        href="#"
        variant="sucess"
        @click="logout">
        LOG OUT
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route).catch(() => {})
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  padding-top: 11pt;
  padding-bottom: 8pt;
  padding-left: 10px;
  padding-right: 10px;
  border-bottom: 3px groove;
}
.navbar-brand {
  font-size: 18pt;
  cursor: pointer;
}
.navbar-brand:hover {
  color: rgba(255, 255, 255, 0.75);
}
.nav-item {
  padding-left: 6pt;
}
.nav-link {
  font-size: 12pt;
}
</style>
