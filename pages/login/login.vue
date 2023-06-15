<template>
	<swiper :vertical="true" style="height: 100vh;">
		<swiper-item>
			<scroll-view scroll-y="true">
				<view class="login-tel">
					<view class="tel-main">
						<view class="close" @tap="() => handleClose()">
							<image class="close-image" src="../../static/image/close.png" mode=""></image>
						</view>
						<view class="logo">
							<image src="../../static/image/logo.jpg" mode=""></image>
						</view>
						<view class="tel" @tap="() => toLoginTel()">手机号注册</view>
						<LoginOther></LoginOther>
					</view>
				</view>
			</scroll-view>
		</swiper-item>
		<swiper-item>
			<scroll-view scroll-y="true">
				<view class="login-tel">
					<view class="tel-main">
						<view class="close" @tap="() => handleClose()">
							<image class="close-image" src="../../static/image/close.png" mode=""></image>
							<view class="login-go">
								<image class="close-image" src="../../static/image/up.png" mode=""></image>
								<view>没有账号，去注册</view>
							</view>
							<view style="width: 60rpx"></view>
						</view>
						<view class="login-form">
							<view class="username">
								<text class="label">账号</text>
								<input type="text" v-model="username" placeholder="请输入手机号/昵称">
							</view>
							<view class="password">
								<text class="label">密码</text>
								<input type="text" v-model="password" placeholder="6-16位字符">
							</view>
						</view>
						<view class="login-quick">
							<view>忘记密码</view>
							<view>免密登录</view>
						</view>
						<view class="tel" @click="() => handleSubmit()">登录</view>
						<view class="remind">温馨提示：您可以选择免密登录，更加方便</view>
						<LoginOther></LoginOther>
					</view>
				</view>
			</scroll-view>
		</swiper-item>
	</swiper>
</template>

<script>
	import { login } from '@/api/request.js'
	export default {
		data() {
			return {
				username: '',
				password: ''
			};
		},
		methods: {
			handleClose() {
				uni.navigateBack()
			},
			handleSubmit() {
				uni.showLoading({
					title: '登录中'
				})
				login(this.username, this.password).then(res => {
					uni.showToast({
						title: res.msg
					})
					this.$store.commit('saveUserInfo', res.data)
					uni.switchTab({
						url: '../index/index'
					})
				})

			},
			toLoginTel() {
				uni.navigateTo({
					url: '../login-tel/login-tel'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.login-tel {
		width: 100vw;
		height: 100vh;

		.tel-main {
			padding: 0 20rpx;

			.close {
				padding: 120rpx 0;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.close-image {
					width: 60rpx;
					height: 60rpx;
				}

				.login-go {
					flex: 1;
					flex-direction: column;
					display: flex;
					align-items: center;
				}
			}

			.logo {
				margin-bottom: 100rpx;
				display: flex;
				justify-content: center;
			}
		}

		.login-form {
			margin-top: 100rpx;

			.username,
			.password {
				font-size: 32rpx;
				padding: 10rpx 0;
				display: flex;
				align-items: center;
				border-bottom: 2rpx solid #999;

				.label {
					padding-right: 10rpx;
				}
			}
		}

		.login-quick {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20rpx 0;
		}

		.tel {
			width: 100%;
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;
			background-color: #49BDFB;
			border-radius: 40rpx;
			color: #fff;
			margin: 10rpx 0;
		}

		.remind {
			color: #aaa;
			padding: 20rpx 0;
			text-align: center;
		}
	}
</style>