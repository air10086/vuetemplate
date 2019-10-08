// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import QS from 'qs'
import promise from 'es6-promise'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.qs = QS
// 使低版本ie支持promise
promise.polyfill()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
