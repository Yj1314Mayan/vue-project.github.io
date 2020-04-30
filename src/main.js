import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './lang'
import '@/utils/permission'
import '@/api/service'
import '@/style/reset.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Ripple from 'vue-ripple-directive'
import _ from 'lodash'

Vue.use(ElementUI)

// 国际化语言配置
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value),
})

// 引入工具函数
Vue.prototype._ = _

Vue.config.productionTip = false

// 添加 波纹自定义指令
Ripple.color = 'rgba(64,158,255, 0.35)'
Vue.directive('ripple', Ripple)

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app')
