<template>
<view class="flex-col page">
  <view class="flex-col section">
    <view class="flex-col space-y-10 section_2">
      <image
        class="image"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16670441323665360024.png"
      />
      <view class="flex-row justify-between">
        <view class="flex-col items-start space-y-4 group">
          <text class="font_1">我的班级：</text>
          <text class="font_1">2020级计算机5班</text>
        </view>
        <view class="flex-col items-center text-wrapper"><text class="text">退出班级</text></view>
      </view>
    </view>
  </view>
  <view class="flex-col space-y-15 group_2">
    <view class="flex-col items-start section_4"><view class="section_6 view"></view></view>
    <view class="flex-col items-start section_8"><view class="section_6 view_2"></view></view>
    <view class="flex-col items-start section_9"><view class="section_6 view_4"></view></view>
    <view class="flex-row justify-between section_10">
      <view class="section_6"></view>
      <view class="flex-col items-start space-y-15 group_4">
        <text class="font_3">周嘉晟</text>
        <text class="font_2">学号：032002522</text>
        <text class="font_2 text_6">电话：12456</text>
      </view>
    </view>
    <view class="flex-row justify-between section_11">
      <view class="section_6"></view>
      <view class="flex-col items-start space-y-15 group_4">
        <text class="font_3">周嘉晟</text>
        <text class="font_2">学号：032002522</text>
        <text class="font_2 text_6">电话：12456</text>
      </view>
    </view>
  </view>
  <view class="flex-row justify-center space-x-17 section_3">
    <view class="flex-col section_5" >
      <image
        class="image_2"
		  @click="gotoclass()"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16670444010361731123.png"
       
	  />
      <view class="section_7"></view>
      <view class="flex-col items-center space-y-18 group_3 view_3">
        <text class="text_2">周嘉晟</text>
        <text class="font_2 text_3">032002522</text>
      </view>
      <view class="flex-col items-start space-y-12 group_3 view_5">
        <text class="text_4">123456（手机号）</text>
        <text class="font_2 text_5">1246511834@qq.com</text>
      </view>
    </view>
    <image
      class="image_3"
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16670444010422005455.png"
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
	  methods: {
		  gotoclass()
		  {
			  console.log(1),
			  uni.navigateTo({
			  	url:'/package-banji/in_class/in_class'
			  })
		  }
	  },
	};
</script>

<style lang="scss">
	.page {
	  padding-bottom: 5.63rem;
	  background-color: #f2f2f2;
	  width: 100%;
	  overflow-y: auto;
	  overflow-x: hidden;
	  height: 100%;
	  position: relative;
	  .section {
	    background-color: #f2f2f2;
	    filter: drop-shadow(0px 0.13rem 0.13rem #00000040) blur(0.024rem);
	    background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16670441323627341069.png');
	    background-size: 100% 100%;
	    background-repeat: no-repeat;
	    .space-y-10 {
	      & > view:not(:first-child),
	      & > text:not(:first-child),
	      & > image:not(:first-child) {
	        margin-top: 0.63rem;
	      }
	      .image {
	        align-self: flex-end;
	        width: 3.06rem;
	        height: 3.06rem;
	      }
	      .space-y-4 {
	        & > view:not(:first-child),
	        & > text:not(:first-child),
	        & > image:not(:first-child) {
	          margin-top: 0.25rem;
	        }
	        .font_1 {
	          font-size: 1.13rem;
	          font-family: SourceHanSansCN;
	          line-height: 1.38rem;
	          font-weight: 700;
	          color: #ffffff;
	        }
	      }
	      .group {
	        margin-bottom: 0.25rem;
	      }
	      .text-wrapper {
	        margin-top: 1.5rem;
	        padding: 0.5rem 0 0.38rem;
	        background-color: #f2efef;
	        border-radius: 0.38rem;
	        box-shadow: 0px 0.13rem 0.25rem #00000040;
	        width: 4.69rem;
	        height: 1.69rem;
	        .text {
	          color: #ad0f1f;
	          font-size: 0.88rem;
	          font-family: SourceHanSansCN;
	          font-weight: 700;
	          line-height: 0.84rem;
	        }
	      }
	    }
	    .section_2 {
	      padding: 0.56rem 0.63rem 0.63rem 0.75rem;
	      background-color: #d1463499;
	    }
	  }
	  .space-y-15 {
	    & > view:not(:first-child),
	    & > text:not(:first-child),
	    & > image:not(:first-child) {
	      margin-top: 0.94rem;
	    }
	    .section_4 {
	      padding: 1.44rem 0 1.38rem;
	      background-color: #fceeed;
	      border-radius: 0.94rem;
	      .view {
	        margin-left: 1.69rem;
	      }
	    }
	    .section_8 {
	      padding: 1.44rem 0 1.38rem;
	      background-color: #fcf9f4;
	      border-radius: 0.94rem;
	      .view_2 {
	        margin-left: 1.69rem;
	      }
	    }
	    .section_6 {
	      background-color: #ffffff;
	      border-radius: 50%;
	      width: 4.75rem;
	      height: 4.75rem;
	    }
	    .section_9 {
	      padding: 1.44rem 0 1.38rem;
	      background-color: #fcefed;
	      border-radius: 0.94rem;
	      .view_4 {
	        margin-left: 1.69rem;
	      }
	    }
	    .section_10 {
	      padding: 1.44rem 1.69rem 1.38rem;
	      background-color: #fcfaf5;
	      border-radius: 0.94rem;
	    }
	    .font_3 {
	      font-size: 0.94rem;
	      font-family: HarmonyOSSansSC;
	      line-height: 0.88rem;
	      font-weight: 700;
	      color: #333333;
	    }
	    .text_6 {
	      margin-left: 0.063rem;
	    }
	    .section_11 {
	      padding: 1.44rem 1.69rem 1.38rem;
	      background-color: #fcefed;
	      border-radius: 0.94rem;
	    }
	    .group_4 {
	      align-self: center;
	      width: 12.97rem;
	    }
	  }
	  .group_2 {
	    margin-top: 0.94rem;
	    padding: 0 0.63rem;
	  }
	  .space-x-17 {
	    & > view:not(:first-child),
	    & > text:not(:first-child),
	    & > image:not(:first-child) {
	      margin-left: 1.06rem;
	    }
	    .section_5 {
	      padding: 3.5rem 1.44rem 3.38rem;
	      background-color: #fcefed;
	      border-radius: 0.94rem;
	      width: 18.44rem;
	      height: 27.56rem;
	      position: relative;
	      .image_2 {
	        width: 1.38rem;
	        height: 1.38rem;
	        position: absolute;
	        right: 1.44rem;
	        top: 1.13rem;
	      }
	      .section_7 {
	        align-self: center;
	        background-color: #ffffff;
	        border-radius: 50%;
	        width: 6.56rem;
	        height: 6.56rem;
	        position: relative;
	      }
	      .space-y-18 {
	        & > view:not(:first-child),
	        & > text:not(:first-child),
	        & > image:not(:first-child) {
	          margin-top: 1.13rem;
	        }
	        .text_2 {
	          color: #333333;
	          font-size: 1.25rem;
	          font-family: HarmonyOSSansSC;
	          font-weight: 700;
	          line-height: 1.16rem;
	        }
	        .text_3 {
	          line-height: 0.56rem;
	        }
	      }
	      .group_3 {
	        position: relative;
	      }
	      .view_3 {
	        margin-top: 1.5rem;
	      }
	      .space-y-12 {
	        & > view:not(:first-child),
	        & > text:not(:first-child),
	        & > image:not(:first-child) {
	          margin-top: 0.75rem;
	        }
	        .text_4 {
	          color: #5e5e5e;
	          font-size: 1.13rem;
	          font-family: HarmonyOSSansSC;
	          line-height: 1.06rem;
	        }
	        .text_5 {
	          line-height: 0.75rem;
	        }
	      }
	      .view_5 {
	        margin-top: 7.25rem;
	      }
	    }
	    .image_3 {
	      align-self: center;
	      width: 0.94rem;
	      height: 1.63rem;
	    }
	  }
	  .section_3 {
	    padding: 9.38rem 1.13rem 12.94rem 3.13rem;
	    background-color: #0000004d;
	    position: absolute;
	    left: 0;
	    right: 0;
	    top: 0;
	  }
	  .font_2 {
	    font-size: 0.75rem;
	    font-family: HarmonyOSSansSC;
	    line-height: 0.69rem;
	    color: #999999;
	  }
	}
</style>