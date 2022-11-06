<template>
  <view class="flex-row page">
    <view class="flex-row group">
      <text class="text">院庆节目单</text>
      <image
        class="image"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63667be2fe65f70012e850e6/16676607767526442623.png"
      />
      <view class="group_2"></view>
    </view>
    <view class="flex-col group_4">
      <view class="image-wrapper"></view>
      <view class="section"></view>
    </view>
    <view class="flex-col items-end space-y-4 group_6">
      <text class="font_1 text_2">福州大学</text>
      <text class="font_1 text_3">计算机与大数据学院/软件学院</text>
      <text class="font_1 text_4">40周年院庆</text>
    </view>
    <view class="flex-col items-end group_7">
      <view class="text-wrapper"></view>
      <text class="text_5">节目单</text>
      <image
        class="image_3"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63667be2fe65f70012e850e6/16676607767544241500.png"
      />
    </view>
    <view class="flex-row list group_10">
      <view class="flex-row group_12 list-item" :key="i" v-for="(item, i) in list_XVP7A4HZ">
        <view class="section_4"></view>
        <text class="font_2 text_6">《相聚院庆》</text>
        <view class="section_3"></view>
        <text class="font_3 text_7">表演：诗朗诵</text>
      </view>
    </view>
    <view class="flex-row group_8">
      <image
        class="image_4"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63667be2fe65f70012e850e6/16676607769952206113.png"
      />
      <image
        class="image_5"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63667be2fe65f70012e850e6/16676607767553462807.png"
      />
      <image
        class="image_10"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63667be2fe65f70012e850e6/16676607770076047352.png"
      />
      <image
        class="image_11"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63667be2fe65f70012e850e6/16676607770015017204.png"
      />
    </view>
    <view class="flex-col group_9"><view class="section_2"></view></view>
    <image
      class="image_6"
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63667be2fe65f70012e850e6/16676607767514203381.png"
    />
    <image
      class="image_9"
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63667be2fe65f70012e850e6/16676607767505835713.png"
    />
    <image
      class="image_8"
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63667be2fe65f70012e850e6/16676607767523534126.png"
    />
    <image
      class="image_7"
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63667be2fe65f70012e850e6/16676607767514203381.png"
    />
    <image
      class="image_2"
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63667be2fe65f70012e850e6/16676607767486712797.png"
    />
    <view class="flex-col items-center group_3"><view class="group_5"></view></view>
  </view>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        list_XVP7A4HZ: [null, null, null, null, null, null, null, null],
      };
    },
    methods: {},
  };
</script>

<style scoped lang="css">
  .page {
    padding-bottom: 77.85rpx;
    background-color: #d14735;
    height: 2223.42rpx;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
  }
  .group {
    padding: 34.18rpx 34.18rpx 0;
    height: 76.9rpx;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
  }
  .text {
    color: #ffffff;
    font-size: 34.18rpx;
    font-family: SourceHanSansCN;
    line-height: 31.33rpx;
    position: absolute;
    left: 86.39rpx;
    bottom: 4.75rpx;
  }
  .image {
    width: 22.78rpx;
    height: 41.77rpx;
    position: absolute;
    left: 34.18rpx;
    bottom: 0;
  }
  .group_2 {
    width: 172.78rpx;
    height: 31.33rpx;
    position: absolute;
    left: 86.39rpx;
    top: 39.87rpx;
  }
  .group_4 {
    position: absolute;
    left: 0;
    right: 0;
    top: 112.03rpx;
  }
  .image-wrapper {
    background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63667be2fe65f70012e850e6/3259f37ecaaedacb2d8692246fc66eb1.png');
    background-position: 0% 0%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 535.44rpx;
  }
  .section {
    background-color: #d14735;
    height: 13.29rpx;
    position: absolute;
    left: 522.15rpx;
    right: 58.86rpx;
    top: 129.11rpx;
  }
  .space-y-4 > view:not(:first-child),
  .space-y-4 > text:not(:first-child),
  .space-y-4 > image:not(:first-child) {
    margin-top: 7.59rpx;
  }
  .group_6 {
    position: absolute;
    right: 58.86rpx;
    top: 358.86rpx;
  }
  .font_1 {
    font-size: 26.58rpx;
    font-family: PangMenZhengDao;
    line-height: 31.33rpx;
    color: #ffffff;
  }
  .text_2 {
    line-height: 32.28rpx;
  }
  .text_3 {
    margin-right: 3.8rpx;
    line-height: 32.28rpx;
  }
  .text_4 {
    margin-right: 5.7rpx;
    line-height: 32.28rpx;
  }
  .group_7 {
    padding-bottom: 36.08rpx;
    width: 485.13rpx;
    position: absolute;
    left: 91.14rpx;
    top: 497.47rpx;
  }
  .text-wrapper {
    background-color: #d96253;
    border-radius: 56.96rpx;
    width: 402.53rpx;
    height: 112.03rpx;
  }
  .text_5 {
    color: #fff4de;
    font-size: 56.96rpx;
    font-family: PangMenZhengDao;
    line-height: 52.22rpx;
    position: absolute;
    right: 110.13rpx;
    top: 33.23rpx;
  }
  .image_3 {
    width: 254.43rpx;
    height: 138.61rpx;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .list {
    position: absolute;
    left: 28.48rpx;
    right: 26.58rpx;
    top: 696.84rpx;
  }
  .group_10 {
    height: 1364.24rpx;
  }
  .group_12 {
    position: absolute;
    left: 50%;
    top: 0;
  }
  .section_4 {
    background-color: #ffffff;
    border-radius: 56.96rpx;
    width: 419.62rpx;
    height: 85.44rpx;
    position: absolute;
    left: 11.39rpx;
    right: 11.39rpx;
    top: 15.19rpx;
  }
  .font_2 {
    font-size: 45.57rpx;
    font-family: PangMenZhengDao;
    line-height: 42.72rpx;
    color: #ad0f1f;
  }
  .text_6 {
    position: absolute;
    right: 58.86rpx;
    top: 44.62rpx;
  }
  .section_3 {
    background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63667be2fe65f70012e850e6/16676607770868548015.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 442.41rpx;
    height: 121.52rpx;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
  }
  .font_3 {
    font-size: 34.18rpx;
    font-family: PangMenZhengDao;
    line-height: 31.33rpx;
    color: #ffffff;
  }
  .text_7 {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .list-item {
    width: 442.41rpx;
    height: 168.04rpx;
    transform: translateX(-50%);
  }
  .group_8 {
    height: 1513.29rpx;
    position: absolute;
    left: 28.48rpx;
    right: 26.58rpx;
    top: 632.28rpx;
  }
  .image_4 {
    width: 125.32rpx;
    height: 125.32rpx;
    position: absolute;
    left: 0;
    top: 0;
  }
  .image_5 {
    width: 125.32rpx;
    height: 125.32rpx;
    position: absolute;
    right: 0;
    top: 0;
  }
  .image_10 {
    width: 125.32rpx;
    height: 125.32rpx;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .image_11 {
    width: 125.32rpx;
    height: 125.32rpx;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .group_9 {
    position: absolute;
    left: 49.37rpx;
    right: 47.47rpx;
    top: 653.16rpx;
  }
  .section_2 {
    background-color: #ffffff26;
    border-radius: 18.99rpx;
    height: 1467.72rpx;
  }
  .image_6 {
    opacity: 0.6;
    width: 438.61rpx;
    height: 132.91rpx;
    position: absolute;
    left: -168.99rpx;
    top: 1010.13rpx;
  }
  .image_9 {
    opacity: 0.6;
    width: 385.44rpx;
    height: 184.18rpx;
    position: absolute;
    right: -224.05rpx;
    bottom: 244.94rpx;
  }
  .image_8 {
    opacity: 0.6;
    width: 438.61rpx;
    height: 132.91rpx;
    position: absolute;
    left: -244.94rpx;
    bottom: 527.85rpx;
  }
  .image_7 {
    opacity: 0.6;
    width: 438.61rpx;
    height: 132.91rpx;
    position: absolute;
    right: -222.15rpx;
    bottom: 890.51rpx;
  }
  .image_2 {
    opacity: 0.8;
    width: 265.82rpx;
    height: 85.44rpx;
    position: absolute;
    left: 110.13rpx;
    top: 301.9rpx;
  }
  .group_3 {
    padding: 224.05rpx 0 106.33rpx;
    overflow-x: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 76.9rpx;
  }
  .group_5 {
    width: 470.89rpx;
    height: 89.24rpx;
  }
</style>