<template>
<view class="flex-col space-y-6 page" >
	<image
	  class="image"
	  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16670437971835669502.png"
	style="  align-self: center;
  width: 16.25rem;        
  height: 6.63rem;"
  v-if="!(degree_bk||degree_ss||degree_bs)||token" 
	/>
	  <text class="text" style="   color: #9d2221;
	  background-color: #ffffff;
  font-size: 1rem;
  font-family: SourceHanSansCN;
  line-height: 1.19rem;
  align-self: center;" v-if="!(degree_bk||degree_ss||degree_bs)||token" >计算机与大数据学院/软件学院</text>
	  <text class="text_2" style="  color: #9d2221;
  font-size: 0.56rem;
  font-family: YOUSHEhaoshenti;
  line-height: 0.69rem;
  word-break: break-all;
  align-self: center;" v-if="!(degree_bk||degree_ss||degree_bs)||token" >college of computer and date science/college of software</text>
  <view style="  margin-top: 1rem;
  padding: 16.25rem 0 0.063rem;
  background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16670437971919971204.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;" v-if="!(degree_bk||degree_ss||degree_bs)||token" >
    <text style=" 
	margin-left:8.5rem;
	  color: #808080;
    line-height: 1.16rem;">暂无加入班级</text>
	<text>\n</text>
    <text style="   
	margin-left:8rem;
	 color: #a6a6a6;
    font-size: 0.75rem;
    font-family: SourceHanSansCN;
    line-height: 0.69rem;s">快去加入自己的班级吧！</text>
  </view>

	
	
  <view class="flex-col space-y-13 group">
    <text class="text" v-if="(degree_bk||degree_ss||degree_bs)&&!token">我加入的</text>
	
	
	
    <view class="flex-col space-y-19" style="">                                                                             
      <view class="flex-col list-item" style="">
		  
        <view class="flex-col items-start section" v-if="degree_bk&& !token" @click="gotoclass(1)" style="  background-color: #f2f2f2;
  border-radius: 0.94rem;
  filter: drop-shadow(0px 0.13rem 0.13rem #00000040) blur(0.024rem);
  background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16678750158783354295.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 7.81rem;
  " >
          <text class="font_1 text_2">{{class_bk.grade}}级本科{{class_bk.major}}{{class_bk.classNo}}班</text>
          <image
            class="image"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16678750158823721052.png"
          />
          <view class="flex-col items-center text-wrapper" @tap.stop="outclassbk()"><text class="font_2">退出班级</text></view>
        </view>
		
<view style="background-color: white;" v-if="degree_bk"><text>\n</text></view>

	  <view class="flex-col items-start section" v-if="degree_ss&& !token" @click="gotoclass(2)"  style="  background-color: #f2f2f2;
  border-radius: 0.94rem;
  filter: drop-shadow(0px 0.13rem 0.13rem #00000040) blur(0.024rem);
  background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16678750158783354295.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 7.81rem;
">
	    <text class="font_1 text_2" >{{class_ss.grade}}级研究生{{class_ss.major}}{{class_ss.classNo}}班</text>
	    <image
	      class="image"
	      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16678750158823721052.png"
  
		/>
    <view class="flex-col items-center text-wrapper" @tap.stop="outclassss()"><text class="font_2">退出班级</text></view>
	  </view>


<view style="background-color: white;" v-if="degree_ss"><text>\n</text></view>

	  <view class="flex-col items-start section" v-if="degree_bs&& !token" @click="gotoclass(3)"  style="  background-color: #f2f2f2;
  border-radius: 0.94rem;
  filter: drop-shadow(0px 0.13rem 0.13rem #00000040) blur(0.024rem);
  background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16678750158783354295.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 7.81rem;">
	    <text class="font_1 text_2">{{class_bs.grade}}级博士生{{class_bs.major}}{{class_bs.classNo}}班</text>
	    <image
	      class="image"
	      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16678750158823721052.png"
	    @click.stop="gotoclass()"
		/>
	    <view class="flex-col items-center text-wrapper" @tap.stop="outclassbs()"><text class="font_2">退出班级</text></view>
	  </view>

      </view>
    </view>
  </view>
  

  <image

    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16678750158732364175.png"
    style="      opacity: 0.15;
      width: 24.69rem;
      height: 18rem;
	  position: absolute;
	  bottom: -90px;"
   />


   <view class="flex-col items-center text-wrapper_2" style="position: fixed;margin-top: 30rem;margin-left:6.5rem;"><button class="text_3"  style="  background-color: #d14735;width: 10.4rem;height: 100%;line-height: 2.5rem;text-align: center;margin-top: 3rem;color: aquamarine;"  @click="openbj">加入班级</button></view>


   <!-- 弹出层视图，注意这里的ref="popup"，这里背景特意标红了，方便看到效果 -->
<uni-popup ref="popupDialog" type="dialog" >
	
   <view style="background-color: white; width: 18rem; height: 30rem; border-radius: 25px;">
	   <my-degree ref="_degree"></my-degree>
   <view class="flex-row space-x-6 group_4">
     <view class="flex-col items-center text-wrapper_5" @click="goback()"><text class="font_2 text_12">取消</text></view>
     <view class="section_6"></view>
     <view class="flex-col items-center text-wrapper_4" @click="gointo()"><text class="font_2 text_13">加入</text></view>
   </view>
   </view>
		</uni-popup>


  
</view>
</template>

<script>

import{mapState,mapMutations}from 'vuex'

	export default {
		computed:
		{
			...mapState(['degree_bk','degree_ss','degree_bs','token','id'])
		},
		data() {
			return {
			  temp:'' ,
			  class_bk://本科生渲染班级数据
			  {
			
			  },
			  class_ss://硕士生渲染班级数据
			  {
			  			
			  },
			  class_bs://博士生渲染班级数据
			  {
				  
			  }
			};
		},
		onShow() {
			console.log(onload)
		console.log(this.id)
			this.getbanji()//获得加入了哪些班级
           	 
		},
		methods:
		{
			 ...mapMutations(['change_degree_bk','change_degree_ss','change_degree_bs']),
			 // 请求
			 getlist()//请求接口
			 {
			                   if(this.$refs['_degree'].value==1)this.temp="本科";
							     if(this.$refs['_degree'].value==2)this.temp="硕士";
								   if(this.$refs['_degree'].value==3)this.temp="博士";
				 uni.request({
					 
				 			    url: 'https://www.prxdong.top:8081/UserClass/add', //仅为示例，并非真实接口地址。
				 			 data:{
								    "academy": "计算机与大数据学院",
								
								     "classNo":  this.$refs['_degree'].valuebj,
								     "grade":  this.$refs['_degree'].valuenj,
								     "major": this.$refs['_degree'].valuezy,
								     "sid":   this.$refs['_degree'].formData.xuehao,
								     "stage": this.temp,
								     "uid": this.id//用户id，后期要更改
							   },
				 				method: 'POST',
				 			    header: {
				 			        'content-type': 'application/json'  //自定义请求头信息
				 			    },
									
				 			    success: (res) => {
				
									console.log(res)
									console.log(this.$refs['_degree'].value)
				 			    if(this.$refs['_degree'].value==1&&res.data.errMsg=="请求成功.")
				 			    {
									console.log(res)
				 			    	this.change_degree_bk(true);//改全局变量
								uni.setStorageSync('bjxx_bk',res.data.data),
								this.getstorage()
				 		
				 			    }
					
				 			        if(this.$refs['_degree'].value==2&&res.data.errMsg=="请求成功.")
				 			        {
											console.log(res)
				 			        	this.change_degree_ss(true);
				 			        	uni.setStorageSync('bjxx_ss',res.data.data),
										this.getstorage()
				 			        }
					
				 			        if(this.$refs['_degree'].value==3&&res.data.errMsg=="请求成功.")
				 			        {
										console.log(res)
				 			        	this.change_degree_bs(true);
										
				 			        uni.setStorageSync('bjxx_bs',res.data.data)	
										this.getstorage()
				 			        }
									
									//未加入	
										if(res.data.errMsg!="请求成功.")
										{
											uni.showModal({
												title:"提示",
												content:"加入失败，请重新填写信息！",
												showCancel:false
											})
										}
			
				 			    }
				 			});

			 },
	 		getbanji()//获得这个账号加入的班级
			{
				uni.request({
									 
							    url: 'https://www.prxdong.top:8081/UserClass/getClassById/' +this.id, //仅为示例，并非真实接口地址。
								method: 'POST',
							    header: {
							        'content-type': 'application/json'  //自定义请求头信息
							    },
													
							    success: (res) => {
		
									res.data.dataList.forEach((item) =>{
										console.log("正在遍历数组")
									  console.log(item.stage)
									  if(item.stage=="本科")
									  {
									  	console.log('neibu')
									  	this.change_degree_bk(true)
									  	this.class_bk =item
									  }
									  else if(item.stage=="硕士")
									  {
										  console.log('我是硕士')
									  	this.change_degree_ss(true)
									  	this.class_ss = item
									  }
									  else  if(item.stage=="博士")
									  {
									  	this.change_degree_bs(true)
									  	this.class_bs = item
									  }
									})
			
								},
								})
			},
			 getstorage()//获取本地缓存
			 {
				 this.class_bk=uni.getStorageSync('bjxx_bk'),
				 console.log(this.class_bk.grade),
				 this.class_ss=uni.getStorageSync('bjxx_ss'),
				 console.log(this.class_ss.grade)
				 this.class_bs=uni.getStorageSync('bjxx_bs'),
				 console.log(this.class_ss.grade)
				 
			 },
			 
			 outclassbk()//退出班鸡的三个学历
			 {
				 uni.showModal({
				 	title: '提示',
				 	content: '确认退出本科班级吗？',
				 	success:(res)  =>{
				 	             
		 if (res.confirm)
		              {
						  console.log('班级情况',this.class_bk)
								   uni.request({
								   		
								   			    url: 'https://www.prxdong.top:8081/UserClass/delete', //仅为示例，并非真实接口地址。
								   			 data:{
								   								    "academy": "计算机与大数据学院",
								   								     "cid": this.class_bk.cid,
								   								     "classNo":  this.class_bk.classNo,
								   								     "grade": this.class_bk.grade ,
								   								     "major": this.class_bk.major,
								   								     "sid":   this.class_bk.sid,
								   								     "stage": "本科",
								   								     "uid": this.id//用户id，后期要更改
								   					 },
								   				method: 'DELETE',
								   			    header: {
								   			        'content-type': 'application/json'  //自定义请求头信息
								   			           },
								   									
								   			    success: (res) => {
								   									  console.log(res)
																	  if(res.data.errMsg=="删除成功")
																	  {
																		  	this.change_degree_bk(false),
																			uni.removeStorageSync('bjxx_bk'),//移除本科信息
																			 uni.$showMsg('退出成功!')
																	  }
																	  else
																	  {
																		  uni.$showMsg('退出失败!')
																	  }
								   								}
								   			});	
		
						
						}
				 		
				 	}
				 });
			 },

		
	
			 outclassss()
			 {
				 uni.showModal({
				 	title: '提示',
				 	content: '确认退出硕士班级吗？',
				 	success:(res)  =>{
	                            
		 	             
		 if (res.confirm)
		              {
								   uni.request({
								   			
								   			    url: 'https://www.prxdong.top:8081/UserClass/delete', //仅为示例，并非真实接口地址。
								   			 data:{
								   								    "academy": "计算机与大数据学院",
								   								 "cid": this.class_ss.cid,
								   								     "classNo":  this.class_ss.classNo,
								   								     "grade": this.class_ss.grade ,
								   								     "major": this.class_ss.major,
								   								     "sid":   this.class_ss.sid,
								   								     "stage": "硕士",
								   								     "uid": this.id//用户id，后期要更改
								   					 },
								   				method: 'DELETE',
								   			    header: {
								   			        'content-type': 'application/json'  //自定义请求头信息
								   			           },
								   									
								   			    success: (res) => {
								   									  console.log(res)
																	  if(res.data.errMsg=="删除成功")
																	  {
																		  	this.change_degree_ss(false),
																			uni.removeStorageSync('bjxx_ss'),//移除硕士信息
																			 uni.$showMsg('退出成功!')
																	  }
																	  else
																	  {
															              uni.$showMsg('退出失败!')
																	  }
								   								}
								   			});	
		
						
						}								
				 		} 
				 	
				 });
			 			
			 },
			 outclassbs()
			 {
				 uni.showModal({
				 	title: '提示',
				 	content: '确认退出博士班级吗？',
				 	success:(res)  =>{
		
		 	             
		 if (res.confirm)
		              {
								   uni.request({
								   			
								   			    url: 'https://www.prxdong.top:8081/UserClass/delete', //仅为示例，并非真实接口地址。
								   			 data:{
								   								    "academy": "计算机与大数据学院",
								   								   "cid": this.class_bs.cid,
								   								     "classNo":  this.class_bs.classNo,
								   								     "grade": this.class_bs.grade ,
								   								     "major": this.class_bs.major,
								   								     "sid":   this.class_bs.sid,
								   								     "stage": "本科",
								   								     "uid": this.id//用户id，后期要更改
								   					 },
								   				method: 'DELETE',
								   			    header: {
								   			        'content-type': 'application/json'  //自定义请求头信息
								   			           },
								   									
								   			    success: (res) => {
								   									  console.log(res)
																	  if(res.data.errMsg=="删除成功")
																	  {
																		  	this.change_degree_bs(false),
																			uni.removeStorageSync('bjxx_bs'),//移除本科信息
																			  uni.$showMsg('退出成功!')
																	  }
																	  else
																	  {
																	  	      uni.$showMsg('退出失败!')
																	  }
								   								}
								   			});	
		
						
						}
		
				 	}
				 });
			 		
			 },
			gotoclass(tmd)//去班级页面，需要传参数
			{
				//根据tmd
				console.log('tmd',tmd)
			   if(tmd==1) 	uni.navigateTo({
					url:'/package-banji/in_class/in_class?id=1&class_bk=' + encodeURIComponent(JSON.stringify(this.class_bk))
				})
				
				if(tmd==2) 		uni.navigateTo({
					url:'/package-banji/in_class/in_class?id=2&class_ss=' + encodeURIComponent(JSON.stringify(this.class_ss))//少=号，id能传但是class_ss没有传
				})
				
				if(tmd==3) 		uni.navigateTo({
					url:'/package-banji/in_class/in_class?id=3&class_bs=' + encodeURIComponent(JSON.stringify(this.class_bs))
				})
			},
			
			openbj()//加入班级按钮
			{
				if(!this.token)
				{
					this.$refs['popupDialog'].open();
				}
				if(this.token)
				{
					uni.switchTab({
						url:'/pages/my/my'
					})
				}

				
			},
			goback()//取消
			{

				this.$refs['popupDialog'].close();
			
			},
			gointo()//加入
	        {
					    this.getlist()//和后端申请数据
			   this.$refs['popupDialog'].close();
			}
		
		}

	}
</script>



<style lang="scss">
	
	
	
	.space-x-6 {
	  & > view:not(:first-child),
	  & > text:not(:first-child),
	  & > image:not(:first-child) {
	    margin-left: 0.38rem;
	  }
	  .text-wrapper_5 {
	    padding: 0.63rem 0 1.13rem;
	    align-self: center;
	    background-color: #cccccc00;
	    width: 8rem;
	    height: 2.56rem;
	    .text_12 {
	      color: #383838;
	    }
	  }
	  .section_6 {
	    background-color: #e5e5e5;
	    width: 0.094rem;
	    height: 3rem;
	  }
	  .text-wrapper_4 {
	    padding: 0.75rem 0 1.13rem;
	    align-self: center;
	    background-color: #cccccc00;
	    width: 7.19rem;
	    height: 2.69rem;
	    .text_13 {
	      color: #d24735;
	      line-height: 0.78rem;
	    }
	  }
	  .font_2 {
	    font-size: 0.88rem;
	    font-family: SourceHanSansCN;
	    line-height: 0.81rem;
	    color: #808080;
	  }
	}
	.group_4 {
	  padding: 0 0.5rem;
	  position: absolute;
	  left: 0;
	  right: 0;
	  top: 26.88rem;
	}
	
	
.space-y-6 {
  & > view:not(:first-child),
  & > text:not(:first-child),
  & > image:not(:first-child) {
    margin-top: 0.38rem;
  }
  .space-y-13 {
    & > view:not(:first-child),
    & > text:not(:first-child),
    & > image:not(:first-child) {
      margin-top: 0.81rem;
    }
    .text {
      margin-left: 0.25rem;
      align-self: flex-start;
      color: #383838;
      font-size: 1rem;
      font-family: SourceHanSansCN;
      font-weight: 700;
      line-height: 0.94rem;
    }
    .space-y-19 {
      & > view:not(:first-child),
      & > text:not(:first-child),
      & > image:not(:first-child) {
        margin-top: 1.19rem;
		background-color: #ffffff;
      }
      .list-item {
        .section {
          padding: 1.5rem 1.44rem 1.06rem;
          background-color: #d1463499;
          border-radius: 0.94rem;
          position: relative;
          .font_1 {
            font-size: 1.13rem;
            font-family: SourceHanSansCN;
            line-height: 1.06rem;
            font-weight: 700;
            color: #ffffff;
          }
          .text_2 {
            margin-left: 0.13rem;
          }
          .image {
            border-radius: 0.94rem;
            width: 2.81rem;
            height: 2.94rem;
            position: absolute;
            right: 0.59rem;
            top: 0.53rem;
          }
          .text-wrapper {
            margin-top: 2.5rem;
            padding: 0.5rem 0 0.38rem;
            background-color: #f2efef;
            border-radius: 0.38rem;
            box-shadow: 0px 0.13rem 0.25rem #00000040;
            width: 4.69rem;
            position: relative;
            .font_2 {
              font-size: 0.88rem;
              font-family: SourceHanSansCN;
              line-height: 0.84rem;
              font-weight: 700;
              color: #ad0f1f;
            }
          }
        }
      }
    }
  }
  .group {
    padding-left: 0.94rem;
    padding-right: 0.88rem;
  }
  .group_2 {
    position: fixed;
	bottom: -160px;

    .image_2 {
      opacity: 0.15;
      width: 24.69rem;
      height: 25.5rem;
    }
    .text-wrapper_2 {
      padding: 0.88rem 0 0.56rem;
      background-color: #ffffff;
      border-radius: 0.31rem;
      width: 10.44rem;
      position: absolute;
      top: 10.19rem;
      left: 50%;
      transform: translateX(-50%);
      .text_3 {
        color: #ffffff;
        font-size: 1.25rem;
        font-family: SourceHanSansCN;
        line-height: 1.16rem;
      }
    }
  }
}
.page {
  padding: 1.38rem 0 4.06rem;
  background-color: #ffffff;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 760px;
}
</style>
