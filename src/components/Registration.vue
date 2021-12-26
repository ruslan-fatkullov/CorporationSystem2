<template>
  <div class="registration">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <header class="card-header">
              <button
                class="float-right btn btn-outline-link mt-1"
                @click="backToAuto"
              >
                {{"SignUp"|localize}}
              </button>
              <h4 class="card-title mt-2">{{"Registration"|localize}}</h4>
            </header>
            <article class="card-body">
              <form @submit.prevent="checkForm">
                <div class="form-group">
                  <label>{{"Name"|localize}} </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder=""
                    v-model="name"
                  />
                </div>
                <!-- form-row end.// -->
                <div class="form-group">
                  <label>{{"Login"|localize}}</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder=""
                    v-model="login"
                  />
                </div>
                <div class="form-group">
                  <label>{{"Email"|localize}}</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="example@mail.com"
                    v-model="email"
                  />
                </div>
                <div class="form-group">
                  <label>{{"Pasport"|localize}}</label>
                  <MaskedInput
                    type="text"
                    class="form-control"
                    placeholder="73-15-344335"
                    :mask="[
                      /\d/,
                      /\d/,
                      '-',
                      /\d/,
                      /\d/,
                      '-',
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                    ]"
                    v-model="pasport"
                  />
                </div>
                <div class="form-row">
                  <div class="form-group">
                    <label>{{"CrtPassword"|localize}}</label>
                    <input
                      class="form-control"
                      type="password"
                      v-model="password"
                    />
                  </div>

                  <div class="form-group">
                    <label>{{"CnfPassword"|localize}}</label>
                    <input
                      class="form-control"
                      type="password"
                      v-model="password_confirmation"
                    />
                  </div>
                </div>

                <div class="form-group error">
                  {{ error }}
                </div>
                <div class="form-group">
                  <button type="submit" class="btn btn-primary btn-block">
                    Register
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
    <!-- row.//-->
  </div>
</template>

<script>
import MaskedInput from "vue-text-mask";
// import regex from "regex";
export default {
  data() {
    return {
      name: "",
      login: "",
      email: "",
      pasport: "",
      password: "",
      password_confirmation: "",
      error: "",
    };
  },
  components: {
    MaskedInput,
  },
  computed: {},
  methods: {
    checkForm: function () {
      //проверка
      let regex = new RegExp();
      if (
        !(
          this.name &&
          this.login &&
          this.email &&
          this.pasport &&
          this.password &&
          this.password_confirmation
        )
      ) {
        this.error = "Заполните пропущенные поля";
        return;
      }
      regex = /^[a-zA-Z]{1,20}$/;
      if (!regex.test(this.login)) {
        this.error = "Логин должен состоять из только из латинских букв";
        return;
      }
      regex = /^\w{1,20}@+\w{1,20}\.+\w{1,20}$/;
      if (!regex.test(this.email)) {
        this.error = "Введите корректный email";
        return;
      }
      regex = /^\d{2}-+\d{2}-+\d{6}$/;
      if (!regex.test(this.pasport)) {
        this.error = "Введите корректный паспортные данные";
        return;
      }
      if (!(this.password.length >= 3)) {
        this.error = "Пароль должен быть длиной более 3-х символов";
        return;
      }
      if (!(this.password == this.password_confirmation)) {
        this.error = "Пароли не совпадают";
        return;
      }
      this.register();
      
      //проверкаd
    },
    register: function () {
      var crypto = require('crypto')
      var shasum = crypto.createHash("md5");
      shasum.update(this.password);
      var pas = shasum.digest('hex');

      var data = {
        name: this.name,
        login: this.login,
        email: this.email,
        pasport: this.pasport,
        password: pas,
      };
      this.$store
        .dispatch("register", data)
        .then(() => this.$router.push("/"))
        .catch((err) => console.log(err));
    },
    backToAuto: function () {
      this.$router.push("/");
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
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 10px;
}
.error {
  color: red;
  text-align: left;
}
/* .autorization-window {
  margin: auto;
  max-width: 600px;
}
.button button {
  margin-left: 10px;
} */
</style>
