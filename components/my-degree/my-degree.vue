<template>


<view class=" flex-col"  style="background-color: whitesmoke; width: 18rem; height: 30rem; border-radius: 25px;">

 <view style=" margin-left: 6rem;margin-top: 1rem;margin-bottom: 1rem;"><text class="font_1 text1">加入班级</text></view>
 
 <!-- 表单 -->
	  	<view style="margin: 1rem;width: 90%;">
			
	  		<uni-forms ref="form" :modelValue="formData" :rules="rules" >
				<uni-forms-item label="学号" name="xueyuan" >
					<uni-easyinput type="text" v-model="formData.xuehao" placeholder="请输入学号" />
				</uni-forms-item>
				
			<uni-forms-item label="学历" name="xueyuan" >
				<view>
				<uni-data-select v-model="value"
				:localdata="range"
				@change="change" >
				</uni-data-select>
				</view>
				</uni-forms-item>
			
			<uni-forms-item label="专业" name="xueyuan" >
				<uni-easyinput type="text" v-model="formData.zhuanye" placeholder="请输入专业" />
			</uni-forms-item>
			
			<uni-forms-item label="年级" name="xueyuan" >
				<uni-easyinput type="text" v-model="formData.nianji" placeholder="请输入年级" />
			</uni-forms-item>
				
				<uni-forms-item label="班级	" name="xueyuan" >
					<uni-easyinput type="text" v-model="formData.banji" placeholder="请输入班级" />
				</uni-forms-item>
				
	  		</uni-forms>
	
		 </view>
      


</view>


</template>

<script>
	
	
    	export default {
		name:"my-degree",
		data() {
			return {
				formData:
				{
					xuehao:'',
					xueli:'',
					zhuanye:'',
					nianji:'',
					banji:''
				},
				rules: {
					//xueyuan
					
					xueyuan: {
						rules: [{
								required: false,
								errorMessage: '错误',
							},
							{
								minLength: 3,
								maxLength: 20,
								errorMessage: '长度在 {minLength} 到 {maxLength} 个字符',
							}
						]
					},
					
					},
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