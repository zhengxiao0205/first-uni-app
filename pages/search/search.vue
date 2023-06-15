<template>
	<view class="search">
		<Lines></Lines>
		<view class="content">
			<view class="recent">
				<view class="label">
					<text class="f-color">最近搜索</text>
					<uni-icons @tap="() => handleClear()" color="#636263" type="trash-filled" size="20"></uni-icons>
				</view>
				<view class="search-items" v-if="recentSearchKeywords.length > 0">
					<view @tap="() => handleTapSearchItem(searchItem)" class="search-item f-color"
						v-for="searchItem of recentSearchKeywords" :key="searchItem">
						{{searchItem}}
					</view>
				</view>
				<view v-else style="text-align: center;">
					暂无搜索记录
				</view>
			</view>
			<view class="hot">
				<view class="label">
					<text class="f-color">热门搜索</text>
				</view>
				<view class="search-items">
					<view class="search-item f-color" @tap="() => handleTapSearchItem(searchItem)" v-for="searchItem of hotItems"
						:key="searchItem">
						{{searchItem}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				recentSearchKeywords: [],
				hotItems: ['四件套', 'adidas', '华为', '苹果', '小米', '联想笔记本', '4090显卡'],
				searchText: ''
			};
		},
		onNavigationBarButtonTap(e) {
			this.handleSearch()
		},
		onNavigationBarSearchInputChanged(e) {
			this.searchText = e.text
		},
		onNavigationBarSearchInputConfirmed(e) {
			this.handleSearch()
		},
		onShow() {
			this.recentSearchKeywords = uni.getStorageSync('recentSearchKeywords') || []
		},
		methods: {
			handleSearch() {
				if (this.searchText) {
					this.addSearchKeyword()
					uni.navigateTo({
						url: `../search-list/search-list?searchText=${this.searchText}`
					})
				} else {
					uni.showToast({
						title: '关键词不能为空',
						icon: 'none'
					})
				}
			},
			handleTapSearchItem(searchItem) {
				this.searchText = searchItem
				this.handleSearch()
			},
			addSearchKeyword() {
				let keywords = uni.getStorageSync('recentSearchKeywords') || []
				if (!keywords.includes(this.searchText)) {
					keywords.unshift(this.searchText)
				} else {
					keywords = keywords.filter(keyword => keyword !== this.searchText)
					keywords.unshift(this.searchText)
				}
				uni.setStorageSync('recentSearchKeywords', keywords)
			},
			handleClear() {
				uni.showModal({
					title: '重要提示',
					content: '是否要清楚搜索记录',
					cancelText: '取消',
					confirmText: '确定',
					success: (res) => {
						if (!res.cancel) {
							uni.clearStorageSync('recentSearchKeywords')
							this.recentSearchKeywords = []
						}
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.content {
		padding: 12rpx 24rpx;

		.recent,
		.hot {
			margin-bottom: 24rpx;

			.label {
				display: flex;
				justify-content: space-between;
				height: 60rpx;
			}

			.search-items {
				display: flex;
				flex-wrap: wrap;

				.search-item {
					background-color: #E1E1E1;
					border-radius: 32rpx;
					padding: 4rpx 24rpx;
					margin-right: 20rpx;
					margin-bottom: 16rpx;
				}
			}
		}
	}
</style>