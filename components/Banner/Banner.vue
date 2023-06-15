<template>
	<view class="banner">
		<image :src="banner.imgUrl" mode=""></image>
	</view>
</template>

<script>
	export default {
		props: ['banner'],
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.banner {
		width: 100%;
		height: 360rpx;

		image {
			width: 100%;
			height: 100%;
		}
	}
</style>