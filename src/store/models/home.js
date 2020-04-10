const state = {
	isCollapse: true
}
const mutations = {
	setCollapse(state) {
		state.isCollapse = !state.isCollapse
	}
}

export default {
	state,
	mutations
}
