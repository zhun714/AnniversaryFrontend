<template>
	<view>
	   <view class="flex-col space-y-32 page">
	     <view class="flex-col group">
	       <view class="flex-col section">
	         <view class="flex-row space-x-34 section_2">
	     
	           <text class="text">个人信息</text>
	         </view>
	         <image
	           class="image_2"
	           src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16672829678343166060.png"
	         />
	       </view>
	       <view class="flex-row justify-between section_3">
	         <view class="flex-row space-x-26">
	      
	           <view  class="image_3" style="background-color: #db9f9c;border-radius: 15%;font-size: 1.8rem;color: white;padding-top: 1rem;padding-left: 5%;">{{name.substr(-2,2)}}</view>
			    <text class="text_2" @click="changename()">{{name}}</text>
	         </view>
	   
	       </view>
	     </view>
		 
	  <!-- 表单 -->
	  	<view style="margin: 0.7rem;width: 90%;">
	  		<uni-forms ref="form" :modelValue="formData" :rules="rules" >
				<uni-forms-item label="学院" name="xueyuan" >
					<uni-easyinput type="text" v-model="formData.xueyuan" placeholder="请输入学院" />
				</uni-forms-item>
				
				<uni-forms-item label="学号" name="github" >
					<uni-easyinput type="text" v-model="formData.github" placeholder="请输入学号" />
				</uni-forms-item>
				
				<uni-forms-item label="邮箱" name="email">
					<uni-easyinput type="text" v-model="formData.email" placeholder="dcloud@email.com" />
				</uni-forms-item>
				
				<uni-forms-item label="单位名称" name="danwei" >
					<uni-easyinput type="text" v-model="formData.danwei" placeholder="请输入您的单位名称" />
				</uni-forms-item>
				
				<uni-forms-item label="职务" name="zhiwu" >
					<uni-easyinput type="text" v-model="formData.zhiwu" placeholder="请输入您的现任职务" />
				</uni-forms-item>
				
	  			<uni-forms-item label="行业" name="hanye" >
	  				<uni-easyinput type="text" v-model="formData.hanye" placeholder="请输入您所从事行业" />
	  			</uni-forms-item>
				
				<uni-forms-item label="出生日期" name="birthday" >
					<uni-easyinput type="text" v-model="formData.birthday" placeholder="请输入您的生日" />
					</uni-forms-item>
					
				<uni-forms-item label="兴趣爱好" name="aihao" >
					<uni-easyinput type="text" v-model="formData.aihao" placeholder="请输入您兴趣爱好" />
				</uni-forms-item>
			
				
	  		</uni-forms>
	  		<button @click="submit" style="background-color: red;width: 45%;border-radius: 15px;">提交</button>
	  	</view>
	  
	  
	     </view>
		 
		 <!-- 弹出层视图，注意这里的ref="popup"，这里背景特意标红了，方便看到效果 -->
		 <uni-popup ref="popupDialog" type="dialog" >
		 		   <view style="background-color:white;border-radius: 10px;width: 18rem;height: 4rem;">
		 			<text style="margin-left: 6.5rem;">请输入姓名</text>
					<input type="text" placeholder="张三" style="width: 80%;margin-left: 1.8rem;background-color:whitesmoke;" @input="oninput">
					<button style="height: 2rem;border-radius: 10px;background-color: white;" @click="tijiao()">提交</button>
		 		   </view>
		 	</uni-popup>
		 
	   </view>

	</view>
</template>

<script>
import{mapState,mapMutations}from 'vuex'

	export default {
	mounted() {
	
		this.getbyid()
		if(uni.getStorageSync('storage_key'))
		{
			console.log('缓存存在')
			this.formData = uni.getStorageSync('storage_key')
		}
		else console.log('缓存不存在显示多种输入行')
	},
		computed:
		{
			...mapState(['name','id'])
		},
		data() {
			return {
				// 表单数据 
				              //input的名字
				            inputcontent:'',
						formData: {
								xueyuan: '计算机与大数据学院',
								github: '',
								email: 'dcloud@email.com',
								danwei:'',
								zhiwu:'',
								hanye:'',
								birthday:'',
								aihao:''
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
							errorMessage: '学院长度在 {minLength} 到 {maxLength} 个字符',
						}
					]
				},
				//
				danwei: {
					rules: [{
							required: false,
							errorMessage: '错误',
						},
						{
							minLength: 1,
							maxLength: 20,
							errorMessage: '单位长度在 {minLength} 到 {maxLength} 个字符',
						}
					]
				},
				//zhiwu
				zhiwu: {
					rules: [{
							required: false,
							errorMessage: '错误',
						},
						{
							minLength: 1,
							maxLength: 10,
							errorMessage: '职务长度在 {minLength} 到 {maxLength} 个字符',
						}
					]
				},
				//hanye
				hanye: {
					rules: [{
							required: false,
							errorMessage: '错误',
						},
						{
							minLength: 3,
							maxLength: 20,
							errorMessage: '行业长度在 {minLength} 到 {maxLength} 个字符',
						}
					]
				},
				//birthday
				birthday: {
					rules: [{
							required: false,
							errorMessage: '错误',
						},
						{
							minLength: 3,
							maxLength: 20,
							errorMessage: '生日格式为2000年1月1日',
						}
					]
				},
				//兴趣爱好
				aihao: {
					rules: [{
							required: false,
							errorMessage: '错误',
						},
						{
							minLength: 3,
							maxLength: 20,
							errorMessage: '请少于{maxLength}个字',
						}
					]
				},
				//
				xueyuan: {
					rules: [{
							required: false,
							errorMessage: '错误',
						},
						{
							minLength: 3,
							maxLength: 20,
							errorMessage: '学院长度在 {minLength} 到 {maxLength} 个字符',
						}
					]
				},
				// 对name字段进行必填验证
							github: {
								rules: [{
										required: false,
										errorMessage: '请输入github账号昵称',
									},
									{
										minLength: 1,
										maxLength: 20,
										errorMessage: '请输入正确github账号昵称',
									}
								]
							},
							// 对email字段进行必填验证
							email: {
								rules: [{
									format: 'email',
									errorMessage: '请输入正确的邮箱地址',
								}]
							}
						}
					};
			
		},
		
		
		
		
		methods:
		{
			...mapMutations(['change_name']),
			updatebyid()
			{
				uni.request({
					url:'https://www.prxdong.top:8081/user/save', //仅为示例，并非真实接口地址。
					
					data:{
					        
					     "dormitory": this.formData.danwei,
					       "email": this.formData.email,
					       "graduationTime": "2018-07-01",
					       "id": this.id,
					       "name": this.name,
					       "sex": 0,
					        "sid":this.formData.github
						 
						  				
					  },
						  	
					   method: 'POST',
					   header: {
					       'content-type': 'application/json'  //自定义请求头信息
					   },
						  									
					   success: (res) => {
						   console.log(res)
						   console.log('id',this.id)
						   }
				})
			},
			getbyid()//获取id的数据
			{
		
				uni.request({
					url:'https://www.prxdong.top:8081/user/data/'+this.id,//仅为示例，并非真实接口地址。
						  	
					   method: 'GET',
					   header: {
					       'content-type': 'application/json'  //自定义请求头信息
					   },
						  									
					   success: (res) => {
						   if(res.data.errMsg=="请求成功.")
						   {
							   console.log('getbyid2',res)
							   this.change_name(res.data.data.name)
						           console.log(res.data.data.email)
							   this.formData.email=res.data.data.email	
							
				//======================================================================================================这里可以添加很多需要获取的信息			   
						   }
					
						   }
				})
			},
			   oninput(e)
			   {
				   this.inputcontent=  e.target.value
			   },
				submit() {
								console.log(this.formData),
						this.$refs.form.validate().then(res=>{
							
						
							uni.showToast({
								title: "提交成功",
								duration: 600
							})
							
						}),
						console.log('formdata',this.formData)
				
						this.updatebyid()
						  uni.setStorageSync('storage_key',this.formData)
						},
						
			
			chooseimage()
			{
			   uni.chooseImage({
			   	count:1,
				sizeType:['original', 'compressed'],
				sourceType: ['album','camera'], //从相册选择
				success: function (res) {
				
					}
			   })
			},
			changename()
			{
				this.$refs['popupDialog'].open();
			},
			tijiao()
			{     
				
                  if(this.inputcontent)
				  {
					  this.change_name(this.inputcontent)  
					  this.updatebyid()
				  }
				this.$refs['popupDialog'].close();
			}
		}
	}
</script>

<style lang="scss">
.space-y-32 {
  & > view:not(:first-child),
  & > text:not(:first-child),
  & > image:not(:first-child) {
    margin-top: 2rem;
  }
  .group {
    height: 12.63rem;
    .section {
      background-color: #d14735;
      height: 8.94rem;
      .space-x-34 {
        & > view:not(:first-child),
        & > text:not(:first-child),
        & > image:not(:first-child) {
          margin-left: 2.13rem;
        }
        .image {
          width: 0.75rem;
          height: 1.31rem;
        }
        .text {
          margin-top: 0.25rem;
          color: #ffffff;
          font-size: 1.13rem;
          font-family: SourceHanSansCN;
          line-height: 1.06rem;
        }
      }
      .section_2 {
        padding: 1rem 1.13rem 1.25rem;
        background-color: #d24735;
      }
      .image_2 {
        margin-right: 1.69rem;
        margin-top: -2.56rem;
        flex-shrink: 0;
        align-self: flex-end;
        opacity: 0.6;
        width: 9.38rem;
        height: 7.88rem;
      }
    }
    .section_3 {
      margin: -3.88rem 1.69rem 0;
      padding: 1.38rem 1.44rem 1.31rem 1.69rem;
      background-color: #f7f7f7;
      border-radius: 1.25rem;
      border: solid 0.063rem #d24735;
      position: relative;
      .space-x-26 {
        & > view:not(:first-child),
        & > text:not(:first-child),
        & > image:not(:first-child) {
          margin-left: 1.63rem;
        }
        .image_3 {
          flex-shrink: 0;
          width: 4.69rem;
          height: 4.69rem;
        }
        .text_2 {
          margin-top: 0.25rem;
          color: #000000;
          font-size: 1.06rem;
          font-family: HarmonyOSSansSC;
          line-height: 0.97rem;
        }
      }
      .image_4 {
        width: 1.81rem;
        height: 1.56rem;
      }
    }
  }
  .space-y-18 {
    & > view:not(:first-child),
    & > text:not(:first-child),
    & > image:not(:first-child) {
      margin-top: 1.13rem;
    }
    .space-y-13 {
      & > view:not(:first-child),
      & > text:not(:first-child),
      & > image:not(:first-child) {
        margin-top: 0.81rem;
      }
      .font_1 {
        font-size: 0.88rem;
        font-family: SourceHanSansCN;
        line-height: 0.81rem;
        color: #808080;
      }
      .text_3 {
        margin-left: 1.25rem;
        align-self: flex-start;
      }
      .text_4 {
        margin-left: 1.06rem;
        align-self: flex-start;
        line-height: 0.66rem;
      }
      .divider {
        background-color: #e5e5e5;
        height: 0.063rem;
      }
      .text_5 {
        margin-left: 1.25rem;
        align-self: flex-start;
      }
      .text_6 {
        margin-left: 1.06rem;
        align-self: flex-start;
      }
      .text_7 {
        margin-left: 1.25rem;
        align-self: flex-start;
      }
      .text_8 {
        margin-left: 1.06rem;
        align-self: flex-start;
      }
      .text_9 {
        margin-left: 1.13rem;
        align-self: flex-start;
      }
      .text_10 {
        margin-left: 1.13rem;
        align-self: flex-start;
      }
      .view {
        margin-right: 0.13rem;
      }
      .text_11 {
        margin-left: 1.13rem;
        align-self: flex-start;
      }
      .text_12 {
        margin-left: 1.13rem;
        align-self: flex-start;
      }
      .text_13 {
        margin-left: 1.13rem;
        align-self: flex-start;
      }
      .text_14 {
        margin-left: 1.06rem;
        align-self: flex-start;
      }
      .text_15 {
        margin-left: 1.06rem;
        align-self: flex-start;
      }
      .text_16 {
        margin-left: 1.06rem;
        align-self: flex-start;
      }
      .text_17 {
        margin-left: 1.06rem;
        align-self: flex-start;
      }
      .text_18 {
        margin-left: 1.06rem;
        align-self: flex-start;
      }
    }
    .section_4 {
      padding: 0.88rem 0.63rem 1.38rem;
      background-color: #ffffff;
      border-radius: 0.63rem;
    }
    .section_5 {
      padding: 0.75rem 0.63rem 0.88rem;
      background-color: #ffffff;
      border-radius: 0.63rem;
    }
    .section_6 {
      padding: 0.75rem 0.63rem;
      background-color: #ffffff;
      border-radius: 0.63rem 0.63rem 0 0;
    }
  }
}
.page {
  background-color: #f7f7f7;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}
</style>
