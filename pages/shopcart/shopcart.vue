<template>
	<view class="shopcart">
		<view v-if="list.length === 0">
			<uni-nav-bar :fixed="true" title="购物车" :statusBar="true" :border="false">
			</uni-nav-bar>
			<view class="empty-text">
				囧 购物车还是空的
			</view>
		</view>
		<view v-else>
			<uni-nav-bar :fixed="true" :statusBar="true" title="购物车" leftIcon="left" @clickLeft="() => handleClickLeft()"
				@clickRight="() => handleClickRight()" :border="false">
				<view slot="right">
					<text style="font-size: rpx;">{{isEdit ? '完成' : '编辑'}}</text>
				</view>
			</uni-nav-bar>
			<view class="shop-list">
				<view class="shop-item" v-for="(shopItem, index)  of list" :key="shopItem.id">
					<label @tap="() => handleCheckItem(shopItem)">
						<radio :checked="isChecked(shopItem.id)" color="#FF3333" /><text></text>
					</label>
					<image class="shop-image" :src="shopItem.imgUrl" mode=""></image>
					<view class="shop-info">
						<view class="shop-name">
							{{shopItem.name}}
						</view>
						<view class="f-color">
							{{shopItem.specification}}
						</view>
						<view class="shop-price">
							<view>￥{{shopItem.price}}</view>
							<template>
								<view v-if="isEdit">
									<uni-number-box :value="shopItem.count" :min="1"
										@change="(value) => handleChangeCartCount(value, shopItem)"></uni-number-box>
								</view>
								<view v-else>×{{shopItem.count}}</view>
							</template>
						</view>
					</view>
				</view>
				<!-- 因为固定底部的高度是100rpx，这里给固定底部留个空白 -->
				<view style="height: 100rpx"></view>
			</view>
			<!-- 购物车底部 -->
			<view class="shopcart-foot">
				<label @tap="() => handleCheckAll()">
					<radio color="#FF3333" :checked="isAllChecked" /><text>全选</text>
				</label>
				<view class="foot-total">
					<template v-if="isEdit">
						<view class="moveToFav">移入收藏夹</view>
						<view class="count bg-color" @tap="() => handleRemoveCart()">
							<text>删除</text>
						</view>
					</template>
					<template v-else>
						<view class="total-price">
							合计：￥<text class="f-active-color">{{totalCost}}</text>
						</view>
						<view class="count bg-color" @tap="() => handleToConfirm()">
							<text>结算({{selectedIds.length}})</text>
						</view>
					</template>
				</view>
			</view>
		</view>
		<!-- 		<view style="height: 120rpx" ></view>
		<Tabbar currentPage="shopcart" ></Tabbar> -->
	</view>
</template>

<script>
	import { mapState, mapActions } from 'vuex'
	export default {
		data() {
			return {
				isEdit: false,
			}
		},
		onShow() {
			if (!this.$store.state.user.loginStatus) {
				uni.navigateTo({
					url: '../login/login'
				})
			}
		},
		methods: {
			...mapActions(['checkAllFn']),
			handleClickRight() {
				this.isEdit = !this.isEdit
			},
			isChecked(id) {
				return this.selectedIds.includes(id)
			},
			handleCheckItem(item) {
				this.$store.commit('handleCheckItem', item.id)
			},
			handleCheckAll() {
				this.$store.commit('handleCheckAll')
			},
			handleChangeCartCount(countValue, shopItem) {
				shopItem.count = countValue
				this.$store.commit('handleChangeItemCount', shopItem)
			},
			handleRemoveCart() {
				this.$store.commit('handleRemoveCart')
			},
			handleClickLeft() {
				uni.navigateBack()
			},
			handleToConfirm() {
				if (this.selectedIds.length === 0) {
					uni.showToast({
						title: '请选择一件商品',
						icon: "none"
					})
				} else {
					uni.navigateTo({
						url: '../confirm-order/confirm-order'
					})
				}

			}
		},
		computed: {
			list() {
				return this.$store.state.cart.list
			},
			selectedIds() {
				return this.$store.state.cart.selectedIds
			},
			isAllChecked() {
				return this.$store.getters.isAllChecked
			},
			totalCost() {
				let result = 0
				this.selectedIds.forEach(selectedId => {
					const selectedItem = this.list.find(item => item.id === selectedId)
					result += selectedItem.price * selectedItem.count
				})
				return result
			}
		}
	}
</script>

<style scoped lang="scss">
	.shop-item {
		display: flex;
		padding: 20rpx;
		align-items: center;
		background-color: #F7F7F7;
		margin-bottom: 10rpx;

		.shop-image {
			width: 280rpx;
			height: 280rpx;
		}



		.shop-info {
			flex: 1;
			padding-left: 20rpx;

			.shop-price {
				display: flex;
				justify-content: space-between
			}
		}
	}

	.shopcart-foot {
		width: 100%;
		height: 100rpx;
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: space-between;
		background-color: #fff;
		padding: 0 10rpx;
		border-top: 2rpx solid #fff;
		box-sizing: border-box;
		align-items: center;

		.foot-total {
			display: flex;
			align-items: center;
			font-size: 32rpx;


			.moveToFav {
				background-color: #2B2B2B;
				color: #fff;
				line-height: 100rpx;
				width: 180rpx;
				text-align: center;
			}

			.total-price {
				line-height: 100rpx;
				text-align: center;
				width: 180rpx;
			}

			.count {
				color: #fff;
				line-height: 100rpx;
				text-align: center;
				width: 180rpx;
			}
		}
	}

	.empty-text {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: #F7F7F7;
	}
</style>