<template>
	<view class="payment-success">

		<view class="f-active-color" style="font-size: 40rpx;" >支付成功了！</view>
		<view class="return f-active-color" @tap="() => backHome()">返回首页再买点</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			backHome() {
				uni.navigateTo({
					url: '../index/index'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.payment-success {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.return {
			padding: 10rpx 60rpx;
			border: 4rpx solid #49BDFB;
			border-radius: 40rpx;
			margin-top: 20rpx;
		}
	}
</style>