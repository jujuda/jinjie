
import Vue from 'vue';
import App from './App';
import router from './router/index';
import 'animate.css';
import "@/assets/css/reset.css";
// import "@/assets/css/midea.css";
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import './assets/js/validate.js';
import axios from 'axios';
import "@/assets/js/rem.js"
Vue.prototype.$http=axios;
axios.defaults.withCredentials=true; //全局配置携带跨源凭证


Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
//高德地图
import VueAMap from 'vue-amap';
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '2d8d5b369101a09df20c42c4582af534',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  uiVersion: '1.0.11', // 版本号
  v: '1.4.4'
});



new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
