<template>
	<view>
		<Lines></Lines>
		<view class="list">
			<scroll-view class="left" scroll-y="true" :style="{height: `${contentHeight}px`}">
				<view @tap="() => handleSwitchTab(index)" v-for="(goodItem, index) of goodsData" :key="index" class="left-item"
					:class="{active: index === activeIndex}">
					{{goodItem.name}}
				</view>
			</scroll-view>
			<scroll-view class="right" scroll-y="true" :style="{height: `${contentHeight}px`}">
				<view v-for="(typeItem, index) of rightData" :key="index">
					<view class="title">{{typeItem.name}}</view>
					<view class="right-items">
						<view v-for="(good, index) of typeItem.list" :key="index" class="right-item">
							<image class="image" :src="good.imgUrl" mode=""></image>
							<view class="name">{{good.name}}</view>
						</view>
					</view>
					<view style="height: 40rpx;"></view>
				</view>
			</scroll-view>
		</view>
<!-- 		<view style="height: 120rpx" ></view>
		<Tabbar currentPage="list"></Tabbar> -->
	</view>
</template>

<script>
	import { fetchGoodsList } from '@/api/request.js'
	export default {
		data() {
			return {
				activeIndex: 0,
				contentHeight: 0,
				goodsData: [],
				rightData: []
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					const windowHeight = res.windowHeight
					const contentHeight = res.windowHeight - uni.upx2px(2)
					this.contentHeight = contentHeight
				}
			});
			fetchGoodsList().then(data => {
				this.goodsData = data
				this.rightData = this.goodsData[this.activeIndex].data
			})
		},
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url: '../search/search'
			})
		},
		methods: {
			handleSwitchTab(index) {
				this.activeIndex = index
				this.rightData = this.goodsData[this.activeIndex].data
			}
		}
	}
</script>

<style scoped lang="scss">
	.list {
		display: flex;

		.left {
			flex: 240rpx;

			.left-item {
				padding: 30rpx 6rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				border-bottom: 2rpx solid #fff;
				background-color: #F7F7F7;
				font-weight: bold;

				&.active {
					background-color: #fff;
					border-left: 8rpx solid #49BDFB;
				}
			}
		}

		.right {
			flex: auto;
			padding-left: 12rpx;

			.title {
				padding: 30rpx;
				font-weight: bold;
			}

			.right-items {
				display: flex;
				flex-wrap: wrap;
				justify-content: flex-start;
				align-items: center;

				.right-item {
					width: 33.3%;
					display: flex;
					flex-direction: column;
					align-items: center;

					.image {
						width: 180rpx;
						height: 180rpx;
					}
				}
			}


		}
	}
</style>