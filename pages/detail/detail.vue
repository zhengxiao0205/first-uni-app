<template>
	<view class="details">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(swiperItem, index) of swiperList" :key="index">
				<view class="swiper-item">
					<image class="swiper-image" :src="swiperItem.imgUrl" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- 价格和名称 -->
		<view class="details-goods">
			<view class="goods-pprice">￥{{goodsDetailInfo.currentPrice}}</view>
			<view class="goods-oprice">￥{{goodsDetailInfo.originPrice}}</view>
			<view class="goods-name">{{goodsDetailInfo.name}}</view>
		</view>
		<!-- 商品详情图 -->
		<view v-for="(goodImage, index) of goodsImageList" :key="index">
			<image class="detail-image" :src="goodImage.imgUrl" mode=""></image>
		</view>
		<!-- 商品列表 -->
		<Card cardTitle="看了又看"></Card>
		<CommodityList :commodityList="commodityList"></CommodityList>
		<view style="height: 90rpx;"></view>
		<!-- 底部 -->
		<view class="detail-foot">
			<view class="icon"><uni-icons color="#fff" type="chat" size="25"></uni-icons></view>
			<view class="icon" @tap="() => navigateToCart()"><uni-icons color="#fff" type="cart" size="25"></uni-icons></view>
			<view class="add-shopcart" @click="() => handleOpen()">加入购物车</view>
			<view class="purchase" @click="() => handleOpen()">立即购买</view>
		</view>
		<uni-popup ref="popup" type="bottom" @change="(e) => handlePopChange(e)">
			<view class="popup-wrapper">
				<view>
					<image class="pop-image" :src="goodsDetailInfo.imgUrl" mode=""></image>
				</view>
				<view class="pop-number">
					<view>购买数量</view>
					<view><uni-number-box v-model="purchaseCount" :min="1"></uni-number-box></view>
				</view>
				<view class="confirm bg-color" @click="() => handleConfirm()">
					确定
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import { fetchGoodsDetail } from '@/api/request.js'
	export default {
		data() {
			return {
				swiperList: [{
					imgUrl: '../../static/image/details1.jpeg'
				}, {
					imgUrl: '../../static/image/details2.jpeg'
				}, {
					imgUrl: '../../static/image/details3.jpeg'
				}],
				goodsImageList: [{
					imgUrl: '../../static/image/detail1.jpg'
				}, {
					imgUrl: '../../static/image/detail2.jpg'
				}, {
					imgUrl: '../../static/image/detail3.jpg'
				}, {
					imgUrl: '../../static/image/detail4.jpg'
				}, {
					imgUrl: '../../static/image/detail5.jpg'
				}],
				goodsDetailInfo: {},
				commodityList: [{
						id: 1,
						imgUrl: "../../static/image/commodity1.jpg",
						name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
						originPrice: 659,
						currentPrice: 299,
						discount: 5.2,
					},
					{
						id: 2,
						imgUrl: "../../static/image/commodity2.jpg",
						name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
						originPrice: 488,
						currentPrice: 233,
						discount: 3.1,
					},
					{
						id: 3,
						imgUrl: "../../static/image/commodity3.jpg",
						name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
						originPrice: 659,
						currentPrice: 299,
						discount: 5.2,
					},
					{
						id: 4,
						imgUrl: "../../static/image/commodity4.jpg",
						name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
						originPrice: 322,
						currentPrice: 144,
						discount: 3.2,
					},
					{
						id: 5,
						imgUrl: "../../static/image/commodity1.jpg",
						name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
						originPrice: 659,
						currentPrice: 299,
						discount: 5.2,
					},
					{
						id: 6,
						imgUrl: "../../static/image/commodity2.jpg",
						name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
						originPrice: 488,
						currentPrice: 233,
						discount: 3.1,
					},
					{
						id: 7,
						imgUrl: "../../static/image/commodity3.jpg",
						name: "Lucky Ozasec女士宽松显瘦褶皱爆款火热疯抢灯笼袖衬衫K19237",
						originPrice: 659,
						currentPrice: 299,
						discount: 5.2,
					},
					{
						id: 8,
						imgUrl: "../../static/image/commodity4.jpg",
						name: "璃音",
						originPrice: 322,
						currentPrice: 144,
						discount: 3.2,
					},
				],
				purchaseCount: 1,
				popupVisible: false,
			};
		},
		onBackPress() {
			if (this.popupVisible) {
				this.$refs.popup.close()
				return true
			}
		},
		onLoad(e) {
			fetchGoodsDetail(e.id).then(data => {
				this.goodsDetailInfo = data
			})
		},
		onNavigationBarButtonTap(e) {
			if (e.type === 'share') {
				uni.share({
					provider: 'qq',
					type: 0,
					title: '这是我分享的商品标题',
					href: 'http://192.168.31.95:8080/pages/detail/detail?id=8',
					imageUrl: 'https://upload-images.jianshu.io/upload_images/5472529-3bd133bd4451e048.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp',
					success: () => {
						uni.showTabBar({
							title: '分享成功'
						})
					}
				})
			}
		},
		methods: {
			handleOpen() {
				this.$refs.popup.open('bottom')
			},
			handleConfirm() {
				this.$store.commit('handleAddCart', {
					id: this.goodsDetailInfo.id,
					name: this.goodsDetailInfo.name,
					count: this.purchaseCount,
					price: this.goodsDetailInfo.currentPrice,
					specification: '颜色：返回后端传的',
					imgUrl: this.goodsDetailInfo.imgUrl
				})
				this.$refs.popup.close()
				uni.showToast({
					title: '成功加入购物车',
					icon: 'none'
				})
			},
			handlePopChange(e) {
				this.popupVisible = e.show
			},
			navigateToCart() {
				uni.switchTab({
					url: '../shopcart/shopcart'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	swiper {
		width: 100%;
		height: 700rpx;

		.swiper-image {
			width: 100%;
			height: 700rpx;
			display: block;
		}
	}

	.details-goods {
		text-align: center;
		font-weight: bold;
		font-size: 36rpx;
		padding: 10rpx 0;
	}

	.detail-image {
		width: 100%;
		height: 600rpx;
	}

	.detail-foot {
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 90rpx;
		background-color: #fff;

		.icon {
			width: 60rpx;
			height: 60rpx;
			border-radius: 100%;
			background-color: #000;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-left: 24rpx;
		}

		.add-shopcart {
			margin: 0 40rpx;
			padding: 6rpx 30rpx;
			background-color: #000;
			color: #fff;
			border-radius: 40rpx;
		}

		.purchase {
			margin: 0 40rpx;
			padding: 6rpx 30rpx;
			background-color: #49BDFB;
			color: #fff;
			border-radius: 40rpx;
		}
	}

	.popup-wrapper {
		background-color: #fff;

		.pop-image {
			width: 260rpx;
			height: 240rpx;
		}

		.pop-number {
			display: flex;
			justify-content: space-between;
			margin: 36rpx 0;
			padding: 0 20rpx;
		}

		.confirm {
			width: 100%;
			height: 90rpx;
			font-size: 32rpx;
			text-align: center;
			line-height: 90rpx;
			color: #fff;
		}
	}
</style>