<template>
	<view class="login-other">
		<view class="other-text">
			<text class="text">
				或者用以下方式登录
			</text>
		</view>
		<view class="other-items">
			<view class="item" @tap="() => loginOther('weixin')">
				<image class="item-image" src="../../static/image/wx.png" mode=""></image>
				<view>微信登录</view>
			</view>
			<view class="item" @tap="() => loginOther('sinaweibo')">
				<image class="item-image" src="../../static/image/wb.png" mode=""></image>
				<view>微博登录</view>
			</view>
			<view class="item" @tap="() => loginOther('qq')">
				<image class="item-image" src="../../static/image/qq.png" mode=""></image>
				<view>QQ登录</view>
			</view>
		</view>
		<view class="login-go">
			<view>已有账号，去登录</view>
			<image class="go-image" src="../../static/image/down.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			loginOther(mode) {
				uni.login({
					provider: mode,
					success: (res) => {
						const openId = res.authResult.openId
						uni.getUserInfo({
							provider: mode,
							success: ({ userInfo }) => {
								const { nickName, avatarUrl } = userInfo
								this.$store.commit('saveUserInfo', {
									username: nickName,
									imgUrl: avatarUrl
								})
								uni.switchTab({
									url: '../index/index'
								})
							}
						})
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.login-other {
		padding: 100rpx 0;

		.other-text {
			display: flex;
			padding: 50rpx 0;

			.text {
				line-height: 0rpx;
				padding: 0 10rpx;
			}

			&::before,
			&::after {
				flex: 1;
				content: '';
				height: 2rpx;
				background-color: #ccc;
			}
		}

		.other-items {
			display: flex;

			.item {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				.item-image {
					width: 80rpx;
					height: 80rpx;
				}
			}
		}

		.login-go {
			margin-top: 100rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.go-image {
				width: 60rpx;
				height: 60rpx;
			}
		}
	}
</style>