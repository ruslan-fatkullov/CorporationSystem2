<template>
  <div>
    <h4>Register</h4>
    <form @submit.prevent="register">
      <label for="name">Name</label>
      <div>
        <input id="name" type="text" v-model="name" required autofocus />
      </div>

      <label for="login">Login</label>
      <div>
        <input id="login" type="text" v-model="login" required autofocus />
      </div>

      <label for="email">E-Mail Address</label>
      <div>
        <input id="email" type="email" v-model="email" required />
      </div>

      <label for="pasport">Pasport data</label>
      <div>
        <input id="pasport" type="pasport" v-model="pasport" required />
      </div>

      <label for="password">Password</label>
      <div>
        <input id="password" type="password" v-model="password" required />
      </div>

      <label for="password-confirm">Confirm Password</label>
      <div>
        <input
          id="password-confirm"
          type="password"
          v-model="password_confirmation"
          required
        />
      </div>

      <div>
        <button type="submit">Register</button>
      </div>
    </form>
    <!-- <Profile v-for="user in gettedUsers" :key="user.name" :user="user" /> -->
  </div>
</template>

<script>
// import Profile from "../components/Profile.vue";
export default {
  components: {
    // Profile,
  },
  data() {
    return {
      name: "",
      login: "",
      email: "",
      pasport: "",
      password: "",
      password_confirmation: "",
    };
  },
  computed: {
    
  },
  methods: {
    register: function () {
      var data = {
        name: this.name,
        login: this.login,
        email: this.email,
        pasport: this.pasport,
        password: this.password,

      };
      this.$store.dispatch("register", data)
        .then(() => this.$router.push("/"))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
.autorization-window {
  margin: auto;
  max-width: 600px;
}
.button button {
  margin-left: 10px;
}
</style>
