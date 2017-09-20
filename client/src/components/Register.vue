<template>
  <div>
    <h1>Register</h1>
    <input
      v-model="email"
      type="email"
      name="email"
      placeholder="Enter your email address" />
    <br><br>
    <input
      v-model="password"
      type="password"
      name="password" />
    <br><br>
    <button
      @click="register">
      Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService.js';
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      console.log('register was clicked', this.email, this.password);
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
      console.log(response.data);
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
