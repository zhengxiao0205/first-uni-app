<template>
	<view class="recommend bg-color">
		<view v-for="(recommendItem, index) of recommendList" :key="index" class="recommend-item">
			<image class="item-big" :src="recommendItem.bigUrl" mode=""></image>
			<view class="item-small">
				<image v-for="(smallItem, index) of recommendItem.data" :key="index" class="item-img" :src="smallItem.imgUrl"
					mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['recommendList'],
		data() {
			return {
		
			}; 
		}
	}
</script>

<style lang="scss" scoped>
	.recommend {
		padding: 20rpx;

		.recommend-item {
			display: flex;
			flex-direction: column;
			border-radius: 20rpx;
			overflow: hidden;
			margin: 20rpx 0;

			.item-big {
				width: 100%;
				height: 300rpx;
			}

			.item-small {
				width: 100%;
				height: 240rpx;
				display: flex;

				.item-img {
					height: 100%;
					flex: 1;
				}
			}
		}
	}
</style>