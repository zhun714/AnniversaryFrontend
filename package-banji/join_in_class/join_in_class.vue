<template>
<view class="flex-col page">
  <view class="flex-col items-center space-y-61 section">
    <image
      class="image"
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16670437971835669502.png"
    />
    <image
      class="image_2"
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16670437971919971204.png"
    />
    <view class="section_5"></view>
  </view>
  <view class="flex-col items-center section_2">
    <view class="flex-col section_3">
      <text class="text">加入班级</text>
      <view class="flex-col group">
        <text class="font_1 text_2">学号</text>
        <view class="flex-col items-start text-wrapper view"><input class="font_2 text_3" placeholder="请输入学号"/></view>
        <text class="font_1 text_4">专业</text>
        <view class="flex-col items-start text-wrapper_2"><input  class="font_2 text_5" placeholder="请输入专业"></view>
        <text class="font_1 text_6">年级</text>
        <view class="flex-col items-start text-wrapper view_2"><input class="font_2 text_3" placeholder="请输入年级"/></view>
        <text class="font_1 text_7">班级</text>
        <view class="flex-col items-start text-wrapper_2"><input  class="font_2 text_5" placeholder="请输入班级"></view>
      </view>
      <view class="flex-row space-x-10 group_2">
        <view class="flex-col items-center text-wrapper_3" @click="gotonoclass()"><text class="font_1 text_8">取消</text></view>
        <view class="section_4"></view>
        <view class="flex-col items-center text-wrapper_4" @click="gotohaveclass()"><text class="font_1 text_9">加入</text></view>
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
			gotonoclass()
			{
				uni.switchTab({
					url:'/pages/banji/banji'
				})
			},
			gotohaveclass()
			{
				uni.navigateTo({
					url:'/package-banji/in_class/in_class'
				})
			},
		}
	}
</script>

<style lang="scss">
.page {
  padding-bottom: 4.13rem;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  position: relative;
  .space-y-61 {
    & > view:not(:first-child),
    & > text:not(:first-child),
    & > image:not(:first-child) {
      margin-top: 3.81rem;
    }
    .image {
      width: 16.25rem;
      height: 6.63rem;
    }
    .image_2 {
      width: 18.75rem;
      height: 18.75rem;
    }
    .section_5 {
      background-color: #d14735;
      border-radius: 0.31rem;
      width: 10.44rem;
      height: 2.56rem;
    }
  }
  .section {
    padding: 3.31rem 0 6.88rem;
    background-color: #ffffff;
  }
  .section_2 {
    padding: 10.19rem 0 11.44rem;
    background-color: #0000004d;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    .section_3 {
      padding-top: 1.13rem;
      background-color: #ffffff;
      border-radius: 1.88rem;
      .text {
        align-self: center;
        color: #000000;
        font-size: 1.13rem;
        font-family: SourceHanSansCN;
        line-height: 1.06rem;
      }
      .group {
        margin-top: 1.56rem;
        padding-left: 2.25rem;
        padding-right: 2.13rem;
        .text_2 {
          margin-left: 0.13rem;
          align-self: flex-start;
        }
        .text-wrapper {
          padding: 0.63rem 0 0.69rem;
          background-color: #f4f4f4;
          border-radius: 0.38rem;
          width: 13.5rem;
          border: solid 0.063rem #e5e5e5;
          .text_3 {
            margin-left: 0.69rem;
          }
        }
        .view {
          margin-right: 0.13rem;
          margin-top: 0.75rem;
        }
        .text_4 {
          margin-left: 0.25rem;
          margin-top: 1.25rem;
          align-self: flex-start;
        }
        .text-wrapper_2 {
          margin-left: 0.13rem;
          margin-top: 0.75rem;
          padding: 0.69rem 0;
          background-color: #f4f4f4;
          border-radius: 0.38rem;
          width: 13.5rem;
          border: solid 0.063rem #e5e5e5;
          .text_5 {
            margin-left: 0.69rem;
          }
        }
        .font_2 {
          font-size: 0.75rem;
          font-family: SourceHanSansCN;
          line-height: 0.69rem;
          color: #808080;
        }
        .text_6 {
          margin-left: 0.25rem;
          margin-top: 1.25rem;
          align-self: flex-start;
        }
        .view_2 {
          margin-left: 0.13rem;
          margin-top: 0.75rem;
        }
        .text_7 {
          margin-left: 0.25rem;
          margin-top: 1.25rem;
          align-self: flex-start;
        }
      }
      .space-x-10 {
        & > view:not(:first-child),
        & > text:not(:first-child),
        & > image:not(:first-child) {
          margin-left: 0.63rem;
        }
        .text-wrapper_3 {
          padding: 0.75rem 0 1.13rem;
          align-self: center;
          background-color: #cccccc00;
          width: 7.69rem;
          height: 2.69rem;
          .text_8 {
            color: #383838;
          }
        }
        .section_4 {
          background-color: #e5e5e5;
          width: 0.094rem;
          height: 3.69rem;
        }
        .text-wrapper_4 {
          padding: 0.75rem 0 1rem;
          align-self: center;
          background-color: #cccccc00;
          width: 7.69rem;
          height: 2.56rem;
          .text_9 {
            color: #d24735;
            line-height: 0.78rem;
          }
        }
      }
      .group_2 {
        margin-top: 1.88rem;
        padding-left: 0.75rem;
        padding-right: 0.63rem;
        border-top: solid 0.063rem #e5e5e5;
      }
      .font_1 {
        font-size: 0.88rem;
        font-family: SourceHanSansCN;
        line-height: 0.81rem;
        color: #808080;
      }
    }
  }
}
</style>
