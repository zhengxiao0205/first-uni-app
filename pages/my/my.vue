<template>
	<view class="my">
		<!-- 头部 -->
		<view class="my-header">
			<view class="header-main" :style="{top: `${statusBarHeight}px`}">
				<view class="header-config" @tap="() => handleNavigateToConfig()">
					<image class="config-image" src="../../static/image/config.png" mode=""></image>
				</view>
				<view class="header-logo">
					<image class="logo-image" :src="loginStatus ? userInfo.imgUrl : '../../static/image/Children.jpg'" mode="">
					</image>
					<view class="logo-name">{{loginStatus ? userInfo.username : '用户昵称'}}</view>
				</view>
			</view>
		</view>
		<!-- 订单 -->
		<view class="order">
			<view class="order-title" @tap="() => handleNavigateToOrder()">
				<view>我的订单</view>
				<view>全部订单 ></view>
			</view>
			<view class="order-list">
				<view class="order-item">
					<image class="order-image" src="../../static/image/order1.png" mode=""></image>
					<view>待付款</view>
				</view>
				<view class="order-item">
					<image class="order-image" src="../../static/image/order2.png" mode=""></image>
					<view>待付款</view>
				</view>
				<view class="order-item">
					<image class="order-image" src="../../static/image/order3.png" mode=""></image>
					<view>待付款</view>
				</view>
				<view class="order-item">
					<image class="order-image" src="../../static/image/order4.png" mode=""></image>
					<view>待付款</view>
				</view>
				<view class="order-item">
					<image class="order-image" src="../../static/image/order5.png" mode=""></image>
					<view>待付款</view>
				</view>
			</view>
		</view>


		<!-- 内容列表 -->
		<view class="my-content">
			<view class="my-content-item">
				<view>我的收藏</view>
				<view>></view>
			</view>
			<view class="my-content-item">
				<view>我的收藏</view>
				<view>></view>
			</view>
			<view class="my-content-item">
				<view>我的收藏</view>
				<view>></view>
			</view>
			<view class="my-content-item">
				<view>我的收藏</view>
				<view>></view>
			</view>
			<view class="my-content-item">
				<view>我的收藏</view>
				<view>></view>
			</view>
		</view>
		<!-- 		<view style="height: 120rpx" ></view>
		<Tabbar currentPage="my"></Tabbar> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: 0,
			};
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					this.statusBarHeight = res.statusBarHeight
				}
			})
		},
		onShow() {
			if (!this.$store.state.user.loginStatus) {
				uni.navigateTo({
					url: '../login/login'
				})
			}
		},
		methods: {
			handleNavigateToConfig() {
				uni.navigateTo({
					url: '../my-config/my-config'
				})
			},
			handleNavigateToOrder() {
				uni.navigateTo({
					url: '../my-order/my-order'
				})
			}
		},
		computed: {
			userInfo() {
				return this.$store.state.user.userInfo
			},
			loginStatus() {
				return this.$store.state.user.loginStatus
			}
		}
	}
</script>

<style scoped lang="scss">
	.my-header {
		background-image: url('../../static/image/mybg.png');
		background-repeat: no-repeat;
		width: 100%;
		height: 400rpx;

		.header-main {
			position: relative;

			.header-config {
				position: relative;
				left: 20rpx;
				top: 20rpx;

				.config-image {
					width: 40rpx;
					height: 40rpx;
				}
			}
		}

		.header-logo {
			position: absolute;
			width: 120rpx;
			left: 50%;
			margin-left: -60rpx;

			.logo-image {
				width: 120rpx;
				height: 120rpx;
				border: 2px solid #fff;
				border-radius: 50%;
				background-color: #fff;
			}

			.logo-name {
				font-weight: bold;
				color: #fff;
				text-align: center;
			}
		}
	}

	.order {
		.order-title {
			padding: 20rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		.order-list {
			padding: 20rpx;
			display: flex;

			.order-item {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				.order-image {
					width: 66rpx;
					height: 66rpx;
				}
			}
		}
	}

	.my-content {
		padding: 20rpx;

		.my-content-item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20rpx 0;
			border-bottom: 2rpx solid #ccc;
		}
	}
</style>