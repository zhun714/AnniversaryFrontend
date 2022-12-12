<template>
<view class="flex-col space-y-123 page">
  <view class="flex-col">
    <view class="flex-row space-x-35 section">

      <text class="text">意见反馈</text>
    </view>
    <view class="flex-col text-wrapper">
	<textarea name="" id="" cols="40" rows="15" maxlength="200" placeholder="请输入10字以上的问题描述，以便我们提供更好的服务"></textarea>
    </view>	
  </view>
  <view class="flex-col items-center">
    <image
      class="image_2"
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16672829079276309967.png"
    />
    <view class="flex-col items-center text-wrapper_2" style="position: fixed;margin-top: 4rem;margin-left:0rem;"><text class="text_3">提交</text></view>
  </view>
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
.space-y-123 {
  & > view:not(:first-child),
  & > text:not(:first-child),
  & > image:not(:first-child) {
    margin-top: 7.69rem;
  }
  .space-x-35 {
    & > view:not(:first-child),
    & > text:not(:first-child),
    & > image:not(:first-child) {
      margin-left: 2.19rem;
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
  .section {
    padding: 1rem 1.13rem 1.25rem;
    background-color: #d24735;
  }
  .text-wrapper {
    margin: 1.63rem 1.38rem 0;
    padding: 1.25rem 0 11.63rem;
    background-color: #ffffff;
    border-radius: 0.63rem;
    border: solid 0.063rem #d24735;
    .text_2 {
      margin-left: 1.13rem;
      margin-right: 1.31rem;
      color: #a6a6a6;
      font-size: 0.88rem;
      font-family: SourceHanSansCN;
      line-height: 1.06rem;
    }
  }
  .image_2 {
    opacity: 0.15;
    width: 18.75rem;
    height: 15.31rem;
  }
  .text-wrapper_2 {
    padding: 0.81rem 0 0.56rem;
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
.page {
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}
</style>
