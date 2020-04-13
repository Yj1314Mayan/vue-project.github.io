import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import i18n from "./lang"
import "@/utils/permission"
import "@/api/service"
import "@/style/reset.scss"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"

Vue.use(ElementUI)

// 国际化语言配置
Vue.use(ElementUI, {
	i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false

new Vue({
	router,
	store,
	i18n,
	render: h => h(App)
}).$mount("#app")
