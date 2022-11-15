
<template>
<view class="flex-col space-y-15 page">
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
        <view class="flex-col items-center text-wrapper" @click="outclass()"><text class="text">退出</text></view>
      </view>
    </view>
  </view>
  
  
  <view v-for="(item,index) in classmates">
  	  
  <my-classmates :classmate="item"></my-classmates>	
  
    </view>
</view>

</template>

<script>
import{mapState,mapMutations}from 'vuex'

export default {
  components: {
	  ...mapState(['degree_bk','degree_ss','degree_bs','token'])
  },
  data() {
    return {
	  	classmates:[
	    {
	  	  hisname: "周嘉晟2",
	  	  hisxuehao: "032002522",
	  	  histel: "123456",
		  hisemail:"123456@qq.com"
	    },
	    {
	  	  hisname: "周嘉晟3",
	  	  hisxuehao: "032002522",
	  	  histel: "123456",
		    hisemail:"123456@qq.com"
	    },
	    {
	  	  hisname: "周嘉晟4",
	  	  hisxuehao: "032002522",
	  	  histel: "123456",
		    hisemail:"123456@qq.com"
	    },
		{
		  hisname: "周嘉晟5",
		  hisxuehao: "032002522",
		  histel: "123456",
		    hisemail:"123456@qq.com"
		},
		{
		  hisname: "周嘉晟6",
		  hisxuehao: "032002522",
		  histel: "123456",
		    hisemail:"123456@qq.com"
		},
		{
		  hisname: "周嘉晟7",
		  hisxuehao: "032002522",
		  histel: "123456",
		    hisemail:"123456@qq.com"
		},
		{
		  hisname: "周嘉晟8",
		  hisxuehao: "032002522",
		  histel: "123456",
		    hisemail:"123456@qq.com"
		}
	    ]
    };
  },
  methods: {
	  openzl()
	  {
	  	this.$refs['popupDialog'].open();
	  	
	  },
	  outclass()
	  {
		 
		  uni.switchTab({
			  
		  	url:'/pages/banji/banji'
		  })
	  }

  }
};
</script>

<style lang="scss">
	.space-y-15 {
	  & > view:not(:first-child),
	  & > text:not(:first-child),
	  & > image:not(:first-child) {
	    margin-top: 0.94rem;
	  }
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
	  .list {
	    padding: 0 0.63rem;
	  }
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
	.page {
	  padding-bottom: 5.63rem;
	  background-color: #f2f2f2;
	  width: 100%;
	  overflow-y: auto;
	  overflow-x: hidden;
	  height: 100%;
	}
	.space-y-15 {
	  & > view:not(:first-child),
	  & > text:not(:first-child),
	  & > image:not(:first-child) {
	    margin-top: 0.94rem;
	  }
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
	  .list {
	    padding: 0 0.63rem;
	  }
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
	.space-y-15 {
	  & > view:not(:first-child),
	  & > text:not(:first-child),
	  & > image:not(:first-child) {
	    margin-top: 0.94rem;
	  }
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
	  .list {
	    padding: 0 0.63rem;
	  }
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
</style>
