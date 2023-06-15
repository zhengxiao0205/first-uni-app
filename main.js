import App from './App'

import Vue from 'vue'
import store from './store/index.js'
import './uni.promisify.adaptor'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
	...App,
	store
})
app.$mount()