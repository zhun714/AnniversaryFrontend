<template>
  <view class="flex-col page">
    <view class="flex-col space-y-18 group">
      <view class="flex-col space-y-4 group_2">
        <view class="flex-col items-end space-y-77 section">
          <view class="section_2"></view>
          <text class="text">1982-2022</text>
        </view>
        <text class="font_1 text_2">福州大学</text>
        <text class="font_1 text_3">计算机与大数据学院/软件学院</text>
        <text class="font_1 text_4">40周年院庆</text>
      </view>
      <view class="flex-col group_3">
        <view class="section_3"></view>
        <view class="grid">
          <view class="flex-col items-center space-y-16 grid-item" @click="changetoyuncanguan()">
            <image
              class="image"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63648eb5fe65f70012e7e999/1d847b7cd41126d634ec15cebfe527e2.png"
            />
            <text class="font_2">云参观</text>
          </view>
          <view class="flex-col items-center space-y-16 grid-item" @click="changetoyunheying()">
            <image
              class="image"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63648eb5fe65f70012e7e999/bbdf6c89636cccdee325bd3288ed47a0.png"
            />
            <text class="font_2">云合影</text>
          </view>
          <view class="flex-col items-center space-y-16 grid-item" @click="changetojiemudan()">
            <image
              class="image"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63648eb5fe65f70012e7e999/844d497dffbac8c4fa69e07a004d0a81.png"
            />
            <text class="font_2">节目单</text>
          </view>
          <view class="flex-col items-center space-y-16 grid-item" @click="changetoyunzhufu()">
            <image
              class="image"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63648eb5fe65f70012e7e999/2d5eabdeca187948c307b631e7692274.png"
            />
            <text class="font_2">云祝福</text>
          </view>
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
		changetojiemudan(){
			uni.navigateTo({
				url:'/package-huodong/jiemudan/jiemudan'
			})
		},
		changetoyunheying(){
			uni.navigateTo({
				url:'/package-huodong/yunheying/yunheying'
			})
		},
		changetoyunzhufu(){
			uni.navigateTo({
				url:'/package-huodong/yunzhufu/yunzhufu'
			})
			uni.createSelectorQuery().select("text[class='font_4 text_18']").boundingClientRect(data=>{//目标节点、也可以是最外层的父级节点
			
			　　uni.createSelectorQuery().select("view[class='flex-row group_13']").boundingClientRect((res)=>{//最外层盒子节点
			　　
			　　　　uni.pageScrollTo({
			　　　　
			　　　　　　duration:0,//过渡时间必须为0，uniapp bug，否则运行到手机会报错
			　　　　　　
			　　　　　　scrollTop:res.top - data.top,//滚动到实际距离是元素距离顶部的距离减去最外层盒子的滚动距离
			　　　　　　
			　　　　})
			　　　　
			　　}).exec()
			　　
			}).exec()

		},
		changetoyuncanguan(){
			uni.navigateTo({
				url:'/package-huodong/yuncanguan/yuncanguan'
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
    padding-top: 56.96rpx;
    flex: 1 1 auto;
    overflow-y: auto;
  }
  .space-y-18 > view:not(:first-child),
  .space-y-18 > text:not(:first-child),
  .space-y-18 > image:not(:first-child) {
    margin-top: 34.18rpx;
  }
  .group_2 {
    padding: 0 132.91rpx;
  }
  .space-y-4 > view:not(:first-child),
  .space-y-4 > text:not(:first-child),
  .space-y-4 > image:not(:first-child) {
    margin-top: 7.59rpx;
  }
  .section {
    margin-right: 3.8rpx;
    padding: 186.08rpx 15.19rpx 18.99rpx;
    background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63648eb5fe65f70012e7e999/16675345901366266238.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
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
  .text {
    margin-right: 11.39rpx;
    color: #ffffff;
    font-size: 37.97rpx;
    font-family: PangMenZhengDao;
    line-height: 25.63rpx;
  }
  .font_1 {
    font-size: 26.58rpx;
    font-family: PangMenZhengDao;
    line-height: 34.18rpx;
    color: #ffffff;
  }
  .text_2 {
    margin-right: 34.18rpx;
    align-self: flex-end;
    line-height: 32.28rpx;
  }
  .text_3 {
    margin-right: 37.97rpx;
    align-self: flex-end;
    line-height: 32.28rpx;
  }
  .text_4 {
    margin-right: 39.87rpx;
    align-self: flex-end;
    line-height: 32.28rpx;
  }
  .group_3 {
    padding-top: 296.2rpx;
    position: relative;
  }
  .section_3 {
    opacity: 0.8;
    background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63648eb5fe65f70012e7e999/16675345901340198222.png');
    background-position: 0% 0%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 491.77rpx;
  }
  .grid {
    height: 645.57rpx;
    position: absolute;
    left: 47.47rpx;
    right: 49.37rpx;
    top: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .grid-item {
    padding: 34.18rpx 0;
  }
  .space-y-16 > view:not(:first-child),
  .space-y-16 > text:not(:first-child),
  .space-y-16 > image:not(:first-child) {
    margin-top: 30.38rpx;
  }
  .image {
    width: 191.77rpx;
    height: 191.77rpx;
  }
  .font_2 {
    font-size: 37.97rpx;
    font-family: KingsoftCloud;
    line-height: 34.18rpx;
    color: #ffffff;
  }
  .tab-bar {
    padding: 18.99rpx 39.87rpx 9.49rpx;
    background-color: #f7f7f7;
    border: solid 1.9rpx #e5e5e5;
  }
  .group_4 {
    width: 93.04rpx;
    height: 91.14rpx;
  }
  .image_2 {
    width: 54.11rpx;
    height: 54.11rpx;
  }
  .font_3 {
    font-size: 22.78rpx;
    font-family: SourceHanSansCN;
    line-height: 20.89rpx;
    color: #000000;
  }
  .group_5 {
    height: 91.14rpx;
  }
  .space-y-8 > view:not(:first-child),
  .space-y-8 > text:not(:first-child),
  .space-y-8 > image:not(:first-child) {
    margin-top: 15.19rpx;
  }
  .text_5 {
    color: #d24735;
  }
  .group_6 {
    margin-right: 7.59rpx;
    width: 93.04rpx;
    height: 93.04rpx;
  }
  .space-y-10 > view:not(:first-child),
  .space-y-10 > text:not(:first-child),
  .space-y-10 > image:not(:first-child) {
    margin-top: 18.99rpx;
  }
</style>