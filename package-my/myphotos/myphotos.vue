<template>
<view class="flex-col page">
  <view class="flex-col space-y-16">
    <view class="flex-row space-x-34 section">

      <text class="text">我的照片</text>
    </view>
    <text class="text_2">云合影的照片都会保存在这里~</text>
  </view>
  <view class="flex-col space-y-20 group">
    <view class="flex-row space-x-26">
      <view class="section_2"></view>
      <view class="section_2"></view>
    </view>
    <view class="flex-row space-x-26">
      <view class="section_2"></view>
      <view class="section_2"></view>
    </view>
  </view>
  <image
    class="image_2"
    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16672829079276309967.png"
  />
  <view class="flex-col items-center text-wrapper" style="position: fixed;margin-top: 38rem;margin-left:0rem;"><text class="text_3">分享</text></view>
</view>

</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.page {
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .space-y-16 {
    & > view:not(:first-child),
    & > text:not(:first-child),
    & > image:not(:first-child) {
      margin-top: 1rem;
    }
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
        line-height: 1.03rem;
      }
    }
    .section {
      padding: 1rem 1.13rem 1.25rem;
      background-color: #d24735;
    }
    .text_2 {
      align-self: center;
      color: #a6a6a6;
      font-size: 0.75rem;
      font-family: SourceHanSansCN;
      line-height: 0.69rem;
    }
  }
  .space-y-20 {
    & > view:not(:first-child),
    & > text:not(:first-child),
    & > image:not(:first-child) {
      margin-top: 1.25rem;
    }
    .space-x-26 {
      & > view:not(:first-child),
      & > text:not(:first-child),
      & > image:not(:first-child) {
        margin-left: 1.63rem;
      }
      .section_2 {
        flex: 1 1 10.13rem;
        background-color: #e5e5e5;
        border-radius: 0.19rem;
        width: 10.13rem;
        height: 6.69rem;
      }
    }
  }
  .group {
    margin-top: 1.19rem;
    padding: 0 1.38rem;
  }
  .image_2 {
    margin-top: 7.19rem;
    align-self: center;
    opacity: 0.15;
    width: 18.75rem;
    height: 15.31rem;
  }
  .text-wrapper {
    margin-top: 2rem;
    padding: 0.88rem 0 0.56rem;
    align-self: center;
    background-color: #d14735;
    border-radius: 0.31rem;
    width: 10.44rem;
    .text_3 {
      color: #ffffff;
      font-size: 1.25rem;
      font-family: SourceHanSansCN;
      line-height: 1.16rem;
    }
  }
}
</style>
