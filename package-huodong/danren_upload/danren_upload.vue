<template>
  <view class="flex-col page">
    <view class="flex-col space-y-30">
      <view class="flex-col space-y-12">
        <view class="flex-col">
          <view class="flex-row section">
            <image
              class="image"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63648eb5fe65f70012e7e999/16675345904507231210.png"
            />
            <text class="text">院庆云合影</text>
          </view>
          <view class="section_3"></view>
          <view class="flex-col items-center section_4">
            <view class="flex-col items-center text-wrapper">
              <text class="text_2">建议使用半身或全身正面照，照片不超过20M</text>
            </view>
          </view>
        </view>
        <view class="flex-row justify-between group">
          <view class="section_5"></view>
          <view class="section_5"></view>
        </view>
        <view class="flex-row justify-between group_2">
          <text class="font_1">东门</text>
          <text class="font_1 text_3">北门</text>
        </view>
      </view>
      <view class="flex-row justify-between group_3">
        <view class="section_5"></view>
        <view class="section_5"></view>
      </view>
    </view>
    <view class="flex-col section_2">
      <view class="flex-col section_6">
        <view class="flex-col items-center text-wrapper_2"><text class="font_1">拍摄</text></view>
        <view class="flex-col items-center text-wrapper_3"><text class="font_1">从相册选择</text></view>
        <view class="section_7"></view>
        <view class="flex-col items-center text-wrapper_4"><text class="font_1">取消</text></view>
      </view>
    </view>
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
    padding-bottom: 398.73rpx;
    background-color: #ffffff;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    position: relative;
  }
  .space-y-30 > view:not(:first-child),
  .space-y-30 > text:not(:first-child),
  .space-y-30 > image:not(:first-child) {
    margin-top: 56.96rpx;
  }
  .space-y-12 > view:not(:first-child),
  .space-y-12 > text:not(:first-child),
  .space-y-12 > image:not(:first-child) {
    margin-top: 22.78rpx;
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
    margin: 3.8rpx 0 3.8rpx 30.38rpx;
    color: #ffffff;
    font-size: 34.18rpx;
    font-family: SourceHanSansCN;
    line-height: 32.28rpx;
  }
  .section_3 {
    background-color: #cccccc;
    height: 416.77rpx;
  }
  .section_4 {
    margin-top: 3.8rpx;
    padding: 26.58rpx 0 28.48rpx;
    background-color: #ffffff;
  }
  .text-wrapper {
    padding: 37.97rpx 0;
    background-color: #f2f2f2;
    border-radius: 9.49rpx;
    width: 620.89rpx;
  }
  .text_2 {
    color: #808080;
    font-size: 22.78rpx;
    font-family: SourceHanSansCN;
    line-height: 21.84rpx;
  }
  .group {
    padding: 0 64.56rpx;
  }
  .section_5 {
    background-color: #cccccc;
    width: 273.42rpx;
    height: 151.9rpx;
  }
  .group_2 {
    padding: 0 66.46rpx;
  }
  .font_1 {
    font-size: 26.58rpx;
    font-family: SourceHanSansCN;
    line-height: 24.68rpx;
    color: #383838;
  }
  .text_3 {
    margin-right: 216.46rpx;
  }
  .group_3 {
    padding-left: 66.46rpx;
    padding-right: 62.66rpx;
  }
  .section_2 {
    padding-top: 1144.94rpx;
    background-color: #00000080;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
  }
  .section_6 {
    padding-top: 5.7rpx;
    background-color: #ffffff;
    border-radius: 18.99rpx 18.99rpx 0px 0px;
  }
  .text-wrapper_2 {
    padding: 49.37rpx 0 37.97rpx;
    background-color: #cccccc00;
  }
  .text-wrapper_3 {
    padding: 41.77rpx 0 45.57rpx;
    background-color: #cccccc00;
    border-top: solid 1.9rpx #e5e5e5;
    border-bottom: solid 1.9rpx #e5e5e5;
  }
  .section_7 {
    flex-shrink: 0;
    background-color: #f7f7f7;
    height: 13.29rpx;
  }
  .text-wrapper_4 {
    padding: 45.57rpx 0 55.06rpx;
    background-color: #cccccc00;
    border-top: solid 1.9rpx #e5e5e5;
  }
</style>