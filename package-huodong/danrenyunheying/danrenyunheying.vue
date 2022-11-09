<template>
  <view class="flex-col page">
    <view class="flex-col group">
      <view class="flex-col items-center section">
        <view class="flex-col items-center text-wrapper">
          <text class="text_2">建议使用半身或全身正面照，照片不超过20M</text>
        </view>
      </view>
      <view class="flex-col section_2">
        <view class="flex-col space-y-14">
          <view class="flex-row space-x-39">
            <view class="section_3"></view>
            <view class="section_3"></view>
          </view>
          <view class="flex-row justify-between">
            <text class="font_2">东门</text>
            <text class="font_2 text_3">北门</text>
          </view>
        </view>
        <view class="flex-col space-y-14 group_2">
          <view class="flex-row space-x-39">
            <view class="section_3"></view>
            <view class="section_3"></view>
          </view>
          <view class="flex-row justify-between group_3">
            <text class="font_2">西门</text>
            <text class="font_2 text_4">南门</text>
          </view>
        </view>
        <view class="flex-row space-x-39 group_4">
          <view class="section_3"></view>
          <view class="section_3"></view>
        </view>
      </view>
      <view class="flex-col section_4">
        <view class="flex-col items-center button"  @tap="actionSheetTap"><text class="font_1 text_5">上传人像</text></view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
		  buttonRect: {}
	  };
    },
    methods: {
		actionSheetTap() {
					const that = this;
					uni.showActionSheet({
						title: '标题',
						itemList: ['拍摄', '从相册选择'],
						popover: {
							top: that.buttonRect.top * 2 + that.buttonRect.height,
							left: that.buttonRect.left + that.buttonRect.width / 2
						},
						success: e => {
							if(e.index==1){  
										self.camera('camera');  
									}else if(e.index==2){  
										self.camera('album');  
									}  
						}
					});
				},
		 camera(val){
		 				uni.chooseImage({
		 					count: 6, //默认9
		 					sizeType: [ 'compressed'], //original 原图，compressed 压缩图，默认二者都有
		 					sourceType: [val], //album 从相册选图，camera 使用相机，
		 					success: (res)=> {
		 							
		 						const tempFilePaths = res.tempFilePaths;
		 						console.log(tempFilePaths[0])
		 						this.close();
		 						this.imgList.push(tempFilePaths[0]);
		 					
		 								// return false;
		 								uni.uploadFile({
		 									url: 'http://licai.youma.me/index/publics', //仅为示例，非真实的接口地址
		 									filePath: tempFilePaths[0],
		 									name: 'file',
		 									success: (uploadFileRes) => {
		 										var data=JSON.parse(uploadFileRes.data)
		 											this.fromData.qualification.push(data.Data)
		 											console.log(data.Data);
		 									}
		 								});
		 								}
		 							});
		 						}
	},
  };
</script>

<style scoped lang="scss">
  .page {
    background-color: #cccccc;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    .group {
      padding-top: 415.82rpx;
      flex: 1 1 auto;
      border-top: solid 2.72rpx #ffffff;
      overflow-y: auto;
      .section {
        padding: 26.58rpx 0 28.48rpx;
        background-color: #ffffff;
        .text-wrapper {
          padding: 37.97rpx 0;
          background-color: #f2f2f2;
          border-radius: 9.49rpx;
          width: 620.89rpx;
          .text_2 {
            color: #808080;
            font-size: 22.78rpx;
            font-family: SourceHanSansCN;
            line-height: 21.84rpx;
          }
        }
      }
      .section_2 {
        padding: 18.99rpx 62.66rpx 0 64.56rpx;
        background-color: #ffffff;
        height: 679.75rpx;
        .space-y-14 {
          & > view:not(:first-child),
          & > text:not(:first-child),
          & > image:not(:first-child) {
            margin-top: 26.58rpx;
          }
          .font_2 {
            font-size: 26.58rpx;
            font-family: SourceHanSansCN;
            line-height: 24.68rpx;
            color: #383838;
          }
          .text_3 {
            margin-right: 220.25rpx;
          }
          .group_3 {
            padding: 0 3.8rpx;
            .text_4 {
              margin-right: 216.46rpx;
            }
          }
        }
        .group_2 {
          margin-top: 56.96rpx;
        }
        .space-x-39 {
          & > view:not(:first-child),
          & > text:not(:first-child),
          & > image:not(:first-child) {
            margin-left: 74.05rpx;
          }
          .section_3 {
            flex: 1 1 273.42rpx;
            background-color: #cccccc;
            width: 273.42rpx;
            height: 151.9rpx;
          }
        }
        .group_4 {
          margin: 56.96rpx 0 -15.19rpx;
        }
      }
      .section_4 {
        padding: 20.89rpx 0 34.18rpx;
        background-color: #ffffff;
        .button {
          margin: 0 37.97rpx;
          padding: 34.18rpx 0 30.38rpx;
          background-color: #d14735;
          border-radius: 9.49rpx;
          .font_1 {
            font-size: 34.18rpx;
            font-family: SourceHanSansCN;
            line-height: 32.28rpx;
            color: #ffffff;
          }
          .text_5 {
            line-height: 31.33rpx;
          }
        }
      }
    }
  }
</style>