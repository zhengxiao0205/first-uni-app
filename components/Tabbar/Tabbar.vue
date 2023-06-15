<template>
	<view class="tabbar">
		<view class="tab-item" v-for="(tabItem, index) of tabbarList" :key="index"
			@tap="() => handleSwitchTab(tabItem.pagePath)">
			<image v-if="tabItem.pagePath === currentPage" class="tab-image" :src="tabItem.selectedIconPath" mode=""></image>
			<image v-else class="tab-image" :src="tabItem.iconPath" mode=""></image>
			<view class="text">
				{{tabItem.text}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			currentPage: {
				type: String,
				default: 'index'
			}
		},
		data() {
			return {
				tabbarList: [{
						"pagePath": "index",
						"iconPath": "/static/tabbar/home.png",
						"selectedIconPath": "/static/tabbar/home-fill.png",
						"text": "首页"
					},
					{
						"pagePath": "list",
						"iconPath": "/static/tabbar/category.png",
						"selectedIconPath": "/static/tabbar/category-fill.png",
						"text": "列表"
					},
					{
						"pagePath": "shopcart",
						"iconPath": "/static/tabbar/cart-empty.png",
						"selectedIconPath": "/static/tabbar/cart-empty-fill.png",
						"text": "购物车"
					}, {
						"pagePath": "my",
						"iconPath": "/static/tabbar/customer.png",
						"selectedIconPath": "/static/tabbar/customer-fill.png",
						"text": "我的"
					}
				]
			};
		},
		methods: {
			handleSwitchTab(pagePath) {
				if (pagePath === 'shopcart' || pagePath === 'my') {
					if (this.validateUserInfo()) {
						uni.redirectTo({
							url: `../../pages/${pagePath}/${pagePath}`
						})
					} else {
						uni.redirectTo({
							url: '../../pages/login/login'
						})
					}
				} else {
					uni.reLaunch({
						url: `../../pages/${pagePath}/${pagePath}`
					})
				}
			},
			validateUserInfo() {
				return this.$store.state.user.loginStatus
			}
		}
	}
</script>

<style scoped lang="scss">
	.tabbar {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 120rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: #fff;
		z-index: 1000;
		border-top: 2rpx solid #ccc;

		.tab-item {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.tab-image {
				height: 40rpx;
				width: 40rpx;
			}

			.text {
				font-size: 24rpx;
			}
		}

	}
</style>