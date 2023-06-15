<template>
	<view class="my-order">
		<Lines></Lines>
		<view class="order-header">
			<view class="header-item" :class="{active: index === activeIndex}" v-for="(orderItem, index)  of orderData"
				:key="index" @tap="() => handleSwitchOrderTab(index)">
				{{orderItem.name}}
			</view>
		</view>
		<scroll-view :style="{height: `${contentHeight}px`}" class="order-scroll" scroll-y="true">
			<view class="order-main" v-if="orderData[activeIndex].list.length > 0">
				<!-- 商品 -->
				<view class="order-goods" v-for="(statusList, index) of orderData[activeIndex].list" :key="index">
					<view class="goods-title">
						<view class="goods-name">床上用品专卖店</view>
						<view class="goods-status f-active-color">{{statusList.status}}</view>
					</view>
					<view class="goods-content" v-for="(goodsItem, index) in statusList.goodsList" :key="index">
						<image class="goods-image" :src="goodsItem.imgUrl" mode=""></image>
						<view class="goods-text">
							<view class="name">{{goodsItem.name}}</view>
							<view class="f-color" style="font-size: 20rpx;">{{goodsItem.specification}}</view>
							<view class="f-active-color" style="font-size: 24rpx;">7天无理由</view>
						</view>
						<view>
							<view>￥{{goodsItem.price}}</view>
							<view class="f-color">× {{goodsItem.count}}</view>
						</view>
					</view>
				</view>
				<!-- 总价 -->
				<view class="total-price">
					订单金额：<text class="f-active-color">￥39.00</text>(包含运费￥0.00)
				</view>
				<!-- 支付 -->
				<view class="payment">
					<view class="payment-text f-active-color">支付</view>
				</view>
			</view>
			<view class="empty" v-else>
				<view>您还没有相关订单</view>
				<view class="to-home-button" @tap="() => handleToHome()">去首页逛逛</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: 0,
				orderData: [{
						name: '全部',
						list: [{
							status: '待买家支付',
							goodsList: [{
								id: 1,
								name: 'Lucky Ozasec女士宽松显瘦褶皱爆款火热疯宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237',
								imgUrl: '../../static/image/Children3.jpg',
								specification: '黑色 尺寸45*45',
								price: '299.00',
								count: 1
							}, {
								id: 2,
								name: 'Lucky Ozasec女士宽松显瘦褶皱爆款火热疯宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237',
								imgUrl: '../../static/image/Children3.jpg',
								specification: '黑色 尺寸45*45',
								price: '299.00',
								count: 1
							}]
						}, {
							status: '待卖家发货',
							goodsList: [{
								id: 1,
								name: 'Lucky Ozasec女士宽松显瘦褶皱爆款火热疯宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237',
								imgUrl: '../../static/image/Children3.jpg',
								specification: '黑色 尺寸45*45',
								price: '299.00',
								count: 1
							}, {
								id: 2,
								name: 'Lucky Ozasec女士宽松显瘦褶皱爆款火热疯宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237',
								imgUrl: '../../static/image/Children3.jpg',
								specification: '黑色 尺寸45*45',
								price: '299.00',
								count: 1
							}]
						}]
					}, {
						name: '待付款',
						list: [{
							status: '待买家支付',
							goodsList: [{
								id: 1,
								name: 'Lucky Ozasec女士宽松显瘦褶皱爆款火热疯宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237',
								imgUrl: '../../static/image/Children3.jpg',
								specification: '黑色 尺寸45*45',
								price: '299.00',
								count: 1
							}, {
								id: 2,
								name: 'Lucky Ozasec女士宽松显瘦褶皱爆款火热疯宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237',
								imgUrl: '../../static/image/Children3.jpg',
								specification: '黑色 尺寸45*45',
								price: '299.00',
								count: 1
							}]
						}]
					},
					{
						name: '待发货',
						list: []
					},
					{
						name: '待收货',
						list: []
					},
					{
						name: '待评价',
						list: []
					}
				],
				contentHeight: 0
			};
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					this.contentHeight = res.windowHeight - uni.upx2px(108)
				}
			})
		},
		methods: {
			handleSwitchOrderTab(index) {
				this.activeIndex = index
			},
			handleToHome() {
				uni.navigateTo({
					url: '../index/index'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.my-order {
		.order-header {
			display: flex;
			border-bottom: 2px solid #F7F7F7;

			.header-item {
				flex: 1;
				line-height: 100rpx;
				text-align: center;

				&.active {
					border-bottom: 4rpx solid #49BDFB;
				}
			}
		}

		.order-scroll {
			background-color: #F7F7F7;

			.order-main {
				.order-goods {
					.goods-title {
						display: flex;
						justify-content: space-between;
						padding: 20rpx;
					}

					.goods-content {
						display: flex;
						background-color: #F7F7F7;
						padding: 10rpx 20rpx;
						justify-content: center;
						align-items: center;

						.goods-image {
							width: 180rpx;
							height: 160rpx;
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

				.total-price {
					background-color: #fff;
					padding: 20rpx;
					display: flex;
					justify-content: flex-end;
				}

				.payment {
					background-color: #fff;
					padding: 20rpx;
					display: flex;
					justify-content: flex-end;

					.payment-text {
						border: 2rpx solid #49BDFB;
						padding: 6rpx 40rpx;
						border-radius: 40rpx;
					}
				}
			}
		}

		.empty {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			background-color: #fff;

			.to-home-button {
				padding: 6rpx 60rpx;
				border: 2rpx solid #49BDFB;
				color: #49BDFB;
				border-radius: 40rpx;
				margin-top: 12rpx;
			}
		}
	}
</style>