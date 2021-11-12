import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    status: '',
    currentUser: {

    },
    users: {
      login: '1',
      password: '1'
    },
    locale: "ru-RU"
  
  },
  mutations: {
    auth_success(state) {
      state.status = 'success'
      state.currentUser = this.state.users
    },
    auth_error(state) {
      state.status = 'error'
    },
    reg_success(state, user) {
      state.status = 'success'
      state.users = user
    },
    logout(state) {
      state.status = ''
    },
    password_changed(state, password) {
      state.users.password = password.pas
    },
    localeSet(state, isRuLocale){
      state.locale = isRuLocale
    },
  },
  actions: {

    login({commit}, user){
      if (user.login == this.state.users.login && user.password == this.state.users.password){
        commit("auth_success")
      }else{
        commit("auth_error")
      }
    },
    register({ commit }, user) {
      commit("reg_success", user)
    },
    changePassword({commit}, password){
      commit("password_changed", password)
    },
    setLocale({commit}, isRuLocale){
      commit("localeSet", isRuLocale)
    }
  },
  getters: {
    getLocale: state => state.locale,
    authStatus: state => state.status,
  },
})

export default store;