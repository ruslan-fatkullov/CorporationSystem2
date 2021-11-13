<template>
  <div id="profile">
    <ChangePassword
      v-if="ifVisible"
      @closeDialog="closeDialog"
      @updateData="updateData"
    />
    <NavBar />
    <div class="content">
      <div class="col-md-8">
        <div class="card mb-3">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">{{ "FullName" | localize }}</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                {{ this.$store.state.users.name }}
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">{{ "Email" | localize }}</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                {{ this.$store.state.users.email }}
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">{{ "Pasport" | localize }}</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                {{ this.$store.state.users.pasport }}
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">{{ "Login" | localize }}</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                {{ this.$store.state.users.login }}
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">{{ "Password" | localize }}</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                {{ this.$store.state.users.password }}
              </div>
            </div>
            <hr />

            <div class="row">
              <div class="col-sm-4">
                <a class="btn btn-primary" @click="changePassword">{{
                  "ChangePassword" | localize
                }}</a>
              </div>
              <div class="col-sm-4 footer_profile">
                <p>Русский/English</p>
                <div class="form-check-us form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    v-model="isRuLocale"
                    @click="setLocale"
                  />
                </div>
              </div>
            </div>
            <!-- Switch -->

            <!-- <button class="btn btn-primary" @click="setLocale">{{ "Update" | localize}}</button> -->
          </div>
        </div>
      </div>
    </div>
    <!-- <h3>Имя: {{this.$store.state.users.name}}</h3>
        <h3>Логин: {{this.$store.state.users.login}}</h3>
        <h3>Паспортные данные: {{this.$store.state.users.pasport}}</h3>
        <h3>Почта: {{this.$store.state.users.email}}</h3> -->
  </div>
</template>

<script>
import NavBar from "../components/Navigation.vue";
import ChangePassword from "../components/ChangePassword.vue";
export default {
  name: "profile",
  props: ["user"],
  data() {
    return {
      ifVisible: false,
      isRuLocale: "",
    };
  },
  components: {
    NavBar,
    ChangePassword,
  },
  methods: {
    changePassword: function () {
      this.ifVisible = true;
    },
    closeDialog: function () {
      this.ifVisible = false;
    },
    setLocale: function () {
      let locale = this.isRuLocale ? "ru-RU" : "en-US";
      this.$store.dispatch("setLocale", locale);
    },
  },
  mounted() {
    let locale = this.$store.state.locale;
    this.isRuLocale = locale === "ru-RU";
  },
};
</script>

<style scoped>
.col-md-8 {
  margin: 0 auto;
}
.content {
  margin-top: 3rem;
}
.col-sm-12 {
  text-align: left;
}
.footer_profile {
  display: flex;
}
.form-check-us{
  margin-left: 5px;
}
</style>