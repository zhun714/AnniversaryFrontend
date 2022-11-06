<template>
  <view class="flex-col space-y-694 page">
    <view class="flex-row section">
      <image
        class="image"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63648eb5fe65f70012e7e999/16675345904507231210.png"
      />
      <text class="text">福州大学旗山校区全景图</text>
    </view>
    <image
      class="image_2"
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63648eb5fe65f70012e7e999/16675345904204879588.png"
    />
  </view>
</template>

<script>
  export default {
    components: {},
    data() {
      return {};
    },
    methods: {},
  };
</script>

<style scoped lang="css">
  .page {
    padding-bottom: 43.67rpx;
    background-color: #ffffff;
    background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63648eb5fe65f70012e7e999/16675345904186874705.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .space-y-694 > view:not(:first-child),
  .space-y-694 > text:not(:first-child),
  .space-y-694 > image:not(:first-child) {
    margin-top: 1317.72rpx;
  }
  .section {
    padding: 34.18rpx 34.18rpx;
    background-color: #d14735;
  }
  .image {
    width: 22.78rpx;
    height: 41.77rpx;
  }
  .text {
    margin: 3.8rpx 0 3.8rpx 26.58rpx;
    color: #ffffff;
    font-size: 34.18rpx;
    font-family: SourceHanSansCN;
    line-height: 32.28rpx;
  }
  .image_2 {
    margin-left: 30.38rpx;
    align-self: flex-start;
    width: 41.77rpx;
    height: 41.77rpx;
  }
</style>