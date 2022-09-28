import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import router from './components/router/index'

Vue.config.productionTip = false
Vue.use(vueRouter)


const vm = new Vue({
  render: h => h(App),
  router
}).$mount('#app')
