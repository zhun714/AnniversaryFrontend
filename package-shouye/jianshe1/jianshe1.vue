<template>
<view class="flex-col space-y-25 page">
  <view class="flex-col">
    <image
      class="image"
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635646825a7e3f03100b3c41/6369c2cdf9b4a40011de4f01/16679820049749163892.png"
    />
    <view class="flex-row">
      <view class="flex-col items-center text-wrapper" @click="gotoxueyuan()"><text class="font_1">学院简介</text></view>
      <view class="flex-col items-center text-wrapper_2"><text class="font_1">学科建设</text></view>
      <view class="flex-col items-center text-wrapper" @click="gotokeyan()"><text class="font_1">科研成果</text></view>
    </view>
    <view class="flex-row group">
      <image
        class="image_2"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635646825a7e3f03100b3c41/6369c2cdf9b4a40011de4f01/16679828879459055625.png"
      />
      <view class="flex-col group_2">
        <text class="font_2 text">当前位置：首页&gt;&gt;学院风采&gt;&gt;学科建设</text>
        <view class="section"></view>
      </view>
    </view>
    <view class="flex-col group_3">
      <view class="flex-row group_4">
        <view class="section_2"></view>
        <text class="font_3 text_2">计算机科学与技术</text>
      </view>
      <view class="flex-col items-start text-wrapper_3" @click="gotojianshe2()"><text class="font_3 text_3">软件工程</text></view>
    </view>
  </view>
  <view class="flex-col group_5">
    <view class="flex-col space-y-4 section_3">
      <text class="font_2 text_4">
        福州大学计算机科学与技术专业起步于1977年的计算机技术专业和软件专业，2003年获批工程硕士（计算机技术领域）专业学位授予点，2006年获批“计算机科学与技术”一级学科硕士学位授予点，2016年获批“计算机科学与技术”一级学科博士学位授予点，本学科多次列入国家“211工程”重点学科建设项目，并列入福建省“双一流”建设学科（高峰学科），2020年3月，福州大学“计算机科学”新增进入ESI全球排名前1%。本学科立足学科前沿，围绕服务国家和地方经济社会发展需求，组建特色学科平台与学科团队、凝练特色学科方向、发挥特色学科优势，在提高服务社会贡献率方面持续进行探索与实践，取得了较大成效，为福建省经济社会发展和“数字福建”战略做出了巨大贡献。
      </text>
      <text class="font_2 text_5">
        本学科已形成数据挖掘、智能信息处理、网络信息安全、网络与分布式系统等四个特色优势学科方向，拥有卫星空间信息技术综合应用国家地方联合工程研究中心、空间数据挖掘与信息共享教育部重点实验室、数字福建大数据基础技术研究院等9个国家级和省部级科研平台，以及网络信息安全与计算机技术国家级实验教学示范中心等3个国家级和省级实验教学示范中心。本学科拥有一支为数80人的师德优良、学术水平高、梯队结构合理、符合要求的专任教师队伍，其中教授25名、副教授32名，具有博士学位的61名。近5年，本学科师生聚焦国家和福建省重大需求开展科学研究，主持国家自然科学基金38项，发表SCI论文200余篇，其中，在CCF
        A类和中科院1区期刊上发表论文50余篇，产出一批重要的研究成果，获得省部级一等奖3项、二等奖2项、三等奖4项。
      </text>
    </view>
    <view class="flex-col items-start group_6">
      <image
        class="image_3"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635646825a7e3f03100b3c41/6369c2cdf9b4a40011de4f01/16680152735520639389.png"
      />
      <text class="font_2 text_6">
        本学科以培养德智体美劳全面发展的社会主义建设者和接班人为目标，努力提升人才培养质量。通过扩大宣传力度和制定激励政策来确保生源质量，本学科录取的硕士研究生60%来自于985或211学校，博士研究生达到85%。本学科高度重视研究生培养过程，为研究生设置结构合理的课程体系,以“课赛结合”为抓手强化课程实践；在严格的研究生导师遴选、考核基础上，以导师团队指导的方式，提升研究生培养质量。本学科在国内外学科竞赛中取得优异成绩，其中，集成电路辅助设计团队连续三年获得ICCAD竞赛全球第一名，超算团队连续两年获得ASC全球总决赛一等奖，ACM团队先后九次晋级ACM全球总决赛（2018年全球第14名）。
      </text>
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
      gotojianshe2(){
        uni.navigateTo({
          url:'/package-shouye/jianshe2/jianshe2'
        })
      },
      gotokeyan(){
        uni.navigateTo({
          url:'/package-shouye/keyan/keyan'
        })
      },
      gotoxueyuan(){
        uni.navigateTo({
          url:'/package-shouye/xueyuan/xueyuan'
        })
      }
    },
  };
  

  
  
</script>


<style lang="scss">
  .space-y-25 {
    & > view:not(:first-child),
    & > text:not(:first-child),
    & > image:not(:first-child) {
      margin-top: 1.56rem;
    }
    .image {
      width: 24.69rem;
      height: 2.62rem;
    }
    .text-wrapper {
      flex: 1 1 8.19rem;
      padding: 1rem 0;
      background-color: #d47d71;
      height: 3.06rem;
    }
    .text-wrapper_2 {
      padding: 1rem 0;
      flex: 1 1 8.19rem;
      background-color: #d24735;
      height: 3.06rem;
    }
    .font_1 {
      font-size: 1.13rem;
      font-family: YOUSHEhaoshenti;
      line-height: 1.06rem;
      color: #ffffff;
    }
    .group {
      margin-top: 0.88rem;
      padding: 0 0.81rem;
      .image_2 {
        width: 1.13rem;
        height: 1.5rem;
      }
      .group_2 {
        margin: 0.13rem 0 0.13rem 0.88rem;
        padding: 0.25rem 0 0.31rem;
        position: relative;
        .text {
          color: #383838;
          line-height: 0.69rem;
        }
        .section {
          background-color: #cccccc00;
          width: 1.88rem;
          height: 1.25rem;
          position: absolute;
          left: 3.47rem;
          top: 0;
        }
      }
    }
    .group_3 {
      margin-top: 0.81rem;
      padding: 0 1.44rem;
      .group_4 {
        padding-bottom: 0.38rem;
        .section_2 {
          background-color: #d24735;
          width: 0.63rem;
          height: 1.5rem;
        }
        .text_2 {
          margin: 0.19rem 0 0.13rem 0.69rem;
          color: #000000;
        }
      }
      .text-wrapper_3 {
        margin-left: 1.25rem;
        padding: 0.13rem 0 0.5rem;
        align-self: flex-start;
        background-color: #cccccc00;
        .text_3 {
          color: #d1d1d1;
        }
      }
      .font_3 {
        font-size: 1.25rem;
        font-family: SourceHanSansCN;
        line-height: 1.19rem;
        font-weight: 700;
      }
    }
    .group_5 {
      padding-left: 1.44rem;
      padding-right: 0.94rem;
      .space-y-4 {
        & > view:not(:first-child),
        & > text:not(:first-child),
        & > image:not(:first-child) {
          margin-top: 0.25rem;
        }
        .text_4 {
          text-indent: 1.34rem;
        }
        .text_5 {
          text-indent: 1.38rem;
        }
      }
      .section_3 {
        background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635646825a7e3f03100b3c41/6369c2cdf9b4a40011de4f01/16680152735489632083.png');
        background-position: 100% 64.5%;
        background-size: 42% 37.5%;
        background-repeat: no-repeat;
      }
      .group_6 {
        margin-right: 0.63rem;
        padding: 0.69rem 0 2.25rem;
        position: relative;
        .image_3 {
          margin-left: 0.63rem;
          width: 9.38rem;
          height: 7.88rem;
        }
        .text_6 {
          text-indent: 1.38rem;
          position: absolute;
          left: 0;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
    .font_2 {
      font-size: 0.75rem;
      font-family: SourceHanSansCN;
      line-height: 0.88rem;
      color: #000000;
    }
  }
  .page {
    padding-bottom: 0.13rem;
    background-color: #f5f5f5;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
</style>