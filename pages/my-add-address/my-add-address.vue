<template>
	<view class="my-add-address">
		<view class="path-item">
			<view>收件人</view>
			<input type="text" v-model="addressObj.name" placeholder="收件人姓名" />
		</view>
		<view class="path-item">
			<view>手机号</view>
			<input type="text" v-model="addressObj.mobilePhone" placeholder="11位手机号" />
		</view>
		<view class="path-item">
			<view>所在地址</view>
			<view @click="() => showCityPicker()">
				{{addressObj.cityName}} >
			</view>
		</view>
		<view class="path-item">
			<view>详细地址</view>
			<input type="text" v-model="addressObj.detailAddress" placeholder="5到60个字符" />
		</view>
		<view class="path-item">
			<view>设为默认地址</view>
			<label class="radio" @tap="() => addressObj.isDefault = !addressObj.isDefault">
				<radio :checked="addressObj.isDefault" color="#FF3333" /><text></text>
			</label>
		</view>
		<mpvue-city-picker ref="mpvueCityPicker" :pickerValueDefault="pickerValueDefault" @onConfirm="onConfirm">
		</mpvue-city-picker>
	</view>
</template>

<script>
	import mpvueCityPicker from '@/components/mpvue-citypicker/mpvueCityPicker.vue';
	export default {
		components: {
			mpvueCityPicker
		},
		data() {
			return {
				pickerValueDefault: [0, 0, 1],
				editIndex: undefined,
				addressObj: {
					name: '',
					mobilePhone: '',
					cityName: '请选择',
					detailAddress: '',
					isDefault: false
				}
			};
		},
		onNavigationBarButtonTap(e) {
			if (!this.editIndex) {
				this.$store.commit('handleAddAddress', this.addressObj)
			} else {
				this.$store.commit('handleEditAddress', { index: this.editIndex, address: this.addressObj })
			}
			uni.navigateBack()
		},
		onLoad(e) {
			this.editIndex = e.index
			if (this.editIndex) {
				this.addressObj = this.list[this.editIndex]
				uni.setNavigationBarTitle({
					title: '修改地址'
				})
			}
		},
		methods: {
			showCityPicker() {
				this.$refs.mpvueCityPicker.show();
			},
			onConfirm(e) {
				this.addressObj.cityName = e.label
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
	.my-add-address {
		padding-left: 20rpx;
		padding-right: 32rpx;

		.path-item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 16rpx;
			width: 100%;
			border-bottom: 2rpx solid #ccc;

			input {
				flex: 1;
				text-align: left;
				padding-left: 10rpx;
			}
		}
	}
</style>