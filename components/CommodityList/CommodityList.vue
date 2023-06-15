<template>
	<view class="commodity-list">
		<Commodity :commodityList="commodityList"></Commodity>
	</view>
</template>

<script>
	export default {
		props: ['commodityList'],
		data() {
			return {

			};
		}

	}
</script>

<style lang="scss" scoped>

</style>