<template>

		

		<view class="flex-row justify-center list-item" style="position: relative;">

		   	   <view class="switch"  @click="openzl" style="background-color: #db9f9c;"><text style="font-size: 1.3rem;color: white;margin-left: 23%;position: absolute;top: 40rpx;">{{classmate.name.substr(-2,2)}}</text></view>
		  <view class="flex-col items-start space-y-15 group_2"  @click="openzl" style=" width: 55%; margin-left: 3rem;">
		
		    <text class="font_2" >{{classmate.name}}</text>
		    <text class="font_3">学号：{{classmate.sid}}</text>
		    <text class="font_3 text_2" >email：{{classmate.email}}</text>
		  </view>
		  <image
		    class="image_2"
		    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16670441323576679658.png"
		  @click="openzl"
		  />

		  <!-- 弹出层视图，注意这里的ref="popup"，这里背景特意标红了，方便看到效果 -->
		  <uni-popup ref="popupzl" type="dialog" >
			  <view style="background-color: whitesmoke; width: 18rem; height: 27rem; border-radius: 25px;" @click="closezl">
			<my-information :classmate="classmate"></my-information>
			  </view>

		  </uni-popup>
	
		
		  	</view>

</template>

<script>




export default {
  components:
  {
	      
  },
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
            str:''
	  };
  },
  methods: {
	     
		openzl()
			{
				this.$refs['popupzl'].open();
				
			},
			closezl()
			{
		     	this.$refs['popupzl'].close();
			}
  },
};
</script>

<style lang="scss">
.list-item {
  padding: 1.88rem 1.06rem 1.56rem 1.69rem;
  background-color: #fceeed;
  border-radius: 0.94rem;
  position: relative;
  .switch {
    background-color: #ffffff;
    border-radius: 50%;
    position: absolute;
    left: 1.69rem;
    top: 50%;
    transform: translateY(-50%);
    width: 4.75rem;
    height: 4.75rem;
  }
  .space-y-15 {
    & > view:not(:first-child),
    & > text:not(:first-child),
    & > image:not(:first-child) {
      margin-top: 0.94rem;
    }
    .font_2 {
      font-size: 0.94rem;
      font-family: HarmonyOSSansSC;
      line-height: 0.88rem;
      font-weight: 700;
      color: #333333;
    }
    .font_3 {
      font-size: 0.75rem;
      font-family: HarmonyOSSansSC;
      line-height: 0.69rem;
      color: #999999;
    }
    .text_2 {
      margin-left: 0.063rem;
    }
  }
  .group_2 {
    align-self: center;
  }
  .image_2 {
    position: absolute;
    right: 1.06rem;
    top: 1.38rem;
    width: 1.94rem;
    height: 1.56rem;
  }
}
</style>
