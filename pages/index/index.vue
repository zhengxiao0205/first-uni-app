<template>
	<view class="index">
		<scroll-view scroll-x="true" style="margin-bottom: 12rpx;" :scroll-into-view="`top-${activeIndex}`">
			<view class="navbar" :style="{width: `${indexData.navBars.length*150}rpx`}">
				<view v-for="(navBar, index) of indexData.navBars" :key="navBar.id" :id="`top-${index}`" class="navbar-item"
					:class="{active : index === activeIndex}" @tap="() => handleClickNavBar(index)">
					<text>{{navBar.name}}</text>
				</view>
			</view>
		</scroll-view>
		<swiper :style="{height: `${contentHeight}px`}" :current="activeIndex" @change="(e) => handleSwiper(e)"
			:indicator-dots="false" :autoplay="false">
			<swiper-item v-for="(navBar, index) of indexData.navBars" :key="navBar.id">
				<scroll-view @scrolltolower="() => handleLoadMore(navBar.id)" scroll-y="true"
					:style="{height: `${contentHeight}px`}">
					<block v-if="index === 0">
						<IndexSwipper :swiperList="indexData.swiperList"></IndexSwipper>
						<Recommend :recommendList="indexData.recommendList"></Recommend>
						<Card cardTitle="猜你喜欢"></Card>
						<CommodityList :commodityList="indexData.commodityList"></CommodityList>
					</block>
					<block v-if="index === 1">
						<Banner :banner="sportsData.banner"></Banner>
						<Icons :icons="sportsData.icons"></Icons>
						<Card cardTitle="热销爆品"></Card>
						<Hot :hot="sportsData.hot"></Hot>
						<Card cardTitle="推荐店铺"></Card>
						<Shop :shopList="sportsData.shopList"></Shop>
						<Card cardTitle="为您推荐"></Card>
						<CommodityList :commodityList="sportsData.commodityList"></CommodityList>
					</block>
					<block v-if="index > 1">
						<Banner :banner="clothData.banner"></Banner>
						<Icons :icons="clothData.icons"></Icons>
						<Card cardTitle="热销爆品"></Card>
						<Hot :hot="clothData.hot"></Hot>
						<Card cardTitle="推荐店铺"></Card>
						<Shop :shopList="clothData.shopList"></Shop>
						<Card cardTitle="为您推荐"></Card>
						<CommodityList :commodityList="clothData.commodityList"></CommodityList>
					</block>
					<view class="loading f-color" v-if="loading">加载中...</view>
					<!-- <view style="height: 120rpx"></view> -->
				</scroll-view>
			</swiper-item>
		</swiper>
		<!-- <Tabbar currentPage="index"></Tabbar> -->
	</view>
</template>

<script>
	import {
		fetchIndexData,
		fetchSportsData,
		fetchClothData,
		fetchIndexPageData,
		fetchSportsPageData,
		fetchClothPageData
	} from '@/api/request.js'
	export default {
		data() {
			return {
				activeIndex: 0,
				// 以下是首页数据
				indexData: {
					page: 0,
					navBars: [],
					swiperList: [],
					recommendList: [],
					commodityList: [],
				},
				// 以下是运动分栏的数据
				sportsData: {
					page: 0,
					banner: {},
					icons: [],
					hot: [],
					shopList: [],
					commodityList: []
				},
				// 以下是服饰以及后面分栏的数据
				clothData: {
					page: 0,
					banner: {},
					icons: [],
					hot: [],
					shopList: [],
					commodityList: []
				},
				contentHeight: 0,
				loading: false,
			}
		},
		onLoad() {
			this.loadIndexData()
		},
		onReady() {
			uni.getSystemInfo({
				success: (res) => {
					const windowHeight = res.windowHeight
					const contentHeight = windowHeight - uni.upx2px(80)
					this.contentHeight = contentHeight
				}
			})
		},
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				url: '../search/search'
			})
		},
		methods: {
			loadIndexData() {
				fetchIndexData().then((responseData) => {
					const { topBar, swiperList, recommendList, commodityList } = responseData
					this.indexData = {
						page: 1,
						navBars: topBar,
						swiperList,
						recommendList,
						commodityList
					}
					this.loading = false
				})
			},
			loadSportsData() {
				fetchSportsData().then((responseData) => {
					const { banner, icons, hot, shopList, commodityList } = responseData
					this.sportsData = {
						page: 1,
						banner,
						icons,
						hot,
						shopList,
						commodityList
					}
					this.loading = false
				})
			},
			loadClothData() {
				fetchClothData().then((responseData) => {
					const { banner, icons, hot, shopList, commodityList } = responseData
					this.clothData = {
						page: 1,
						banner,
						icons,
						hot,
						shopList,
						commodityList
					}
					this.loading = false
				})
			},
			handleClickNavBar(index) {
				this.activeIndex = index
			},
			handleSwiper(e) {
				this.activeIndex = e.detail.current
				const id = this.indexData.navBars[this.activeIndex].id
				if (id === 0) {
					this.indexData.page === 0 && this.loadIndexData()
				} else if (id === 1) {
					this.sportsData.page === 0 && this.loadSportsData()
				} else {
					this.clothData.page === 0 && this.loadClothData()
				}
			},
			handleLoadMore(e) {
				if (this.loading) {
					return
				}
				const id = this.indexData.navBars[this.activeIndex].id
				if (id === 0 && this.indexData.page <= 3) {
					this.loading = true
					fetchIndexPageData(this.indexData.page++).then(responseData => {
						const { commodityList } = responseData
						this.indexData.commodityList = [...this.indexData.commodityList, ...commodityList]
						this.loading = false
					})
				}
				if (id === 1 && this.sportsData.page <= 3) {
					this.loading = true
					fetchSportsPageData(this.sportsData.page++).then(responseData => {
						const { commodityList } = responseData
						this.sportsData.commodityList = [...this.sportsData.commodityList, ...commodityList]
						this.loading = false
					})
				}
				if (id > 1 && this.clothData.page <= 3) {
					this.loading = true
					fetchClothPageData(this.clothData.page++).then(responseData => {
						const { commodityList } = responseData
						this.clothData.commodityList = [...this.clothData.commodityList, ...commodityList]
						this.loading = false
					})
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.navbar {
		display: flex;

		.navbar-item {
			width: 150rpx;
			height: 80rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 32rpx;
			color: #666666;

			&.active {
				color: #49BDFB;
				border-bottom: 6rpx solid #49BDFB;
			}
		}
	}

	.loading {
		border-top: 2rpx solid #626363;
		height: 60rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>