<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <header class="card-header">
              <h4 class="card-title mt-2">Sign up</h4>
            </header>
            <article class="card-body">
              <form @submit.prevent="login">
                
                <!-- form-row end.// -->
                <div class="form-group">
                  <label>Login</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder=""
                    v-model="loginInfo"
                  />
                </div>
                <div class="form-group">
                  <label> Password</label>
                  <input
                    class="form-control"
                    type="password"
                    v-model="password"
                  />
                </div>
                
                <div class="form-group error">{{error}}</div>

                <div class="form-group">
                  <button type="submit" class="btn btn-primary btn-block">
                    Login
                  </button>
                  <button type="submit" class="btn btn-secondary btn-block" @click="registration">
                    Registration
                  </button>
                </div>
                <!-- form-group// -->
              </form>
            </article>
            <!-- card-body end .// -->
          </div>
          <!-- card.// -->
        </div>
        <!-- col.//-->
      </div>
    </div>
    <!-- <form class="login" @submit.prevent="login">
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
    </form> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginInfo: "",
      password: "",
      error: "",
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
        this.error = "Неверные логин или пароль";
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
.form-row {
  display: flex;
}
.float-right {
  float: right;
}
.container {
  margin-top: 30px;
}
.form-group {
  margin: 10px;
}
.form-group>button {
  margin-left: 5px;
  margin-right: 5px;
}
.error {
  color: red;
}
</style>>
    