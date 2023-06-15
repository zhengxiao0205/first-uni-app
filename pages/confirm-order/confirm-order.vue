<template>
	<view class="confirm-order" :style="{height: `${contentHeight}px`}">
		<Lines></Lines>
		<view class="receive-info" @tap="() => handleNavigateToSelectAddress()">
			<template v-if="defaultAddress">
				<view class="receiver">
					<view>收货人：{{defaultAddress.name}}</view>
					<view>{{defaultAddress.mobilePhone}}</view>
				</view>
				<view class="address">
					收货地址：{{defaultAddress.cityName}}{{defaultAddress.detailAddress}}
				</view>
			</template>
			<template v-else>
				请设置默认地址
			</template>
		</view>
		<view class="order-detail">
			<view>
				苏州婚纱专卖店
			</view>
			<view class="goods-content">
				<image class="goods-image" src="../../static/image/Children3.jpg" mode=""></image>
				<view class="goods-text">
					<view class="name">Lucky Ozasec女士宽松显瘦褶皱爆款火热疯宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237</view>
					<view class="f-color" style="font-size: 20rpx;">黑色 尺寸45*45</view>
					<view class="f-active-color" style="font-size: 24rpx;">7天无理由</view>
				</view>
				<view>
					<view>￥299.00</view>
					<view class="f-color">× 1</view>
				</view>
			</view>
		</view>
		<view class="post-cost">
			<view>运费</view>
			<view>￥0.00</view>
		</view>
		<view class="message">
			<text>留言：</text>
			<input type="text" placeholder="给卖家的留言,140字以内">
		</view>
		<view class="price">
			<text>
				共1件商品 小计：<text class="f-active-color" style="font-size: 32rpx;">￥149.00</text>
			</text>
		</view>
		<view class="foot">
			<view class="total-cost">
				合计：<text class="f-active-color" style="font-size: 32rpx;">￥149.00</text>
			</view>
			<view class="confirm bg-color" @tap="() => handleForwordOrder()">提交订单</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				contentHeight: 0,
				selectAddressIndex: -1
			};
		},
		onLoad(e) {
			uni.getSystemInfo({
				success: (res) => {
					this.contentHeight = res.windowHeight
				}
			})
			uni.$on('selectAddress', index => {
				this.selectAddressIndex = index
			})

		},
		methods: {
			handleNavigateToSelectAddress() {
				uni.navigateTo({
					url: '../my-address-list/my-address-list?select=true'
				})
			},
			handleForwordOrder() {
				uni.navigateTo({
					url: '../payment/payment'
				})
			}
		},
		computed: {
			defaultAddress() {
				if (this.selectAddressIndex === -1) {
					return this.$store.state.address.list.find(address => address.isDefault)
				} else {
					return this.$store.state.address.list[this.selectAddressIndex]
				}
			},
			cartList() {
				return this.$store.state.cart.list
			},
			selectedCartList() {
				return this.$store.state.cart.selectedIds
			}
		}
	}
</script>

<style scoped lang="scss">
	.confirm-order {
		background-color: #F7F7F7;

		.receive-info {
			padding: 40rpx;
			background-color: #fff;
			margin-bottom: 30rpx;

			.receiver {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 12rpx;
			}
		}

		.order-detail {
			padding: 20rpx;
			background-color: #ffffff;

			.goods-content {
				display: flex;
				background-color: #F7F7F7;
				justify-content: center;
				align-items: center;

				.goods-image {
					width: 190rpx;
					height: 170rpx;
				}

				.goods-text {
					width: 380rpx;
					padding: 0 10rpx;

					.name {
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2; // 这里控制文本显示的行数
						-webkit-box-orient: vertical;
						word-break: break-all; // 可以在任意字符间进行断行
					}
				}
			}
		}

		.post-cost {
			display: flex;
			justify-content: space-between;
			padding: 20rpx;
			background-color: #fff;
		}

		.message {
			padding: 20rpx;
			background-color: #fff;
			display: flex;
			align-items: center;
		}

		.price {
			padding: 20rpx;
			background-color: #fff;
			display: flex;
			align-items: center;
			justify-content: flex-end;
		}

		.foot {
			background-color: #fff;
			width: 100%;
			position: fixed;
			bottom: 0;
			line-height: 100rpx;
			display: flex;
			align-items: center;

			.total-cost {
				flex: 3;
				display: flex;
				justify-content: flex-end;
				line-height: 100rpx;
				padding-right: 20rpx;
			}

			.confirm {
				flex: 1;
				color: #fff;
				padding: 6rpx 30rpx;
				line-height: 100rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 32rpx;
				font-weight: bold;
			}
		}
	}
</style>