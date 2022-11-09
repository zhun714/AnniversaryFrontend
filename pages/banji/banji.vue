<template>
<view class="flex-col space-y-6 page" >
  <view class="flex-col space-y-13 group">
    <text class="text">我加入的</text>
    <view class="flex-col space-y-19">

      <view class="flex-col list-item" >
        <view class="flex-col items-start section" v-if="degree_bk&& !token" @click="gotoclass()">
          <text class="font_1 text_2">2020级本科计算机5班</text>
          <image
            class="image"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16678750158823721052.png"
          />
          <view class="flex-col items-center text-wrapper"><text class="font_2">退出班级</text></view>
        </view>
		
<view><text>\n</text></view>

	  <view class="flex-col items-start section" v-if="degree_ss&& !token" @click="gotoclass()">
	    <text class="font_1 text_2">2020级研究生计算机5班</text>
	    <image
	      class="image"
	      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16678750158823721052.png"
	    />
	    <view class="flex-col items-center text-wrapper"><text class="font_2">退出班级</text></view>
	  </view>

<view><text>\n</text></view>

	  <view class="flex-col items-start section" v-if="degree_bs&& !token" @click="gotoclass()">
	    <text class="font_1 text_2">2020级博士生计算机5班</text>
	    <image
	      class="image"
	      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16678750158823721052.png"
	    @click="gotoclass()"
		/>
	    <view class="flex-col items-center text-wrapper"><text class="font_2">退出班级</text></view>
	  </view>

      </view>
    </view>
  </view>
  
  <view class="flex-col items-center group_2">
    <image
      class="image_2"
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16678750158732364175.png"
    />
    <view class="flex-col items-center text-wrapper_2"><text class="text_3" @click="openbj">加入班级</text></view>
  </view>
  
   <!-- 弹出层视图，注意这里的ref="popup"，这里背景特意标红了，方便看到效果 -->
<uni-popup ref="popupDialog" type="dialog" >
	
   <view style="background-color: whitesmoke; width: 18rem; height: 30rem; border-radius: 25px;">
	   <my-degree ref="_degree"></my-degree>
   <view class="flex-row space-x-6 group_4">
     <view class="flex-col items-center text-wrapper_5" @click="goback()"><text class="font_2 text_12">取消</text></view>
     <view class="section_6"></view>
     <view class="flex-col items-center text-wrapper_4" @click="gointo()"><text class="font_2 text_13">加入</text></view>
   </view>
   </view>
		
		</uni-popup>



  
</view>
</template>

<script>

import{mapState,mapMutations}from 'vuex'

	export default {
		computed:
		{
			...mapState(['degree_bk','degree_ss','degree_bs','token'])
		},
		data() {
			return {
			
			};
		},
	
		methods:
		{
			 ...mapMutations(['change_degree_bk','change_degree_ss','change_degree_bs']),
			gotoclass()
			{
				uni.navigateTo({
					url:'/package-banji/in_class/in_class'
				})
			},
			openbj()
			{
				this.$refs['popupDialog'].open();
				
			},
			goback()
			{

				this.$refs['popupDialog'].close();
			
			},
			gointo()
	        {
				if(this.$refs['_degree'].value==1)this.change_degree_bk(true);
			if(this.$refs['_degree'].value==2)this.change_degree_ss(true);
			if(this.$refs['_degree'].value==3)this.change_degree_bs(true);
			   this.$refs['popupDialog'].close();
			}
		
		}

	}
</script>

<style lang="scss">
	
	.space-x-6 {
	  & > view:not(:first-child),
	  & > text:not(:first-child),
	  & > image:not(:first-child) {
	    margin-left: 0.38rem;
	  }
	  .text-wrapper_5 {
	    padding: 0.63rem 0 1.13rem;
	    align-self: center;
	    background-color: #cccccc00;
	    width: 8rem;
	    height: 2.56rem;
	    .text_12 {
	      color: #383838;
	    }
	  }
	  .section_6 {
	    background-color: #e5e5e5;
	    width: 0.094rem;
	    height: 3.69rem;
	  }
	  .text-wrapper_4 {
	    padding: 0.75rem 0 1.13rem;
	    align-self: center;
	    background-color: #cccccc00;
	    width: 7.19rem;
	    height: 2.69rem;
	    .text_13 {
	      color: #d24735;
	      line-height: 0.78rem;
	    }
	  }
	  .font_2 {
	    font-size: 0.88rem;
	    font-family: SourceHanSansCN;
	    line-height: 0.81rem;
	    color: #808080;
	  }
	}
	.group_4 {
	  padding: 0 0.5rem;
	  position: absolute;
	  left: 0;
	  right: 0;
	  top: 26.88rem;
	}
	
	
.space-y-6 {
  & > view:not(:first-child),
  & > text:not(:first-child),
  & > image:not(:first-child) {
    margin-top: 0.38rem;
  }
  .space-y-13 {
    & > view:not(:first-child),
    & > text:not(:first-child),
    & > image:not(:first-child) {
      margin-top: 0.81rem;
    }
    .text {
      margin-left: 0.25rem;
      align-self: flex-start;
      color: #383838;
      font-size: 1rem;
      font-family: SourceHanSansCN;
      font-weight: 700;
      line-height: 0.94rem;
    }
    .space-y-19 {
      & > view:not(:first-child),
      & > text:not(:first-child),
      & > image:not(:first-child) {
        margin-top: 1.19rem;
      }
      .list-item {
        background-color: #f2f2f2;
        border-radius: 0.94rem;
        filter: drop-shadow(0px 0.13rem 0.13rem #00000040) blur(0.024rem);
        background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16678750158783354295.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        .section {
          padding: 1.5rem 1.44rem 1.06rem;
          background-color: #d1463499;
          border-radius: 0.94rem;
          position: relative;
          .font_1 {
            font-size: 1.13rem;
            font-family: SourceHanSansCN;
            line-height: 1.06rem;
            font-weight: 700;
            color: #ffffff;
          }
          .text_2 {
            margin-left: 0.13rem;
          }
          .image {
            border-radius: 0.94rem;
            width: 2.81rem;
            height: 2.94rem;
            position: absolute;
            right: 0.59rem;
            top: 0.53rem;
          }
          .text-wrapper {
            margin-top: 2.5rem;
            padding: 0.5rem 0 0.38rem;
            background-color: #f2efef;
            border-radius: 0.38rem;
            box-shadow: 0px 0.13rem 0.25rem #00000040;
            width: 4.69rem;
            position: relative;
            .font_2 {
              font-size: 0.88rem;
              font-family: SourceHanSansCN;
              line-height: 0.84rem;
              font-weight: 700;
              color: #ad0f1f;
            }
          }
        }
      }
    }
  }
  .group {
    padding-left: 0.94rem;
    padding-right: 0.88rem;
  }
  .group_2 {
    position: fixed;
	bottom: -120px;
    .image_2 {
      opacity: 0.15;
      width: 24.69rem;
      height: 25.5rem;
    }
    .text-wrapper_2 {
      padding: 0.88rem 0 0.56rem;
      background-color: #f2897b;
      border-radius: 0.31rem;
      width: 10.44rem;
      position: absolute;
      top: 10.19rem;
      left: 50%;
      transform: translateX(-50%);
      .text_3 {
        color: #ffffff;
        font-size: 1.25rem;
        font-family: SourceHanSansCN;
        line-height: 1.16rem;
      }
    }
  }
}
.page {
  padding: 1.38rem 0 4.06rem;
  background-color: #ffffff;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}
</style>
