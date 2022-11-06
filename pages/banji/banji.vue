<template>
<view class="flex-col space-y-8 page">
  <view class="flex-col group">
    <image
      class="image"
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16670437971835669502.png"
    />
    <view class="group_2">
      <text class="text">计算机与大数据学院/软件学院</text>
      <text class="text_2">college of computer and date science/college of software</text>
    </view>
    <view class="flex-col items-center space-y-10 section">
      <text class="font_1 text_3">暂无加入班级</text>
      <text class="text_4">快去加入自己的班级吧！</text>
    </view>
  </view>
  <view class="flex-col items-center button" @click="gotoclass()"><text class="font_1 text_5">加入班级</text></view>
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
			gotoclass()
			{
				uni.navigateTo({
					url:'/package-banji/join_in_class/join_in_class'
				})
			}
		}

	}
</script>

<style lang="scss">
.space-y-8 {
  & > view:not(:first-child),
  & > text:not(:first-child),
  & > image:not(:first-child) {
    margin-top: 0.5rem;
  }
  .group {
    padding: 3.31rem 0;
    .image {
      align-self: center;
      width: 16.25rem;
      height: 6.63rem;
    }
    .group_2 {
      margin-top: 0.25rem;
      align-self: center;
      line-height: 1.19rem;
      text-align: center;
      width: 13.72rem;
      .text {
        color: #9d2221;
        font-size: 1rem;
        font-family: SourceHanSansCN;
        line-height: 1.19rem;
      }
      .text_2 {
        color: #9d2221;
        font-size: 0.56rem;
        font-family: YOUSHEhaoshenti;
        line-height: 0.69rem;
        word-break: break-all;
      }
    }
    .space-y-10 {
      & > view:not(:first-child),
      & > text:not(:first-child),
      & > image:not(:first-child) {
        margin-top: 0.63rem;
      }
      .text_3 {
        color: #808080;
        line-height: 1.16rem;
      }
      .text_4 {
        color: #a6a6a6;
        font-size: 0.75rem;
        font-family: SourceHanSansCN;
        line-height: 0.69rem;
      }
    }
    .section {
      margin-top: 1rem;
      padding: 16.25rem 0 0.063rem;
      background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16670437971919971204.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
  }
  .button {
    padding: 0.88rem 0 0.56rem;
    align-self: center;
    background-color: #d14735;
    border-radius: 0.31rem;
    width: 10.44rem;
    .text_5 {
      color: #ffffff;
      line-height: 1.16rem;
    }
  }
  .font_1 {
    font-size: 1.25rem;
    font-family: SourceHanSansCN;
    line-height: 1.19rem;
  }
}
.page {
  padding: 0 2.88rem 6.88rem 3.06rem;
  background-color: #ffffff;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}
</style>
