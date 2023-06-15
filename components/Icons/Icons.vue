<template>
	<view class="icons">
		<view class="icon-item" v-for="icon of icons" :key="icon.imageUrl">
			<image class="icon-image" :src="icon.imageUrl" mode=""></image>
			<text class="f-color">{{icon.name}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['icons'],
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.icons {
		display: flex;
		flex-wrap: wrap;

		.icon-item {
			width: 25%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding-top: 20rpx;

			.icon-image {
				width: 110rpx;
				height: 110rpx;
			}
		}
	}
</style>