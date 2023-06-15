<template>
	<view class="hot">
		<Commodity :commodityList="hot" :itemWidth="250" :imageHeight="220"></Commodity>
	</view>
</template>

<script>
	export default {
		props: ['hot'],
		data() {
			return {

			};
		}
	}
</script>

<style scoped lang="scss">

</style>