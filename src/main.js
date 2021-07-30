import Vue from "vue";
import VScrollLock from "v-scroll-lock";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VScrollLock);

new Vue({
  render: h => h(App)
}).$mount("#app");
