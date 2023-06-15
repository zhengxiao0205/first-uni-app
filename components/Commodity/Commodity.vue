<!-- 单个商品组件 -->
<template>
	<view class="commodity">
		<view class="commodity-item" :style="{width: `${itemWidth}rpx`}" v-for="(commodity, index) of commodityList"
			:key="index" @tap="() => toDetails(index)">
			<image class="commodity-image" :style="{height: `${imageHeight}rpx`}" :src="commodity.imgUrl" mode=""></image>
			<view class="commodity-content">
				<text class="commodity-name">
					{{commodity.name}}
				</text>
				<view>
					<text class="current-price">￥{{commodity.originPrice}}</text>
					<text class="origin-price">￥{{commodity.currentPrice}}</text>
				</view>
				<text class="discount">{{commodity.discount}}折</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			commodityList: {
				type: Array,
				default: []
			},
			itemWidth: {
				type: Number,
				default: 375 
			},
			imageHeight: {
				type: Number, 
				default: 375
			}
		},
		data() {
			return {

			};
		},
		methods: {
			toDetails(id) {
				uni.navigateTo({
					url: `../../pages/detail/detail?id=${id}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.commodity {
		display: flex;
		flex-wrap: wrap;

		.commodity-item {
			padding-bottom: 20rpx;

			.commodity-image {
				width: 100%;
			}

			.commodity-content {
				text-align: center;

				.commodity-name {
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					word-break: break-all;
					color: #333333;
					padding: 6rpx 20rpx;
					line-height: 1rem;
				}

				.origin-price {
					text-decoration: line-through;
					font-size: 24rpx;
					color: #999999;
				}

				.discount {
					border-radius: 4rpx;
					border: 2rpx solid #FF3333;
					padding: 2rpx 10rpx;
					font-size: 20rpx;
					color: #FF3333;
				}
			}
		}
	}
</style>