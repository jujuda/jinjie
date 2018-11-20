
import Vue from 'vue';
import App from './App';
import router from './router/index';
import 'animate.css';
import "@/assets/css/reset.css";
import "@/assets/css/midea.css";
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import './assets/js/validate.js';
import axios from 'axios';
Vue.prototype.$http=axios;
axios.defaults.withCredentials=true; //全局配置携带跨源凭证


Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
