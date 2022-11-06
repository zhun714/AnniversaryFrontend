<template>
	<view class="flex-col page">
	  <view class="flex-col group">
	    <view class="flex-col space-y-32 section">
	      <view class="flex-col space-y-3 group_2">
	        <view class="flex-col items-end section_2"><view class="section_3"></view></view>
	        <text class="font_1 text">福州大学</text>
	        <text class="font_1 text_2">计算机与大数据学院/软件学院</text>
	        <text class="font_1 text_3">40周年院庆</text>
	      </view>
	      <view class="section_4"></view>
	    </view>
	    <image
	      class="image"
	      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16670134621865534298.png"
	    />
	  </view>
<button class="flex-col items-center text-wrapper" @click="getUserProfile()"><text class="text_4">一键登录</text></button>
	</view>
	
</template>

<script>
	import { mapMutations} from 'vuex';
	export default {
		
		data() {
   
           return
			{
				
			}
  
		},
	//获取用户基本信息
	methods:
	{
		 ...mapMutations(['login']),
		 
		getUserProfile()
		{
			uni.getUserProfile(
			{
				desc:'秋雅',
				success:(res)=>
				{
                     this.login(false),
					uni.switchTab({
						url:'/pages/banji/banji'
					})
				},
				fail: () => {
					uni.$showMsg('登录失败!')
				},
			})	
		}
	},


    }
</script>

<style lang="scss">
    
	.text-wrapper {
		padding: 1rem 0 1.06rem;
		background-color: #ea7464;
		border-radius: 1.88rem;
		box-shadow: 0px 0px 0.63rem 0.19rem #00000040;
		backdrop-filter: blur(0.13rem);
		width: 14.81rem;
		position: absolute;
		top: 29.94rem;
		left: 50%;
		transform: translateX(-50%);
		border: solid 0.063rem #d24735;

		.text_4 {
			color: #ffffff;
			font-size: 1.25rem;
			font-family: SourceHanSansCN;
			line-height: 1.16rem;
		}
	}
	
	.page {
	  background-color: #f4f4f4;
	  width: 100%;
	  overflow-y: auto;
	  overflow-x: hidden;
	  height: 100%;
	  position: relative;
	  .group {
	    opacity: 0.9;
	    position: relative;
	    .space-y-32 {
	      & > view:not(:first-child),
	      & > text:not(:first-child),
	      & > image:not(:first-child) {
	        margin-top: 2rem;
	      }
	      .space-y-3 {
	        & > view:not(:first-child),
	        & > text:not(:first-child),
	        & > image:not(:first-child) {
	          margin-top: 0.19rem;
	        }
	        .section_2 {
	          margin-right: 0.13rem;
	          padding: 6.06rem 0 6.31rem;
	          background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16670134621853734395.png');
	          background-size: 100% 100%;
	          background-repeat: no-repeat;
	          .section_3 {
	            margin-right: 0.69rem;
	            background-color: #d14735;
	            width: 8rem;
	            height: 0.63rem;
	          }
	        }
	        .font_1 {
	          font-size: 1rem;
	          font-family: PangMenZhengDao;
	          line-height: 1.19rem;
	          color: #ffffff;
	        }
	        .text {
	          align-self: flex-end;
	        }
	        .text_2 {
	          align-self: flex-end;
	        }
	        .text_3 {
	          margin-right: 0.38rem;
	          align-self: flex-end;
	        }
	      }
	      .group_2 {
	        padding-left: 1.5rem;
	        padding-right: 1.38rem;
	      }
	      .section_4 {
	        background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16670134621870455642.png');
	        background-position: 0% 0%;
	        background-size: 100% 100%;
	        background-repeat: no-repeat;
	        height: 15.31rem;
	      }
	    }
	    .section {
	      padding: 4rem 3rem 11.44rem;
	      background-color: #d24735;
	      box-shadow: 0px 0.13rem 1.25rem 0.31rem #00000040;
	      position: relative;
	    }
	    .image {
	      opacity: 0.4;
	      width: 24.75rem;
	      height: 8.63rem;
	      position: absolute;
	      left: 0;
	      right: 0;
	      bottom: 0;
	    }
	  }
	
	}
	
	.space-y-43 {
	  & > view:not(:first-child),
	  & > text:not(:first-child),
	  & > image:not(:first-child) {
	    margin-top: 2.69rem;
	  }
	  .space-y-30 {
	    & > view:not(:first-child),
	    & > text:not(:first-child),
	    & > image:not(:first-child) {
	      margin-top: 1.88rem;
	    }
	    .section {
	      padding: 6.38rem 0 0.13rem;
	      background-color: #e56352;
	      box-shadow: 0px 0.13rem 1.25rem 0.31rem #00000040;
	      position: relative;
	      .space-y-11 {
	        & > view:not(:first-child),
	        & > text:not(:first-child),
	        & > image:not(:first-child) {
	          margin-top: 0.69rem;
	        }
	        .text {
	          color: #ffffff;
	          font-size: 1rem;
	          font-family: SourceHanSansCN;
	          line-height: 0.94rem;
	        }
	        .text_2 {
	          color: #ffffff;
	          font-size: 0.88rem;
	          font-family: AlibabaPuHuiTi;
	          line-height: 0.63rem;
	        }
	      }
	      .section_2 {
	        padding: 3.56rem 0 2.81rem;
	        opacity: 0.4;
	        background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16670134621865534298.png');
	        background-position: 0% 0%;
	        background-size: 100% 100%;
	        background-repeat: no-repeat;
	      }
	      .image-wrapper {
	        padding: 0.25rem 0 0.31rem;
	        background-color: #ffffff;
	        box-shadow: 0px 0.19rem 0.38rem #00000029;
	        border-radius: 50%;
	        width: 6.25rem;
	        position: absolute;
	        top: 2.88rem;
	        left: 50%;
	        transform: translateX(-50%);
	        .image {
	          width: 5.69rem;
	          height: 5.69rem;
	        }
	      }
	    }
	    .space-y-15 {
	      & > view:not(:first-child),
	      & > text:not(:first-child),
	      & > image:not(:first-child) {
	        margin-top: 0.94rem;
	      }
	      .section_3 {
	        padding: 0.38rem 0 0.25rem 0.25rem;
	        background-color: #f9f7f7;
	        border-radius: 1.25rem;
	        box-shadow: 0px 0.13rem 0.25rem 0.38rem #00000008;
	      }
	      .group_2 {
	        padding-top: 1.88rem;
	        position: relative;
	        .section_7 {
	          padding: 2rem 0 2.75rem;
	          opacity: 0.15;
	          background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16672829079276309967.png');
	          background-position: 0% 0%;
	          background-size: 100% 100%;
	          background-repeat: no-repeat;
	          .divider {
	            align-self: flex-start;
	            background-color: #e5e5e5;
	            width: 23.38rem;
	            height: 0.063rem;
	          }
	          .view {
	            margin-left: -2.63rem;
	          }
	          .view_2 {
	            margin-left: -2.63rem;
	            margin-top: 4.13rem;
	          }
	          .text-wrapper {
	            margin-top: 3rem;
	            padding: 1.13rem 0 1rem;
	            align-self: center;
	            background-color: #000000;
	            border-radius: 0.94rem;
	            width: 12.13rem;
	            height: 3.31rem;
	            border: solid 0.063rem #e5e5e5;
	            .text_7 {
	              color: #ffffff;
	            }
	          }
	        }
	        .section_6 {
	          padding: 0.94rem 0.94rem 0.81rem 1.06rem;
	          background-color: #cccccc00;
	          position: absolute;
	          left: 0.66rem;
	          right: 1.03rem;
	          top: 0;
	          .space-x-40 {
	            & > view:not(:first-child),
	            & > text:not(:first-child),
	            & > image:not(:first-child) {
	              margin-left: 2.5rem;
	            }
	            .image_7 {
	              flex-shrink: 0;
	              width: 2rem;
	              height: 1.88rem;
	            }
	            .text_5 {
	              align-self: center;
	              line-height: 1.06rem;
	            }
	          }
	          .image_8 {
	            margin: 0.25rem 0 0.31rem;
	          }
	        }
	        .section_8 {
	          padding: 0.69rem 0.94rem 0.75rem;
	          background-color: #cccccc00;
	          position: absolute;
	          left: 0.66rem;
	          right: 1.03rem;
	          top: 4.31rem;
	          .space-x-42 {
	            & > view:not(:first-child),
	            & > text:not(:first-child),
	            & > image:not(:first-child) {
	              margin-left: 2.63rem;
	            }
	            .image_10 {
	              flex-shrink: 0;
	            }
	            .text_6 {
	              align-self: center;
	            }
	          }
	          .image_11 {
	            align-self: center;
	          }
	        }
	      }
	      .font_1 {
	        font-size: 1.13rem;
	        font-family: SourceHanSansCN;
	        line-height: 1.03rem;
	        color: #a6a6a6;
	      }
	      .image_3 {
	        width: 0.75rem;
	        height: 1.31rem;
	      }
	    }
	    .group {
	      padding: 0 0.69rem;
	    }
	  }
	  .equal-division {
	    padding-top: 0.25rem;
	    background-color: #f7f7f7;
	    border: solid 0.063rem #e5e5e5;
	    .equal-division-item {
	      flex: 1 1 6.13rem;
	      padding: 0.31rem 0;
	    }
	  }
	  .space-y-6 {
	    & > view:not(:first-child),
	    & > text:not(:first-child),
	    & > image:not(:first-child) {
	      margin-top: 0.38rem;
	    }
	    .section_4 {
	      margin-left: 0.19rem;
	      padding: 0.56rem 1rem 0.81rem;
	      background-color: #cccccc00;
	      border-bottom: solid 0.063rem #e5e5e5;
	      .space-x-46 {
	        & > view:not(:first-child),
	        & > text:not(:first-child),
	        & > image:not(:first-child) {
	          margin-left: 2.88rem;
	        }
	        .image_2 {
	          flex-shrink: 0;
	          width: 2rem;
	          height: 2.13rem;
	        }
	        .text_3 {
	          align-self: center;
	        }
	      }
	      .image_4 {
	        margin-right: 1rem;
	        align-self: center;
	      }
	    }
	    .section_5 {
	      padding: 0.88rem 1.31rem 1rem;
	      background-color: #cccccc00;
	      .image_5 {
	        flex-shrink: 0;
	        width: 1.75rem;
	        height: 1.44rem;
	      }
	      .text_4 {
	        margin: 0.13rem 0 0.25rem 2.88rem;
	      }
	      .image_6 {
	        margin-right: 0.63rem;
	        margin-top: 0.13rem;
	      }
	    }
	    .font_2 {
	      font-size: 0.75rem;
	      font-family: SourceHanSansCN;
	      line-height: 0.69rem;
	      color: #000000;
	    }
	    .text_8 {
	      color: #d24735;
	    }
	  }
	  .image_9 {
	    width: 2.13rem;
	    height: 2.13rem;
	  }
	}
	.page {
	  width: 100%;
	  overflow-y: auto;
	  overflow-x: hidden;
	  height: 100%;
	}
	
	
</style>
