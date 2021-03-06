// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import router from './router'
import store from './store/index.js'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
FastClick.attach(document.body);
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
