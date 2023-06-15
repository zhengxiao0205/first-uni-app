<template>
	<view class="payment">
		<uni-nav-bar :fixed="true" :statusBar="true" title="确认支付" leftText="关闭" @clickLeft="() => handleClickLeft()"
			:border="true">
		</uni-nav-bar>
		<view class="pay-list">
			<label for="" @tap="() => paymentType = 'zfb'" >
				<view class="pay-item">
					<view class="image-container">
						<image class="pay-image" src="../../static/image/zfb.png" mode=""></image>
					</view>
					<view class="text">
						<view class="label">支付宝支付</view>
						<view class="tip">推荐支付宝用户使用</view>
					</view>
					<label class="radio">
						<radio :checked="paymentType === 'zfb'" color="#FF3333" />
					</label>  
				</view>
			</label>
			<label for="" @tap="() => paymentType = 'wxf'">
				<view class="pay-item">
					<view class="image-container">
						<image class="pay-image" src="../../static/image/wxf.png" mode=""></image>
					</view>
					<view class="text">
						<view class="label">微信支付</view>
						<view class="tip">推荐有微信账户的用户使用</view>
					</view>
					<label class="radio">
						<radio :checked="paymentType === 'wxf'" color="#FF3333" />
					</label>
				</view>
			</label>
		</view>
		<view class="foot">
			<view class="total">合计：￥159.00</view>
			<view class="pay bg-color" @tap="() => handleToPay()" >去支付</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				paymentType: 'zfb'
			};
		},
		methods: {
			handleClickLeft() {
				uni.navigateBack()
			},
			handleToPay() {
				uni.navigateTo({
					url: '../payment-success/payment-success'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.pay-list {
		padding: 20rpx;
		background-color: #fff;

		.pay-item {
			width: 100%;
			display: flex;
			align-items: center;
			padding: 20rpx 0;
			border-bottom: 2rpx solid #F7F7F7;

			.image-container {
				width: 200rpx;
				display: flex;
				justify-content: center;
				align-items: center;

				.pay-image {
					width: 120rpx;
					height: 120rpx;
				}
			}

			.text {
				width: 500rpx;

				.label {
					font-weight: bold;
					font-size: 36rpx;
					font-size: #636263;
				}

				.tip {
					font-size: 24rpx;
					color: #888888;
				}
			}
		}
	}

	.foot {
		height: 100rpx;
		position: fixed;
		display: flex;
		align-items: center;
		bottom: 0;
		width: 100%;
		padding: 0;

		.total {
			width: 65%;
			height: 100%;
			background-color: #171717;
			color: #fff;
			padding-left: 20rpx;
			line-height: 100rpx;
			font-size: 32rpx;
		}

		.pay {
			flex: 1;
			height: 100%;
			color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 32rpx;
		}
	}
</style>