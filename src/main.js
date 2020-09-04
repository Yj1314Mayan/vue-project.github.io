import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/permission'
import '@/api/service'
import '@/style/reset.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {
  registerMicroApps,
  start,
  initGlobalState,
  runAfterFirstMounted,
} from 'qiankun'
import Ripple from 'vue-ripple-directive'
import _ from 'lodash'
import VueQuillEditor from 'vue-quill-editor' //调用编辑器
// require styles 引入样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// 没时间改  加个注释

registerMicroApps(
  [
    {
      name: 'app1',
      entry: '//localhost:8081',
      container: '#app',
      activeRule: '/quillEditor',
      props: {
        store,
        data: {
          name: 'child1 value',
          age: 1234,
        },
        myname: 'child1 value',
      },
    },
    {
      name: 'app2',
      entry: '//localhost:8081',
      container: '#app',
      activeRule: '/quillEditor',
      props: {
        myname: 'child2 value',
      },
    },
  ],
  {
    beforeLoad: (app) => console.log('before load', app.name),
    beforeMount: [(app) => console.log('before mount', app.name)],
    afterMount: (app) => {
      console.log('aftermount: ', app.name)
    },
    afterUnmount: (app) => {
      console.log('afterUnmount', app.name)
    },
  }
)

const state = {
  count: 0,
  wrap: {
    name: 'lisper',
    age: 1,
  },
}
const action = initGlobalState(state)

runAfterFirstMounted(() => {
  console.log('runAfterFirstMounted')
})

action.onGlobalStateChange((state, prev) => {
  console.log('root:')
  console.log(state)
})

Vue.use(VueQuillEditor)

Vue.use(ElementUI)

// 引入工具函数
Vue.prototype._ = _

Vue.config.productionTip = false

// 添加 波纹自定义指令
Ripple.color = 'rgba(64,158,255, 0.35)'
Vue.directive('ripple', Ripple)

start()

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
