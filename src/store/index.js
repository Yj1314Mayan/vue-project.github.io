import Vue from "vue"
import Vuex from "vuex"
import home from "./models/home"
import router from "./models/router"

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		home,
		router,
	},
})
