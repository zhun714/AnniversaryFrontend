<template>


<view class=" flex-col"  style="background-color: whitesmoke; width: 18rem; height: 30rem; border-radius: 25px;">

 <view style=" margin-left: 6rem;margin-top: 1rem;margin-bottom: 1rem;"><text class="font_1 text1">加入班级</text></view>
 
 <view>
	 
 	<view> <text class="font_2" style="font-size: 1rem; margin-left:1rem;">学号</text></view>
 	 <view class="flex-col"><input type="text" placeholder="请输入学号" style="margin-left:1rem;margin: 1rem;"></view>
	 
 	 <text style="font-size: 1rem; margin-left:1rem;">学历</text>
 	 <view  style="margin:0.5rem;">
	      <uni-data-select  v-model="value"
      :localdata="range"
      @change="change" ></uni-data-select>
 	 </view>
 <view> <text style="font-size: 1rem; margin-left:1rem;">专业</text></view>
  <view><input type="text" placeholder="请输入专业" style="margin-left:1rem;margin: 1rem;"></view>
 	<view> <text style="font-size: 1rem; margin-left:1rem;">年级</text></view>
 	 <view><input type="text" placeholder="请输入年级" style="margin-left:1rem;margin: 1rem;"></view>
 	<view> <text style="font-size: 1rem; margin-left:1rem;">班级</text></view>
 	 <view><input type="text" placeholder="请输入班级" style="margin-left:1rem;margin: 1rem;"></view>
 </view>
 


</view>


</template>

<script>
	
	
    	export default {
		name:"my-degree",
		data() {
			return {
	      value: 0,
	      range: [
	        { value: 1, text: "本科" },
	        { value: 2, text: "研究生" },
	        { value: 3, text: "博士" },
	      ],
		  flag: 1
			};
		},
		methods:
		{
			change()
			{
				
			},
	
		}
	}
</script>

<style lang="scss">

	
.text1
{
  align-self: center;
  color: #000000;
  font-size: 1.6rem;
  font-family: SourceHanSansCN;
 font-weight: 900;
  line-height: 1.06rem;
}
.contents
{
	.text
	{
		align-self: center;
		 color: #000000;
		 font-size: 1.6rem;
		 font-family: SourceHanSansCN;
		font-weight: 900;
		 line-height: 1.06rem;
	}
}
</style>