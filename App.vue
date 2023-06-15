<script>
	export default {
		onLaunch: function() {
			if (uni.getStorageSync('userInfo')) {
				this.$store.commit('saveUserInfo', uni.getStorageSync('userInfo'))
			}
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url('common/common.css');
	@import url('common/uni.css');
	@import url('static/iconfont.css');
</style>