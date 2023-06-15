<template>
	<view class="my-address-list">
		<uni-swipe-action class="address-list">
			<uni-swipe-action-item v-for="(addressItem, index) of list" :key="index" :right-options="options"
				@tap="(e) => handleToAddAddress(e, index)">
				<view class="address-item" @tap="() => handleSelectAddress(index)">
					<view class="item-content">
						<view class="name">{{addressItem.name}}</view>
						<view class="mobile">{{addressItem.mobilePhone}}</view>
					</view>
					<view class="item-content">
						<view class="default" v-if="addressItem.isDefault">默认</view>
						<view>{{addressItem.cityName}}{{addressItem.detailAddress}}</view>
					</view>
				</view>
			</uni-swipe-action-item>
		</uni-swipe-action>
		<view class="add-address">
			<view class="add-address-button" @tap="() => handleNavigateToAddressAdd()">
				新增地址
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				select: false,
				options: [{
					text: '修改',
					style: {
						backgroundColor: '#2E2D2E'
					}
				}, {
					text: '删除',
					style: {
						backgroundColor: '#EA3B2E'
					}
				}]
			}
		},
		onLoad(e) {
			if (e.select) {
				this.select = true
			}
		},
		methods: {
			handleToAddAddress(e, index) {
				if (e.index === 0) {
					uni.navigateTo({
						url: `../my-add-address/my-add-address?index=${index}`
					})
				}
			},
			handleSelectAddress(index) {
				if (this.select) {
					uni.navigateBack()
					uni.$emit('selectAddress', index)
				}
			},
			handleNavigateToAddressAdd() {
				uni.navigateTo({
					url: '../my-add-address/my-add-address'
				})
			}
		},
		computed: {
			list() {
				return this.$store.state.address.list
			}
		}
	}
</script>

<style scoped lang="scss">
	.address-list {
		padding-left: 20rpx;

		.address-item {
			padding: 10rpx 0;
			display: flex;
			flex-direction: column;
			border-bottom: 2rpx solid #cccccc;

			.item-content {
				display: flex;

				.name {
					margin-right: 12rpx;
				}

				.default {
					padding: 4rpx 12rpx;
					background-color: #49BDFB;
					color: #fff;
					border-radius: 10rpx;
					margin-right: 12rpx;
				}
			}
		}
	}

	.add-address {
		margin-top: 20rpx;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;

		.add-address-button {
			border: 2rpx solid #49BDFB;
			color: #49BDFB;
			border-radius: 30rpx;
			padding: 6rpx 60rpx;
		}
	}
</style>