import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from './router'
import Axios from 'axios'
import localizeFilter from "./filters/localize.filter"

Vue.config.productionTip = false
Vue.filter("localize", localizeFilter)

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
