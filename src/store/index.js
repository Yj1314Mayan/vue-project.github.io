import Vue from "vue"
import Vuex from "vuex"
import home from "./models/home"
import router from "./models/router"
import VuexPersistence from "vuex-persist"

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
	storage: window.localStorage,
})

export default new Vuex.Store({
	modules: {
		home,
		router,
	},
	plugins: [vuexLocal.plugin],
})
