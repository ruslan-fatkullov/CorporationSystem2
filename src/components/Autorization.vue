<template>
  <div class="autorization-window">
    <label for="exampleInputLogin" class="form-label" >Логин</label>
    <input
      type="login"
      class="form-control"
      id="exampleInputLogin"
      aria-describedby="loginHelp"
      v-model="currentLogin"
    />
    <label for="exampleInputPassword1" class="form-label">Пароль</label>
    <input
      type="password"
      class="form-control"
      id="exampleInputPassword1"
      v-model="currentPassword"
    />
    <label for="exampleInputName" class="form-label" >Имя</label>
    <input
      type="name"
      class="form-control"
      id="exampleInputLogin"
      aria-describedby="loginHelp"
    />
    <button type="submit" class="btn btn-secondary" @click="increment">Зарегестрироваться</button>

    <Profile
      v-for="user in gettedUsers"
      :key="user.name"
      :user="user"
    />
  </div>
</template>

<script>
import Profile from "../components/Profile.vue";
export default {
  components: {
    Profile,
  },
  data() {
    return {
      currentName: "",
      currentLogin: "",
      currentPassword: "",
      currentEmail: "",
      currentPasport: "",
      user: [
        {
          firstname: this.currentName,
          login: this.currentLogin,
          password: this.currentPassword,
          email: this.currentEmail,
          pasportData: this.currentPasport,
        }]
      
    };
  },
  computed: {
    gettedUsers : function() {
      return this.$store.getters.USERS;
    },
  },
  methods: {
    increment: function(){
      this.$store.commit('newRecord', this.user);
    }
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
