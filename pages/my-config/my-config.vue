<template>
	<view class="my-config">
		<view class="config-item" @tap="() => navigateToAddress()" >
			<view>地址管理</view>
			<view> > </view>
		</view>
		<view class="config-item">
			<view>地址管理</view>
			<view> > </view>
		</view>
		<view class="config-item">
			<view>地址管理</view>
			<view> > </view>
		</view>
		<view class="config-item">
			<view>地址管理</view>
			<view> > </view>
		</view>
		<view class="config-item">
			<view>地址管理</view>
			<view> > </view>
		</view>
		<view class="config-item">
			<view>地址管理</view>
			<view> > </view>
		</view>
		<view class="my-exit" @tap="() => handleExit()" >退出登录</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
  
			};
		},
		methods:{
			navigateToAddress() {
				uni.navigateTo({
					url:'../my-address-list/my-address-list'
				})
			},
			handleExit() {
				this.$store.commit('clearUserInfo')
				uni.navigateBack()
			}
		}
	}
</script>

<style scoped lang="scss">
	.config-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 24rpx;
		border-bottom: 2rpx solid #cccccc;
	}

	.my-exit {
		margin-top: 20rpx;
		background-color: #49BDFB;
		width: 100%;
		line-height: 80rpx;
		color: #fff;
		text-align: center;
	}
</style>