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
				<view>
				<uni-data-select v-model="valuezy"
				:localdata="rangezy"
				@change="changezy" >
				</uni-data-select>
				</view>
			</uni-forms-item>
			
			
			<uni-forms-item label="年级" name="xueyuan" >
				
		
				<picker mode="date" fields="year" value="valuenj" @change="changenj" >
					<view style="background-color: white-space: inherit;;margin-top: 5%; font-size: smaller;margin-left: 3%;">
						请选择年份：{{valuenj}}         
					</view>
				</picker>
	
				
			</uni-forms-item>
				
				
				<uni-forms-item label="班级	" name="xueyuan" >
					
				<view>
				<uni-data-select v-model="valuebj"
				:localdata="rangebj"
				@change="changebj" >
				</uni-data-select>
				</view>
					
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
			
					//下拉框内容
	      value: 0,
	      range: [
	        { value: 1, text: "本科" },
	        { value: 2, text: "研究生" },
	        { value: 3, text: "博士" },
	      ],//学历
		  
		  valuezy: "",
		  rangezy: [
		    { value: "计算机类", text: "计算机类" },
		    { value: "数据科学与大数据技术", text: "数据科学与大数据技术" },
		    { value: 3, text: "" },
		  ],//专业
	
		   valuebj:0,
		   rangebj: [
		     { value: 1, text: "1班" },
		     { value: 2, text: "2班" },
		     { value: 3, text: "3班" },
			 { value: 4, text: "4班" },
			 { value: 5, text: "5班" },
			 { value: 6, text: "6班" },
			 { value: 7, text: "7班" },
			 { value: 8, text: "8班" },
			 { value: 9, text: "9班" }
		   ],//班级
		  valuenj: 2022,
		  //年级
		  
		  flag: 1
			};
		},
		methods:
		{
			change: function(e)
			{
				this.value=e.detail.value
			},
			changenj: function(e)
			{
			
				this.valuenj=e.detail.value
			},
			changezy: function(e)
			{
				this.valuezy=e.detail.value
			},
			changebj: function(e)
			{
				this.valuebj=e.detail.value
			}
	
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