<template>
  <div>
    <b-navbar toggleable="lg" type="dark" sticky variant="info">
      <b-navbar-brand>Registration</b-navbar-brand>
    </b-navbar>

    <b-container class="col-lg-3 col-lg-offset-4">
      <br>
      <b-form @submit="register">
        <b-form-group>
          <b-form-input
            type="email"
            v-model="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group>
          <b-form-input
            type="password"
            v-model="password"
            placeholder="Enter password"
            required
          ></b-form-input>
        </b-form-group>
        <div class="error" v-html="error"></div>
        <br>
        <b-button type="dark" variant="info">Register</b-button>
      </b-form>
    </b-container>

  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password,
          error: null
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
.col-centered{
    margin: 0 auto;
}
.navbar {
  padding-top: 4rem;
  padding-bottom: 4rem;
  font-size: 100;
}
.navbar-brand {
  transform: translateX(-50%);
  left: 50%;
  position: absolute;
  font-size: xx-large;
}
</style>
