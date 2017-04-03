// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store.js'
import Vue2Filters from 'vue2-filters'
import VeeValidate from 'vee-validate'

Vue.config.productionTip = false
Vue.use(Vue2Filters)
Vue.use(VeeValidate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
