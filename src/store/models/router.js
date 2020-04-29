const state = {
	menus: [],
	menusAtive: "home",
};
const mutations = {
	setMenus(state, menu) {
		if (state.menus.indexOf(menu) != -1) return;
		state.menus.push(menu);
	},
	setmenusAtive(state, menusAtive) {
		state.menusAtive = menusAtive;
	},
	removeMenus(state, menu) {
		state.menus.splice(state.menus.indexOf(menu));
	},
	resetMenus(state) {
		state.menus = []
	}
};

export default {
	state,
	mutations,
};
