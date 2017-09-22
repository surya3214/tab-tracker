<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat class="cyan accent-4" dark>
          <v-toolbar-title
            @click="fill">
            Login
          </v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-form ref="form" v-model="valid">
            <v-text-field
              label="Name"
              v-model="name"
              :rules="nameRules"
              :counter="20">
            </v-text-field>
            <v-text-field
              label="Email"
              v-model="email"
              :rules="emailRules"
              required>
            </v-text-field>
            <v-text-field
              label="Password"
              v-model="password"
              :rules="passwordRules"
              required>
            </v-text-field>
            <v-btn
              @click="submit"
              :class="{ cyan: valid, red: !valid }">
              Login
            </v-btn>
            <v-btn
              @click="clear">
              Clear
            </v-btn>
          </v-form>
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
      valid: false,
      email: '',
      password: '',
      name: '',
      error: null,
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => v.length <= 20 || 'Name should be less than 20'
      ],
      emailRules: [
        (v) => !!v || 'Email is required'
      ],
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => v.length >= 8 || 'Password should have least 8 characters'
      ]
    }
  },
  methods: {
    async login () {
      console.log('login was clicked', this.email, this.password);
      try {
        const response = await AuthenticationService.login({
          name: this.name,
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.error = null
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    clear () {
      this.$refs.form.reset()
    },
    submit () {
      if (this.$refs.form.validate()) {
        this.login()
        this.$refs.form.reset()
      }
    },
    fill () {
      this.name = 'Surya Kumar'
      this.email = 'surya3214@gmail.com'
      this.password = 'suryasurya'
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
