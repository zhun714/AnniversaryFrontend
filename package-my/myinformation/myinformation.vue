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
	       <view class="flex-row justify-between section_3" @click="chooseimage()">
	         <view class="flex-row space-x-26">
	           <image
	             class="image_3"
	             src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16672829678479916743.png"
	           />
	           <text class="text_2">何帆</text>
	         </view>
	         <image
	           class="image_4"
	           src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16672829678400163723.png"
	         />
	       </view>
	     </view>
	     <view class="flex-col space-y-18">
	       <view class="flex-col space-y-13 section_4">
	         <text class="font_1 text_3">学号</text>
	         <input class="font_1 text_4" placeholder="032002509"></input>
	         <view class="divider"></view>
	         <text class="font_1 text_5">年级</text>
	         <input class="font_1 text_6" placeholder="2020级"></input>
	         <view class="divider"></view>
	         <text class="font_1 text_7">学院</text>
	         <input class="font_1 text_8" placeholder="计算机与大数据学院"></input>
	       </view>
	       <view class="flex-col space-y-13 section_5">
	         <text class="font_1 text_9">手机号码</text>
	         <input class="font_1 text_10" placeholder="请填写您的手机号码"></input>
	         <view class="divider view"></view>
	         <text class="font_1 text_11">邮箱</text>
	         <input  class="font_1 text_12" placeholder="请填写您的邮箱"></input >
	       </view>
	       <view class="flex-col space-y-13 section_6">
	         <text class="font_1 text_13">单位名称</text>
	         <input class="font_1 text_14" placeholder="请填写您的单位名称"></input>
	         <view class="divider"></view>
	         <text class="font_1 text_15">现任职务</text>
	         <input class="font_1 text_16" placeholder="请填写您的现任职务"></input>
	         <view class="divider"></view>
	         <text class="font_1 text_17">行业</text>
	         <input class="font_1 text_18" placeholder="请填写您的行业"></input>
	       </view>
	     </view>
	   </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:
		{
			chooseimage()
			{
			   uni.chooseImage({
			   	count:1,
				sizeType:['original', 'compressed'],
				sourceType: ['album'], //从相册选择
				success: function (res) {
						uni.navigateTo({
							url:'/subpkg/myinformation/information'
						})
					}
			   })
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
