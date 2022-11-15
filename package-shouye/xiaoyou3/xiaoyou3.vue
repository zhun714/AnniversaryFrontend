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
        <text class="text">当前位置：首页&gt;&gt;校友风采&gt;&gt;林方真</text>
        <view class="section"></view>
        <view class="section_2"></view>
      </view>
    </view>
    <view class="flex-row justify-center group_3">
      <image
        class="image_3"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635646825a7e3f03100b3c41/6369c2cdf9b4a40011de4f01/16679820049614183363.png"
      />
      <text class="text_2">林方真</text>
    </view>
    <view class="flex-col group_4">
      <view class="flex-col items-center text-wrapper">
        <text class="text_3">
          1979年入福州大学数学系软件专业学习；1991年毕业于美国著名大学斯坦福大学计算机系，获博士学位。他在人工智能领域达到国际领先水平。在国际高级别的学术刊物上发表了100多篇高水平的论文。他研发的软件系统Planner
          R,ASSAT(SAT-based system for computing answer sets of a logic program)，CCP(Compiles a causal theoryto
          STRIPS-like systems)
          获得国际同行的很高评价。林方真博士还担任过美国人工智能年会高级评委等一系列重要的国际学术职务。
        </text>
      </view>
      <image
        class="image_4"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635646825a7e3f03100b3c41/6369c2cdf9b4a40011de4f01/16680149503045102506.png"
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
          right: 3.66rem;
          top: 0;
        }
      }
    }
    .group {
      margin-top: 0.63rem;
      padding: 0 1.63rem;
    }
    .group_3 {
      margin-top: 0.31rem;
      padding: 1rem 5.38rem 0.63rem;
      position: relative;
      .image_3 {
        position: absolute;
        left: 5.38rem;
        top: 50%;
        transform: translateY(-50%);
        width: 4.63rem;
        height: 2.69rem;
      }
      .text_2 {
        align-self: center;
        color: #000000;
        font-size: 1.13rem;
        font-family: SourceHanSansCN;
        line-height: 1.06rem;
      }
    }
    .group_4 {
      margin-top: 1rem;
      padding-top: 11.56rem;
      position: relative;
      .text-wrapper {
        padding: 10.81rem 0 2.25rem;
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
          width: 21.44rem;
        }
      }
      .image_4 {
        width: 16.19rem;
        height: 20.63rem;
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