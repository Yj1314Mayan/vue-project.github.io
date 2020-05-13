import Vue from "vue"
import VueRouter from "vue-router"
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((error) => error)
}

Vue.use(VueRouter)

const routes = [{
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login/index.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/Home/index.vue"),
    children: [{
        path: "/home",
        name: "homePage",
        component: () => import("@/compoments/Home/index.vue"),
      },
      {
        path: "/table",
        name: "table",
        component: () => import("@/views/Table/index.vue"),
      },
    ],
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router