<template>
	<view class="card">
		<view class="title">
			<view>—</view>
			<view class="card-name">{{cardTitle}}</view>
			<view>—</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			cardTitle: {
				type: String,
				default: ''
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.title {
		padding: 20rpx 0;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: bold;

		.card-name {
			padding: 0 20rpx;
			font-size: 32rpx;
		}
	}
</style>