<template>
  <panel title="Login">
    <br>
    <b-form @submit="login">
      <b-form-group>
        <b-form-input
          v-model="email"
          type="email"
          placeholder="Enter email"
          required
          size="lg"
          class="form-input--text-field-input"
        ></b-form-input>
      </b-form-group>

      <b-form-group>
        <b-form-input
          v-model="password"
          type="password"
          placeholder="Enter password"
          required
          size="lg"
          class="form-input--text-field-input"
        ></b-form-input>
      </b-form-group>
      <div class="error" v-html="error"></div>
      <br>
      <b-button size="lg" type="dark" variant="success">LOGIN</b-button>
    </b-form>
  </panel>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        this.error = null
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: rgb(192, 5, 5);
}
</style>
