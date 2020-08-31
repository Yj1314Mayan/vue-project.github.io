import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/permission'
import '@/api/service'
import '@/style/reset.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { registerMicroApps, setDefaultMountApp, start } from 'qiankun'
import Ripple from 'vue-ripple-directive'
import _ from 'lodash'
import VueQuillEditor from 'vue-quill-editor' //调用编辑器
// require styles 引入样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

let app = null

Vue.use(VueQuillEditor)

Vue.use(ElementUI)

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
