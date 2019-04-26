<template>
	<div>
		<router-view/>
			<FooterGuide v-show="$route.meta.isShowFooter"/>
	</div>
</template>
<script>
	import FooterGuide from './components/FooterGuide/FooterGuide.vue'
	import {reqAddress} from './api'
	export default{
		async mounted(){
			const result = await reqAddress('115.66867','23.10038')
			console.log('result',result)
		},
		components:{
			FooterGuide
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>

