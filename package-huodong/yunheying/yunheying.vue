<template>
  <view class="flex-col page">
    <view class="flex-col items-start group">
      <view class="flex-col items-start group_2">
        <view class="section_3"></view>
        <view class="flex-col items-end space-y-77 section">
          <view class="section_2"></view>
          <text class="text_2">1982-2022</text>
        </view>
        <text class="font_1 text_4">计算机与大数据学院/软件学院</text>
        <view class="flex-col section_4">
          <view class="flex-col space-y-56 section_5">
            <view class="flex-row space-x-249">
              <image
                class="image_3"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63648eb5fe65f70012e7e999/16675345925336024096.png"
              />
              <image
                class="image_3"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63648eb5fe65f70012e7e999/16675345922049183211.png"
              />
            </view>
            <view class="flex-row space-x-249">
              <image
                class="image_3 image_4"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63648eb5fe65f70012e7e999/16675345926562043369.png"
              />
              <image
                class="image_3 image_5"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63648eb5fe65f70012e7e999/16675345922883443461.png"
              />
            </view>
          </view>
        </view>
        <image
          class="image_2"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63648eb5fe65f70012e7e999/16675345918739082861.png"
			@click="changetodanrenyunheying()"
		/>
        <view class="flex-col items-center text-wrapper" @click="changetodanrenyunheying()"><text class="font_2">单人云合影</text></view>
      </view>
      <text class="font_1 text_3">福州大学</text>
      <text class="font_1 text_5">40周年院庆</text>
      <view class="flex-col group_3">
        <view class="flex-col items-center section_8">
          <view class="flex-col section_7"><view class="section_9" ></view></view>
        </view>
        <view class="section_6" ></view>
        <view  @click="changetoduorenyunheying()" class="flex-col items-center text-wrapper_2"><text class="font_2">多人云合影</text></view>
        <image
		
          class="image_6"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63648eb5fe65f70012e7e999/16675345925336024096.png"
        />
        <image
          class="image_7"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63648eb5fe65f70012e7e999/16675345926562043369.png"
        />
        <view class="flex-col items-end space-y-58 section_10"  @click="changetoduorenyunheying()">
          <image
            class="image_3"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63648eb5fe65f70012e7e999/16675345922049183211.png"
          />
          <image
            class="image_3"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63648eb5fe65f70012e7e999/16675345922883443461.png"
          />
        </view>
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
    methods: {
		changetodanrenyunheying(){
			
			uni.navigateTo({
				url:'/package-huodong/danrenyunheying/danrenyunheying'
			})
		},
		changetoduorenyunheying(){
			console.log(12312)
			uni.navigateTo({
				url:'/package-huodong/duorenyunheying/duorenyunheying'
			})
		}
	},
  };
</script>

<style scoped lang="css">
  .page {
    background-color: #d14735;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .group {
    padding: 39.87rpx 0 533.54rpx;
    flex: 1 1 auto;
    overflow-y: auto;
    position: relative;
  }
  .group_2 {
    padding: 343.67rpx 0 28.48rpx;
    width: 687.34rpx;
    position: relative;
  }
  .section_3 {
    opacity: 0.8;
    background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63648eb5fe65f70012e7e999/16675345916314352155.png');
    background-position: 100% 0%;
    background-size: 157% 100%;
    background-repeat: no-repeat;
    width: 301.9rpx;
    height: 468.99rpx;
  }
  .section {
    padding: 186.08rpx 15.19rpx 18.99rpx;
    background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63648eb5fe65f70012e7e999/16675345901366266238.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 478.48rpx;
    position: absolute;
    right: 75rpx;
    top: 0;
  }
  .space-y-77 > view:not(:first-child),
  .space-y-77 > text:not(:first-child),
  .space-y-77 > image:not(:first-child) {
    margin-top: 146.2rpx;
  }
  .section_2 {
    background-color: #d14735;
    width: 243.04rpx;
    height: 18.99rpx;
  }
  .text_2 {
    margin-right: 11.39rpx;
    color: #ffffff;
    font-size: 37.97rpx;
    font-family: PangMenZhengDao;
    line-height: 25.63rpx;
  }
  .font_1 {
    font-size: 26.58rpx;
    font-family: PangMenZhengDao;
    line-height: 32.28rpx;
    color: #ffffff;
  }
  .text_4 {
    position: absolute;
    right: 109.18rpx;
    bottom: 370.25rpx;
  }
  .section_4 {
    padding: 9.49rpx 0 7.59rpx;
    background-color: #fff4de;
    border-radius: 37.97rpx;
    width: 622.78rpx;
    position: absolute;
    right: 0;
    top: 546.84rpx;
  }
  .section_5 {
    margin: 0 11.39rpx;
    background-color: #ffeac1;
    border-radius: 37.97rpx;
  }
  .space-y-56 > view:not(:first-child),
  .space-y-56 > text:not(:first-child),
  .space-y-56 > image:not(:first-child) {
    margin-top: 106.33rpx;
  }
  .space-x-249 > view:not(:first-child),
  .space-x-249 > text:not(:first-child),
  .space-x-249 > image:not(:first-child) {
    margin-left: 472.78rpx;
  }
  .image_3 {
    width: 62.66rpx;
    height: 62.66rpx;
  }
  .image_4 {
    margin-bottom: 3.8rpx;
  }
  .image_5 {
    margin-top: 3.8rpx;
  }
  .image_2 {
    width: 275.32rpx;
    height: 294.3rpx;
    position: absolute;
    right: 193.67rpx;
    bottom: 0;
  }
  .text-wrapper {
    padding: 13.29rpx 0 9.49rpx;
    background-color: #fff4de;
    border-radius: 9.49rpx;
    box-shadow: 0px 0px 9.49rpx 5.7rpx #00000040;
    width: 328.48rpx;
    position: absolute;
    right: 146.2rpx;
    top: 765.19rpx;
  }
  .font_2 {
    font-size: 45.57rpx;
    font-family: KingsoftCloud;
    line-height: 40.82rpx;
    color: #d24735;
  }
  .text_3 {
    position: absolute;
    right: 168.99rpx;
    top: 440.51rpx;
  }
  .text_5 {
    position: absolute;
    right: 174.68rpx;
    top: 517.41rpx;
  }
  .group_3 {
    padding-top: 53.16rpx;
    position: absolute;
    left: 0;
    right: 0;
    top: 866.77rpx;
  }
  .section_8 {
    padding-bottom: 248.73rpx;
    opacity: 0.8;
    background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63648eb5fe65f70012e7e999/16675345901340198222.png');
    background-position: 0% 0%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .section_7 {
    padding: 9.49rpx 0 7.59rpx;
    background-color: #fff4de;
    border-radius: 37.97rpx;
    width: 622.78rpx;
  }
  .section_9 {
    margin: 0 11.39rpx;
    background-color: #ffebc2;
    border-radius: 37.97rpx;
    height: 237.34rpx;
  }
  .section_6 {
    background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63648eb5fe65f70012e7e999/16675345919969617687.png');
    background-position: 0% 0%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 296.2rpx;
    position: absolute;
    left: 91.14rpx;
    right: 89.24rpx;
    top: 0;
  }
  .text-wrapper_2 {
    padding: 11.39rpx 0;
    background-color: #fff4de;
    border-radius: 9.49rpx;
    box-shadow: 0px 0px 9.49rpx 5.7rpx #00000040;
    width: 328.48rpx;
    position: absolute;
    top: 268.67rpx;
    left: 50%;
    transform: translateX(-50%);
  }
  .image_6 {
    width: 62.66rpx;
    height: 62.66rpx;
    position: absolute;
    left: 75.95rpx;
    top: 54.11rpx;
  }
  .image_7 {
    width: 62.66rpx;
    height: 62.66rpx;
    position: absolute;
    left: 75.95rpx;
    top: 223.1rpx;
  }
  .section_10 {
    background-color: #cccccc00;
    width: 598.1rpx;
    position: absolute;
    top: 54.11rpx;
    left: 50%;
    transform: translateX(-50%);
  }
  .space-y-58 > view:not(:first-child),
  .space-y-58 > text:not(:first-child),
  .space-y-58 > image:not(:first-child) {
    margin-top: 110.13rpx;
  }
</style>