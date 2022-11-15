<template>
 <view class="flex-col space-y-18 page">
   <view class="flex-row group">
     <image
       class="image"
       src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635646825a7e3f03100b3c41/6369c2cdf9b4a40011de4f01/16679828879459055625.png"
     />
     <view class="flex-col group_2">
       <text class="font_1 text"">当前位置：首页&gt;&gt;学院风采&gt;&gt;科研成果</text>
       <view class="section"></view>
     </view>
   </view>
   <view class="flex-col space-y-13 group_3" style="margin-top: 3rem;">
     <view class="flex-row justify-center group_4" >
       <image
         class="image_2"
         src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635646825a7e3f03100b3c41/6369c2cdf9b4a40011de4f01/16679820049614183363.png"
      style="margin-top: -4.5rem;"
       />
       <text class="text_2"  style="margin-top: -9rem;">科研成果</text>
     </view>
     <view class="flex-col space-y-12">
       <view class="flex-col space-y-18 list-item" :key="i" v-for="(item, i) in list_ueSIJn1A">
         <view class="flex-row justify-between">
           <text class="font_1 text_3">2020年度省科技进步奖</text>
           <text class="font_2 text_4">一等奖</text>
         </view>
         <text class="font_3 text_5">智能化集成化的机器学习云平台</text>
       </view>
     </view>
   </view>
 </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      list_ueSIJn1A: [null, null, null, null, null, null],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.space-y-18 {
  & > view:not(:first-child),
  & > text:not(:first-child),
  & > image:not(:first-child) {
    margin-top: 1.13rem;
  }
  .group {
    padding: 0 0.81rem;
    .image {
      width: 1.13rem;
      height: 1.5rem;
    }
    .group_2 {
      margin: 0.13rem 0 0.13rem 0.88rem;
      padding: 0.25rem 0 0.31rem;
      position: relative;
      .text {
        color: #383838;
        font-size: 0.75rem;
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
  .space-y-13 {
    & > view:not(:first-child),
    & > text:not(:first-child),
    & > image:not(:first-child) {
      margin-top: 0.81rem;
    }
    .group_4 {
      padding: 0.88rem 3.38rem 0.75rem;
      position: relative;
      .image_2 {
        position: absolute;
        left: 3.38rem;
        top: 50%;
        transform: translateY(-50%);
        width: 4.63rem;
        height: 2.69rem;
      }
      .text_2 {
        align-self: center;
        color: #ad0f1f;
        font-size: 1.13rem;
        font-family: SourceHanSansCN;
        font-weight: 700;
        line-height: 1.09rem;
      }
    }
    .space-y-12 {
      & > view:not(:first-child),
      & > text:not(:first-child),
      & > image:not(:first-child) {
        margin-top: 0.75rem;
      }
      .list-item {
        padding: 1.19rem 1.38rem 1.63rem;
        background-color: #ffffff;
        border-radius: 0.38rem;
        box-shadow: 0px 0.13rem 0.5rem #7878780a;
      }
    }
  }
  .group_3 {
    padding: 0 1.63rem;
  }
  .font_1 {
    font-size: 0.81rem;
    font-family: SourceHanSansCN;
    line-height: 0.75rem;
    color: #7b7b7b;
  }
  .text_3 {
    font-size: 0.88rem;
    line-height: 0.81rem;
  }
  .font_2 {
    font-size: 0.81rem;
    font-family: SourceHanSansCN;
    line-height: 0.75rem;
    color: #d43030;
  }
  .text_4 {
    margin-right: 0.31rem;
    margin-bottom: 0.063rem;
  }
  .font_3 {
    font-size: 1rem;
    font-family: SourceHanSansCN;
    line-height: 0.94rem;
    color: #010535;
  }
  .text_5 {
    align-self: flex-start;
  }
}
.page {
  padding-top: 0.94rem;
  background-color: #f4f4f4;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}
.space-y-18 {
  & > view:not(:first-child),
  & > text:not(:first-child),
  & > image:not(:first-child) {
    margin-top: 1.13rem;
  }
  .group {
    padding: 0 0.81rem;
    .image {
      width: 1.13rem;
      height: 1.5rem;
    }
    .group_2 {
      margin: 0.13rem 0 0.13rem 0.88rem;
      padding: 0.25rem 0 0.31rem;
      position: relative;
      .text {
        color: #383838;
        font-size: 0.75rem;
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
  .space-y-13 {
    & > view:not(:first-child),
    & > text:not(:first-child),
    & > image:not(:first-child) {
      margin-top: 0.81rem;
    }
    .group_4 {
      padding: 0.88rem 3.38rem 0.75rem;
      position: relative;
      .image_2 {
        position: absolute;
        left: 3.38rem;
        top: 50%;
        transform: translateY(-50%);
        width: 4.63rem;
        height: 2.69rem;
      }
      .text_2 {
        align-self: center;
        color: #ad0f1f;
        font-size: 1.13rem;
        font-family: SourceHanSansCN;
        font-weight: 700;
        line-height: 1.09rem;
      }
    }
    .space-y-12 {
      & > view:not(:first-child),
      & > text:not(:first-child),
      & > image:not(:first-child) {
        margin-top: 0.75rem;
      }
      .list-item {
        padding: 1.19rem 1.38rem 1.63rem;
        background-color: #ffffff;
        border-radius: 0.38rem;
        box-shadow: 0px 0.13rem 0.5rem #7878780a;
      }
    }
  }
  .group_3 {
    padding: 0 1.63rem;
  }
  .font_1 {
    font-size: 0.81rem;
    font-family: SourceHanSansCN;
    line-height: 0.75rem;
    color: #7b7b7b;
  }
  .text_3 {
    font-size: 0.88rem;
    line-height: 0.81rem;
  }
  .font_2 {
    font-size: 0.81rem;
    font-family: SourceHanSansCN;
    line-height: 0.75rem;
    color: #d43030;
  }
  .text_4 {
    margin-right: 0.31rem;
    margin-bottom: 0.063rem;
  }
  .font_3 {
    font-size: 1rem;
    font-family: SourceHanSansCN;
    line-height: 0.94rem;
    color: #010535;
  }
  .text_5 {
    align-self: flex-start;
  }
}
</style>