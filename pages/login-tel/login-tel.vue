<template>
	<view class="login-tel">
		<Lines></Lines>
		<view class="tel-input">
			<text class="label">手机号</text>
			<input :focus="true" type="number" v-model="userTel" placeholder="请输入11位手机号">
		</view>
		<view class="next-button" @tap="() => toCode()">
			下一步
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userTel: ''
			};
		},
		methods: {
			// 这里应该要判断手机号是否存在，这里默认不存在，进入下一步
			toCode() {
				uni.navigateTo({
					url: `../code/code?userTel=${this.userTel}`
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.login-tel {
		padding: 0 40rpx;

		.tel-input {
			display: flex;
			align-items: center;
			border-bottom: 2rpx solid #aaa;
			padding: 30rpx 0;

			.label {
				margin-right: 10rpx;
			}
		}

		.next-button {
			margin-top: 20rpx;
			height: 80rpx;
			line-height: 80rpx;
			background-color: #49BDFB;
			color: #fff;
			text-align: center;
			border-radius: 80rpx;
		}
	}
</style>