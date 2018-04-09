import 'babel-polyfill';
import Vue from 'vue';
import fastclick from 'fastclick';
import 'common/stylus/index.styl';
import App from './App';
import router from './router';
import VueLazyLoad from "vue-lazyload";
import store from "./store"

fastclick.attach(document.body);

Vue.use(VueLazyLoad, {
  loading: require("common/image/default.png")
})
/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});

console.log(app);
