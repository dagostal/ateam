import Vue from "vue";
import App from "./App.vue";
import VModal from "vue-js-modal";
import VCalendar from "v-calendar";
import router from "./router/router.js";
import store from "./store/store.js";

Vue.use(VModal);
Vue.use(VCalendar, {
  componentPrefix: "vc"
});

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
