import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart.js'
import address from './modules/address.js'
import user from './modules/user.js'
Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		cart,
		address,
		user
	}
})