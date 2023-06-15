<template>
	<view class="login-tel">
		<Lines></Lines>
		<view class="tel-input">
			<text class="label">验证码</text>
			<input v-model="inputCode" :focus="true" type="number" placeholder="请输入验证码">
			<button @tap="() => sendCode()" plain="true" :disabled="disabled" size="mini">{{codeMsg}}</button>
		</view>
		<view class="next-button" @tap="() => handleNext()">
			下一步
		</view>
	</view>
</template>

<script>
	import { sendCodeRequest, login } from '@/api/request.js'
	export default {
		data() {
			return {
				codeNum: 10,
				codeMsg: '',
				disabled: false,
				userTel: '',
				serverCode: '',
				inputCode: ''
			};
		},
		onLoad(e) {
			this.userTel = e.userTel
			this.sendCode()
		},
		methods: {
			sendCode() {
				this.codeNum = 10
				this.disabled = true
				this.codeMsg = `重新发送(${this.codeNum})`
				sendCodeRequest().then(res => {
					this.serverCode = res
				})
				const interval = setInterval(() => {
					this.codeNum--;
					this.codeMsg = `重新发送(${this.codeNum})`
					if (this.codeNum === 0) {
						this.disabled = false
						this.codeMsg = '重新发送'
						clearInterval(interval)
					}
				}, 1000)
			},
			handleNext() {
				if (+this.serverCode === +this.inputCode) {
					console.log('correct');
					login('璃音', '520').then(res => {
						this.$store.commit('saveUserInfo', res.data)
					})
					uni.switchTab({
						url: '../index/index'
					})
				}
			}
		} 
	}
</script>

<style scoped lang="scss">
	.login-tel {
		padding: 0 40rpx;

		.tel-input {
			display: flex;
			align-items: center;
			border-bottom: 2rpx solid #aaa;
			padding: 30rpx 0;

			.label {
				margin-right: 10rpx;
			}
		}

		.next-button {
			margin-top: 20rpx;
			height: 80rpx;
			line-height: 80rpx;
			background-color: #49BDFB;
			color: #fff;
			text-align: center;
			border-radius: 80rpx;
		}
	}
</style>