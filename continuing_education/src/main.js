import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import "@/assets/styles/reset.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import "element-ui/lib/theme-chalk/display.css";

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper /* { default global options } */);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
