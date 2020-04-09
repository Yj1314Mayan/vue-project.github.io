import router from '../router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

router.beforeEach((to, from, next) => {
  console.log(to, from, next)
  // start progress bar
  NProgress.start()
  next()
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
