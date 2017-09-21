<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
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
          <div v-html="error" class="error"></div>
          <v-btn
            class="cyan"
            @click="register">
            Register
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
  
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService.js';
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
      console.log('register was clicked', this.email, this.password);
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.error = null
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
