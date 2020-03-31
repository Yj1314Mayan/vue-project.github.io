import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./style/reset.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./utils/permission.js";

Vue.config.productionTip = false;

// 引入element
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");