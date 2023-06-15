<template>
	<view class="shop">
		<view class="shop-item">
			<image class="shop-big-image" src="../../static/image/shop.jpg" mode=""></image>
			<scroll-view scroll-x="true">
				<view :style="{width: `${shopList.length*250}rpx`}">
					<Commodity :commodityList="shopList" :itemWidth="250" :image-height="250"></Commodity>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['shopList'],
		data() {
			return {

			};
		}
	}
</script>

<style scoped lang="scss">
	.shop-big-image {
		width: 100%;
		height: 350rpx;
		display: block;
	}
</style>