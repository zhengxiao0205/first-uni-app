<template>
	<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
		<swiper-item v-for="(swiperItem, index) of swiperList" :key="index">
			<view class="swiper-item"> 
				<image :src="swiperItem.imgUrl" mode=""></image>
			</view>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		props: ['swiperList'],
		data() {
			return {
		
			};
		}
	}
</script>

<style scoped lang="scss">
	swiper,
	image {
		width: 100%;
		height: 400rpx;
	}
</style>