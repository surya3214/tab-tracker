<template>
    <v-toolbar flat fixed dark class="blue-grey darken-4">
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title id="home-btn" class="white--text mr-4"
            @click="() => this.$router.push({ name: 'root' })">TabTracker</v-toolbar-title>
        <v-toolbar-items>
            <v-btn dark flat>
                Browse
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items v-if="!$store.state.isUserLoggedIn">
          <v-btn dark flat to="login">
            Login
          </v-btn>
          <v-btn dark flat to="register">
            Register
          </v-btn>
        </v-toolbar-items>
        <v-toolbar-items v-else>
          <v-btn dark flat
            @click="logout">
              Logout
          </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({ name: 'root' })
    }
  }
}
</script>

<style scoped>
#home-btn {
    cursor: pointer;
}
#home-btn:hover {
    color: black;
}
</style>
