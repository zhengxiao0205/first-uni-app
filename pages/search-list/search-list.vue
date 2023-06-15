<template>
	<ShopList :searchText="searchText"></ShopList>
</template>

<script>
	export default {
		data() {
			return {
				searchText: '' 
			};
		},
		onLoad(e) {
			this.searchText = e.searchText

			// #ifdef APP-PLUS  
			const webView = this.$mp.page.$getAppWebview();

			// 设置 searchInput的 text  
			webView.setTitleNViewSearchInputText(this.searchText)

			// #endif
		}
	}
</script>

<style scoped lang="scss">

</style>