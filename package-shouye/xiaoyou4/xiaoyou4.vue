<template>
  <view class="flex-col page">
    <image
      class="image"
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635646825a7e3f03100b3c41/6369c2cdf9b4a40011de4f01/16679820049749163892.png"
    />
    <view class="flex-row space-x-14 group">
      <image
        class="image_2"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635646825a7e3f03100b3c41/6369c2cdf9b4a40011de4f01/16679828879459055625.png"
      />
      <view class="flex-col group_2">
        <text class="text">当前位置：首页&gt;&gt;校友风采&gt;&gt;刘旭</text>
        <view class="section"></view>
        <view class="section_2"></view>
      </view>
    </view>
    <view class="flex-row space-x-17 group_3">
      <image
        class="image_3"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635646825a7e3f03100b3c41/6369c2cdf9b4a40011de4f01/16679820049614183363.png"
      />
      <text class="text_2">刘 旭</text>
    </view>
    <view class="flex-col group_4">
      <view class="flex-col items-center text-wrapper">
        <text class="text_3">
          1978年入福州大学数学系计算机软件专业学习，1987年考取中科院数学所计算机软件专业硕士研究生，毕业后至1993年工作于中国科学院数学所计算机科学室。1995年被中科院软件所评为高级工程师。曾任“国家863计划反计算机入侵和防病毒研究中心”专家委员会专家。1989年，荣获福建省科技进步奖三等奖；1992年，荣获北京地区优秀软件一等奖；1993年，荣获中国科学院科技进步奖二等奖及北京市科技进步奖二等奖；荣获
          “1999年中国IT十大风云人物”提名奖和“2000年中国IT十大风云人物”提名奖；2002年，被评为北京市第五届“科技之光”优秀企业家。
        </text>
      </view>
      <image
        class="image_4"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635646825a7e3f03100b3c41/6369c2cdf9b4a40011de4f01/16680149503080946483.png"
      />
    </view>
    <view class="section_3"></view>
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

<style lang="scss">
  .page {
    background-color: #ffffff;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    .image {
      width: 24.69rem;
      height: 2.62rem;
    }
    .space-x-14 {
      & > view:not(:first-child),
      & > text:not(:first-child),
      & > image:not(:first-child) {
        margin-left: 0.88rem;
      }
      .image_2 {
        width: 1.13rem;
        height: 1.5rem;
      }
      .group_2 {
        margin-bottom: 0.13rem;
        padding: 0.31rem 0;
        position: relative;
        .text {
          color: #383838;
          font-size: 0.75rem;
          font-family: SourceHanSansCN;
          line-height: 0.69rem;
        }
        .section {
          background-color: #cccccc00;
          width: 1.88rem;
          height: 1.25rem;
          position: absolute;
          left: 3.41rem;
          top: 0;
        }
        .section_2 {
          background-color: #cccccc00;
          width: 2.94rem;
          height: 1.25rem;
          position: absolute;
          right: 2.97rem;
          top: 0;
        }
      }
    }
    .group {
      margin-top: 0.63rem;
      padding: 0 1.63rem;
    }
    .space-x-17 {
      & > view:not(:first-child),
      & > text:not(:first-child),
      & > image:not(:first-child) {
        margin-left: 1.06rem;
      }
      .image_3 {
        width: 4.63rem;
        height: 2.69rem;
      }
      .text_2 {
        margin-top: 1rem;
        color: #000000;
        font-size: 1.13rem;
        font-family: SourceHanSansCN;
        line-height: 1.06rem;
      }
    }
    .group_3 {
      margin-top: 0.31rem;
      padding: 0 5.38rem;
    }
    .group_4 {
      margin-top: 1rem;
      padding-top: 11.56rem;
      position: relative;
      .text-wrapper {
        padding: 10.81rem 0 1rem;
        opacity: 0.3;
        background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635646825a7e3f03100b3c41/6369c2cdf9b4a40011de4f01/16679828879290246498.png');
        background-position: 0% 0%;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        .text_3 {
          color: #000000;
          font-size: 0.88rem;
          font-family: SourceHanSansCN;
          line-height: 1.06rem;
          word-break: break-all;
          text-indent: 1.63rem;
          width: 21rem;
        }
      }
      .image_4 {
        width: 16.19rem;
        height: 20.69rem;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .section_3 {
      background-color: #ad0e1e;
      height: 4.06rem;
    }
  }
</style>