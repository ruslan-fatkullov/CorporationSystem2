import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    status: '',
    currentUser: {

    },
    users: {
      login: "",
      password: ""
    }
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, user) {
      state.status = 'success'
      state.currentUser = user
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
  },
  actions: {

    login({commit}, user){
      if (user.login == this.state.users.login){
        commit("auth_success", user)
      }else{
        commit("auth_error")
      }
    },

    register({ commit }, user) {
      commit("reg_success", user)
    }
  },
  getters: {
    authStatus: state => state.status,
  },
})

export default store;