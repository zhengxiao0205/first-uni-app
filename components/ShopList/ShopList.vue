<template>
	<view>
		<view class="shop-list">
			<view class="shop-item" v-for="(sortItem, index) of shopList.sortItems" :key="sortItem.name"
				@tap="() => handleTapSort(sortItem, index)">
				<text class="label"
					:class="shopList.activeIndex === index ?'f-active-color' : 'f-color'">{{sortItem.name}}</text>
				<view class="icons">
					<uni-icons :color="shopList.activeIndex === index && sortItem.sortType === 'ascend' ? '#49BDFB' : '#ccc'"
						class="icon up" type="top" size="12"></uni-icons>
					<uni-icons :color="shopList.activeIndex === index && sortItem.sortType === 'descend' ? '#49BDFB' : '#ccc'"
						class="icon bottom" type="bottom" size="12"></uni-icons>
				</view>
			</view>
		</view>
		<Lines></Lines>
		<view style="height: 24rpx"></view>
		<CommodityList v-if="commodityList.length > 0" :commodityList='commodityList'></CommodityList>
		<view v-else style="text-align: center;">暂无搜索结果</view>
	</view>

</template>

<script>
	import { fetchSearchData } from '@/api/request.js'
	export default {
		props: ['searchText'],
		data() {
			return {
				shopList: {
					activeIndex: 0,
					sortItems: [{
							name: '价格',
							sortType: 'ascend'
						},
						{
							name: '折扣',
							sortType: 'ascend'
						},
						{
							name: '品牌',
							sortType: 'ascend'
						}
					]
				},
				commodityList: []
			};
		},
		mounted() {
			this.handleSearch()
		},
		methods: {
			handleTapSort(sortItem, index) {
				if (this.shopList.activeIndex !== index) {
					this.shopList.activeIndex = index
				} else {
					sortItem.sortType = sortItem.sortType === 'ascend' ? 'descend' : 'ascend'
				}
				this.handleSearch()
			},
			handleSearch() {
				fetchSearchData(this.searchText, this.shopList.sortItems[this.shopList.activeIndex].name, this.shopList
					.sortItems[this.shopList.activeIndex].sortType).then(data => {
					this.commodityList = data
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.shop-list {
		width: 100%;
		display: flex;
		justify-content: center;
		padding: 6rpx 0;

		.shop-item {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;

			.label {
				font-size: 32rpx;
			}

			.icons {
				margin-left: 16rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				position: relative;

				.icon {
					width: 16rpx;
					height: 8rpx;
					position: absolute;
				}

				.up {
					top: -26rpx;
				}

				.bottom {
					top: -12rpx
				}
			}

		}
	}
</style>