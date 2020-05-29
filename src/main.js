import Vue from "vue";
import App from "./App.vue";
import VModal from "vue-js-modal";
import VCalendar from "v-calendar";
import DatePicker from "v-calendar/lib/components/date-picker.umd";
import router from "./router/router.js";
import store from "./store/store.js";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
Vue.use(VModal);
Vue.use(VCalendar, {
  componentPrefix: "vc"
});
Vue.use(DatePicker, {
  componentPrefix: "vc"
});

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
