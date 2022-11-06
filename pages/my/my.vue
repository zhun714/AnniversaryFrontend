<template>

  <view v-if="token">
  <my-denru></my-denru>
  
</view>
<view v-else>
	<mine></mine>>
</view>
</template>

<script>
	import{mapState}from 'vuex'
	export default
	{
         
		computed:
		{
			...mapState(['token'])
		},
		data()
		{
		return{
			
		}
		},
		
		
		methods:
		{
         ...mapState(['login'])
		},
	}

</script>

<style lang="scss">

</style>

