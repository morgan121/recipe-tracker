<template>
  <panel title="Register">
    <br>
    <b-form @submit="register">
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
          autocomplete="new-password"
        ></b-form-input>
      </b-form-group>
      <div class="error" v-html="error"></div>
      <br>
      <b-button size="lg" type="dark" variant="success">REGISTER</b-button>
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
    async register () {
      try {
        this.error = null
        const response = await AuthenticationService.register({
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
