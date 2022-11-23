<template>
  <view class="flex-col page">
	

	
    <view class="section"><text style="align-items: center;float:right;margin-top: 30rpx;" @click="canimg()">一键提交合成照片</text></view>
	

		<view class="" style="position: fixed;top: 9999999px;">
			<canvas style=" background-color: blue;width: 26rem;height: 20rem;" canvas-id="firstCanvas"></canvas>
		</view>
			

  	  
			<movable-area style="width: 100%;height: 100%;"> 
			<swiper class="bigImg" :current="current" style="position: relative;">
		<swiper-item v-for="(big,index) in itemList" :key="index">
			

		<image
		  class="image"
		  :src="big.photo"
		  mode="scaleToFill"
		/>
		<movable-view :x="x" :y="y" direction="all" @change="onChange" >
			<image :src="base" alt="" style="height: 100rpx;width:100rpx;position: absolute;z-index: 10;">
		</movable-view>


	    </swiper-item>
	  </swiper>
			 </movable-area>
			
			
    <view class="flex-col items-center section_2">
      <view class="flex-col items-center text-wrapper">
        <text class="text">建议使用半身或全身正面照，照片不超过2M</text>
      </view>
    </view>
    <view class="grid">
      <view class="flex-col items-start space-y-14 grid-item" :key="index" v-for="(small, index) in itemList" @click='changeBigPic(index)' >
   
		<image
          class="image_2"
          :src="small.photo"
		  :class="[index == current ? 'active' : '']"
		
        />

        <text class="font_1">{{small.name}}</text>
      </view>
    </view>
    <view class="flex-col section_3">
      <view class="flex-col items-center button" @click="actionSheetTap"><text class="text_2">上传人像</text></view>
    </view>

  </view>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
		  temp:100,
		  x: 0,
		  y: 0,
		  old: {
		      x: 0,
		      y: 0
		  },
		  buttonRect: {},
		  current: 0,//轮播图索引
		  itemList: [],
		  base:'',
		  pageNo:1,
		  pageSize:20,
		  lists: [
		  		// 	{
						// sp:1,
		  		// 		picture_name:'东门',
		  		// 		picture_url:"https://tse1-mm.cn.bing.net/th/id/OIP-C.QPH1IBosDYBqaU3O6wV3YAHaEo?w=283&h=180&c=7&r=0&o=5&pid=1.7"
		  		// 	},
		  		// 	{
						// sp:2,
		  		// 		picture_name:'北门',
		  		// 		picture_url:"https://ts1.cn.mm.bing.net/th/id/R-C.8e283246276fad2c01e8d0e300bb4540?rik=umflFIIvM%2f%2b%2b6Q&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f50118%2f7084.jpg_wh1200.jpg&ehk=1HQoa7wYy9xnf0HqsFbQQJAv79HJnBest1U0atuLHSQ%3d&risl=&pid=ImgRaw&r=0"
		  		// 	},
		  		// 	{
						// sp:3,
		  		// 		picture_name:'西门',
		  		// 		picture_url:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/636e0914f9b4a40011def608/16681556784426983374.png"
		  		// 	},
		  		// 	{
						// sp:4,
		  		// 		picture_name:'南门',
		  		// 		picture_url:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/636e0914f9b4a40011def608/16681556784433466945.png"
		  		// 	},
		  		// 	{
						// sp:5,
		  		// 		picture_name:'福友阁',
		  		// 		picture_url:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/636e0914f9b4a40011def608/16681556784456651986.png"
		  		// 	},
		  		// 	{
						// sp:6,
		  		// 		picture_name:'图书馆',
		  		// 		picture_url:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/636e0914f9b4a40011def608/16681556784456815493.png"
		  		// 	}		
		  		],
		
	  };
    },
	onLoad() {
	            /* 列表 */
	           this.getList();
				console.log(1234567)
		
				uni.getSetting({
					success(res) {
						console.log('成功',res.authSetting)
					}
				})
	},
	onShow() {
	
	},
	onPullDownRefresh() {
	            /* 下拉的时候更新 */
	            this.getList();
	},
    methods: {
		img() {
			let that = this
			console.log("this.big.picture_url",that.itemList[that.current])
			console.log("ba	se",that.base)
			uni.getImageInfo({
				
				src:that.itemList[that.current].photo,//背景图路径,我用的网络图片,本地的没试过
			
				success(res) {
					console.log('图片路径',res.path)
					var ctx = uni.createCanvasContext("firstCanvas") // 使用画布创建上下文 图片
					ctx.drawImage(res.path, 0, 0, 375,224) // 设置图片坐标及大小，括号里面的分别是（图片路径，x坐标，y坐标，width，height）
			
		            console.log(that.old.x,"这里是x")
				
			
            ctx.drawImage(that.base,that.old.x,that.old.y, 50,50)
					ctx.save(); //保存
					ctx.draw() //绘制
				}
			})
		
		},
		// canvas生成图片
		canimg() {

			this.img()
			let that = this
			uni.canvasToTempFilePath({
		
				destWidth: 400,
				destHeight: 400,
				canvasId: 'firstCanvas',
				success: function(res) {
					// 在H5平台下，tempFilePath 为 base64
					console.log(res.tempFilePath, "//")
		
		
		
					// 保存本地
					uni.saveImageToPhotosAlbum({
						filePath: res.tempFilePath,
						success: function() {
							console.log("成功")
							uni.showToast({
								icon: 'none',
								position: 'bottom',
								title: "图片已下载至【图库】，请打开【图库】查看", // res.tempFilePath
							});
						},
						fail: function(err) {
							console.log("失败", err)
						}
					})
		
				}
			})
		},
	
		
		tap: function(e) {
		    this.x = this.old.x
		    this.y = this.old.y
		    this.$nextTick(function() {
		        this.x = 30
		        this.y = 30
		    })
		},
		onChange: function(e) {
		    this.old.x = e.detail.x
		    this.old.y = e.detail.y
		},
		getList(){
			uni.request({
				url:'https://www.prxdong.top:8081/background/page',
				method:'POST',
				header:{
					'content-type':'application/json',
				},
				data:{
					  pageNo: this.pageNo,
					  pageSize: this.pageSize
					},
				success:(res)=>{
					console.log(res.data);
					this.itemList =res.data.dataList;
					console.log(this.itemList);
				}
			})
			
		},
		actionSheetTap() {
							const that = this;
							uni.showActionSheet({
								title: '选择上传方式',
								itemList: ['拍摄', '从相册选择'],
								popover: {
									top: that.buttonRect.top * 2 + that.buttonRect.height,
									left: that.buttonRect.left + that.buttonRect.width / 2
								},
								success(res) {
									console.log('ft',that.base)
								  console.log('21231',res)
								  let sourceType = 'camera'
								  if (res.tapIndex == 0) {
								    sourceType = 'camera'
								  } else if (res.tapIndex == 1) {
								    sourceType = 'album'
								  }
								  var _this = that;
								  uni.chooseMedia({
								    count: 1,// 最多可以选择的图片张数，默认9
								    sizeType: ['original', 'compressed'],
									mediaType:['image'],// original 原图，compressed 压缩图，默认二者都有
								    sourceType: [sourceType],// album 从相册选图，camera 使用相机，默认二者都有
									
								    success:(res) =>{
										console.log('st',_this.base)
										console.log(sourceType),
										console.log('111', res.tempFiles[0].tempFilePath)
										var _that=_this;
										const tempFilePath = res.tempFiles[0].tempFilePath;
												uni.uploadFile({
													url: 'https://www.prxdong.top:8081/getface', //仅为示例，非真实的接口地址
													filePath: tempFilePath,
													header:{
														'content-type':'multipart/form-data',
													},
													name: 'file',
		
													success: (uploadFileRes) => {
														        /// 通过微信小程序自带方法将base64转为二进制去除特殊符号，再转回base64
																// console.log(JSON.parse(uploadFileRes.data).data)
																// var base64Image = uploadFileRes.data.data // 后台返回的base64数据
																														
															var imgData = JSON.parse(uploadFileRes.data).data.replace(/[\r\n]/g, '').replace(/\ +/g, "")
															
														    // var base64Data = uni.arrayBufferToBase64(uni.base64ToArrayBuffer(JSON.parse(uploadFileRes.data).data));
														        /// 拼接请求头，data格式可以为image/png或者image/jpeg等，看需求
														    _that.base = "data:image/png;base64," + imgData 
							                          // console.log(uploadFileRes.data);
														// console.log('tt',_that.base)
													}
											});
								    },
								  })
								},
								
							});
						},
		//点击小图切换指定大图
		changeBigPic(index){
			this.current = index;
		},
	},
  };
    
</script>

<style scoped lang="scss">
	#firstCanvas{
		background:"https://tse1-mm.cn.bing.net/th/id/OIP-C.QPH1IBosDYBqaU3O6wV3YAHaEo?w=283&h=180&c=7&r=0&o=5&pid=1.7";
	}
  .page {
    background-color: #ffffff;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    .section {
      background-color: #d14735;
      height: 112.03rpx;
    }
	.bigImg{width:100%;height:14rem;}
	.bigImg image{width:100%;height:14rem;}
    .image {
      width: 750rpx;
      height: 417.72rpx;
    }
    .section_2 {
      padding: 26.58rpx 0 28.48rpx;
      background-color: #ffffff;
      .text-wrapper {
        padding: 37.97rpx 0;
        background-color: #f2f2f2;
        border-radius: 9.49rpx;
        width: 620.89rpx;
        .text {
          color: #808080;
          font-size: 22.78rpx;
          font-family: SourceHanSansCN;
          line-height: 21.84rpx;
        }
      }
    }
    .grid {
      margin-top: 18.99rpx;
      padding: 0 28.48rpx;
      height: 659.81rpx;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      row-gap: 24.68rpx;
      .space-y-14 {
        & > view:not(:first-child),
        & > text:not(:first-child),
        & > image:not(:first-child) {
          margin-top: 26.58rpx;
        }
        .image_2 {
          width: 273.42rpx;
          height: 153.8rpx;
        }
        .font_1 {
          font-size: 26.58rpx;
          font-family: SourceHanSansCN;
          line-height: 24.68rpx;
          color: #383838;
        }
      }
      .grid-item {
        padding: 0 36.08rpx;
      }
    }
    .section_3 {
      margin-top: 3.8rpx;
      padding: 18.99rpx 0 34.18rpx;
      background-color: #ffffff;
      .button {
        margin: 0 37.97rpx;
        padding: 34.18rpx 0 30.38rpx;
        background-color: #d14735;
        border-radius: 9.49rpx;
        .text_2 {
          color: #ffffff;
          font-size: 34.18rpx;
          font-family: SourceHanSansCN;
          line-height: 31.33rpx;
        }
      }
    }
  }
</style>