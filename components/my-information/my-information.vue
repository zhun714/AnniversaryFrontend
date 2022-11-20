<template>
	<view >
		<view class="flex-col section_5">

		  <view class="section_7"></view>
		  <view class="flex-col items-center space-y-18 group_4 view_3">
		    <text class="text_2">{{classmate.name}}</text>
		    <text class="font_2 text_3">{{classmate.sid}}</text>
		  </view>
		  <view class="flex-col space-y-6 group_4 view_5">
		    <view class="flex-row space-x-12">
		      <image
		        class="image_4"
		        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16679098327000888584.png"
		      />
		      <text class="text_4">abc</text>
		    </view>
		    <view class="flex-row space-x-15">
		      <image
		        class="image_5"
		        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16679098327034347153.png"
		      />
		      <text class="font_2 text_5">{{classmate.email}}</text>
		    </view>
		  </view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"my-information",
		props:
		{
			  classmate:
			  {
				  type: Object,
				  default:
				  {
					  
				  },
			  }
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.section_5 {
  padding: 3.5rem 1.69rem 1.63rem;
  background-color: #fcefed;
  border-radius: 0.94rem;
  width: 18.44rem;
  height: 27.56rem;
  position: relative;
  .image_2 {
    width: 1.38rem;
    height: 1.38rem;
    position: absolute;
    right: 1.38rem;
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
  .group_4 {
    position: relative;
  }
  .view_3 {
    margin-top: 1.5rem;
  }
  .space-y-6 {
    & > view:not(:first-child),
    & > text:not(:first-child),
    & > image:not(:first-child) {
      margin-top: 0.38rem;
    }
    .space-x-12 {
      & > view:not(:first-child),
      & > text:not(:first-child),
      & > image:not(:first-child) {
        margin-left: 0.75rem;
      }
      .image_4 {
        width: 1.88rem;
        height: 1.94rem;
      }
      .text_4 {
        align-self: center;
        color: #a6a6a6;
        font-size: 0.88rem;
        font-family: HarmonyOSSansSC;
        line-height: 0.69rem;
      }
    }
    .space-x-15 {
      & > view:not(:first-child),
      & > text:not(:first-child),
      & > image:not(:first-child) {
        margin-left: 0.94rem;
      }
      .image_5 {
        width: 1.69rem;
        height: 1.63rem;
      }
      .text_5 {
        align-self: center;
        line-height: 0.75rem;
      }
    }
  }
  .view_5 {
    margin-top: 7.5rem;
  }
  .font_2 {
    font-size: 0.75rem;
    font-family: HarmonyOSSansSC;
    line-height: 0.69rem;
    color: #999999;
  }
}
</style>