export default {
	state: {
		// 登录状态
		loginStatus: false,
		// token
		token: null,
		// 用户昵称，头像
		userInfo: {}
	},
	getters: {

	},
	mutations: {
		// 登陆后保存用户信息
		saveUserInfo(state, payload) {
			state.userInfo = payload
			state.loginStatus = true
			state.token = payload.token
			uni.setStorageSync('userInfo', payload)
		},
		// 退出登录
		clearUserInfo(state, ) {
			state.userInfo = {}
			state.loginStatus = false
			state.token = null
			uni.removeStorageSync('userInfo')
		}
	}
}