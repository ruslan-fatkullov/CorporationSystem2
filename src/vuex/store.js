import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        users: [
            {
              firstname: "Руслан",
              login: "ruslan123",
              password: "kakady1999",
              email: "fatkullov@inbox.ru",
              pasportData: "7313958436",
            },
            {
              firstname: "Альфия",
              login: "alfia70",
              password: "kakady1888",
              email: "igor@mail.ru",
              pasportData: "7313958436",
            },
            
          ],
        count: 1
    },
    mutations: {
        newRecord(state, objrec) {
            Array.prototype.push.apply(state.users, objrec);
            return state.users
          }
    },
    actions: {
        
    },
    getters: {
        USERS(state) {
            return state.users;
        }
    },
})

export default store;