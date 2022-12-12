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
        <text class="text">当前位置：首页&gt;&gt;校友风采&gt;&gt;郑文明</text>
        <view class="section"></view>
        <view class="section_2"></view>
      </view>
    </view>
    <view class="flex-row justify-center group_3">
      <image
        class="image_3"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635646825a7e3f03100b3c41/6369c2cdf9b4a40011de4f01/16679820049614183363.png"
      />
      <text class="text_2">郑文明</text>
    </view>
    <view class="group_4">
      <view class="flex-col section_4"><view class="section_5"></view></view>
      <view class="section_3"></view>
      <text class="text_3">
        1997年7月毕业于福州大学计算机科学系，获工学学士学位，
        2004年9月毕业于东南大学无线电工程系，获工学博士学位，其博士学位论文获江苏省优秀博士论文奖。2004年11月任职于东南大学学习科学研究中心，任情感信息处理研究室负责人，2005年4月破格晋升副教授，2006年1月获硕士生导师资格，2007年3月获博士生导师资格，2007年6月被东南大学聘为教授。他是2005年教育部“新世纪优秀人才支持计划”获得者、2006年教育部与微软亚洲研究院联合举办的“首届微软青年教授奖”七位获奖者之一、东南大学优秀青年教师支持计划获得者。担任IEEE
        Transactions on PAMI、IEEE Transactions on Neural
        Networks等多种国际期刊和会议的审稿专家，主持国家自然科学基金、江苏省自然科学基金（青年创新人才）等多个项目。
      </text>
      <image
        class="image_4"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635646825a7e3f03100b3c41/6369c2cdf9b4a40011de4f01/16680149503101944390.png"
      />
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
          left: 3.59rem;
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
      height: 41.16rem;
      position: relative;
      .section_4 {
        padding-top: 0.19rem;
        background-color: #ffffff;
        position: absolute;
        left: 0;
        right: 0;
        top: 36.88rem;
        .section_5 {
          background-color: #ad0e1e;
          height: 4.06rem;
        }
      }
      .section_3 {
        opacity: 0.3;
        background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635646825a7e3f03100b3c41/6369c2cdf9b4a40011de4f01/16679828879290246498.png');
        background-position: 0% 0%;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        width: 24.69rem;
        height: 25.5rem;
        position: absolute;
        left: 0;
        right: 0;
        top: 11.56rem;
      }
      .text_3 {
        color: #000000;
        font-size: 0.88rem;
        font-family: SourceHanSansCN;
        line-height: 1.06rem;
        text-indent: 1.63rem;
        width: 21.44rem;
        position: absolute;
        right: 1.41rem;
        top: 22.38rem;
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
  }
</style>