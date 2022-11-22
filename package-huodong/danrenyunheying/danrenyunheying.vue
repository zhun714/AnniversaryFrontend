<template>
  <view class="flex-col page">
    <view class="section">	
</view>

	<swiper class="bigImg" :current="current" style="position: relative;">
	 <swiper-item v-for="(big,index) in lists" :key="index">
		<image :src="base" alt="" style="height: 100rpx;width:100rpx;position: absolute;z-index: 10;">
		<image
		  class="image"
		  :src="big.picture_url"
		  mode="scaleToFill"
		/>
	    </swiper-item>
	  </swiper>
    <view class="flex-col items-center section_2">
      <view class="flex-col items-center text-wrapper">
        <text class="text">建议使用半身或全身正面照，照片不超过20M</text>
      </view>
    </view>
    <view class="grid">
      <view class="flex-col items-start space-y-14 grid-item" :key="index" v-for="(small, index) in lists" @click='changeBigPic(index)'>
        <image
          class="image_2"
          :src="small.picture_url"
		  :class="[index == current ? 'active' : '']"
        />
        <text class="font_1">{{small.picture_name}}</text>
      </view>
    </view>
    <view class="flex-col section_3">
      <view class="flex-col items-center button" @tap="actionSheetTap"><text class="text_2">上传人像</text></view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
		  buttonRect: {},
		  current: 0,//轮播图索引
		  itemList: [],
		  base:'',
		  lists: [
		  			{
						sp:1,
		  				picture_name:'东门',
		  				picture_url:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/636e0914f9b4a40011def608/16681556784402302093.png"
		  			},
		  			{
						sp:2,
		  				picture_name:'北门',
		  				picture_url:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/636e0914f9b4a40011def608/16681556784447443523.png"
		  			},
		  			{
						sp:3,
		  				picture_name:'西门',
		  				picture_url:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/636e0914f9b4a40011def608/16681556784426983374.png"
		  			},
		  			{
						sp:4,
		  				picture_name:'南门',
		  				picture_url:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/636e0914f9b4a40011def608/16681556784433466945.png"
		  			},
		  			{
						sp:5,
		  				picture_name:'福友阁',
		  				picture_url:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/636e0914f9b4a40011def608/16681556784456651986.png"
		  			},
		  			{
						sp:6,
		  				picture_name:'图书馆',
		  				picture_url:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/636e0914f9b4a40011def608/16681556784456815493.png"
		  			}		
		  		],
		
	  };
    },
	onLoad() {
	            /* 列表 */
	            this.getList();
	},
	onPullDownRefresh() {
	            /* 下拉的时候更新 */
	            this.getList();
	},
    methods: {
		getList(){
			uni.request({
				url:'http://43.139.44.201:8081/background',
				method:'GET',
				header:{
					'content-type':'application/json',
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
											url: 'http://43.139.44.201:8081/getface', //仅为示例，非真实的接口地址
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