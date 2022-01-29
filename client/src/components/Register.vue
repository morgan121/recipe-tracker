<template>
  <div>
    <h1>Register</h1>

    <input type="email" name="email" placeholder="Enter your email" v-model="email"/>
    <br>
    <input type="password" name="password" placeholder="Enter your password"  v-model="password"/>
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    // Async/await way
    // async register () {
    //   const response = await AuthenticationService.register({
    //     email: this.email,
    //     password: this.password
    //   })
    //   console.log(response.data)
    // }

    // Promise way (I like this one, but tutorial uses other one)
    register () {
      AuthenticationService.register({
        email: this.email,
        password: this.password
      })
        .then(response => console.log(response.data))
        .catch(console.log)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
