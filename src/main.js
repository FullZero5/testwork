import Vue from 'vue'
import App from './App.vue'
import store from './store'
import routes from './router'
import './assets/tailwind.css'
import Router from 'vue-router'

Vue.use(Router)
Vue.config.productionTip = false

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "tab-active",
  linkExactActiveClass: "tab-bordered",
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
