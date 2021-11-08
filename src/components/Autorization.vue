<template>
  <div>
    <form class="login" @submit.prevent="login">
      <h1>Sign in</h1>
      <label>Login</label>
      <input required v-model="loginInfo" type="loginInfo" placeholder="Name" />
      <label>Password</label>
      <input
        required
        v-model="password"
        type="password"
        placeholder="Password"
      />
      <hr />
      <button type="submit">Login</button>
      <button type="" @click="registration">Register</button>
      <div>{{ dat }}</div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginInfo: "",
      password: "",
      dat: "",
    };
  },
  methods: {
    login: function () {
      let login = this.loginInfo;
      let password = this.password;
      this.$store.dispatch("login", { login, password });

      if (this.getStatus == "success") {
        this.$router.push("/profile");
      } else {
        this.dat = this.getStatus;
      }
    },
    registration: function () {
      this.$router.push("/register");
    },
  },
  computed: {
    getStatus() {
      return this.$store.getters.authStatus;
    },
  },
};
</script>
<style scoped>
</style>>
    