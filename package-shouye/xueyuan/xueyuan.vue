<template>
<view class="flex-col page">
  <view class="flex-col">
    <image
      class="image"
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635646825a7e3f03100b3c41/6369c2cdf9b4a40011de4f01/16679820049749163892.png"
    />
</view>
    <view class="flex-row"></view>
      
  <view class="tab_nav" style="width:8.2rem;   ">
	<view class="navTitle" v-for="(item,index) in navList" :key="index" >
		<view :class="{'active':isActive === index}" @click="checked(index)"  >
        {{item.title}}
		</view>
	</view>
</view>

<view class="nav_item" v-if="isActive==0">
	<xyjj></xyjj>
</view>

<view class="nav_item" v-if="isActive==1">
  <xyjs></xyjs>
</view>

<view class="nav_item" v-if="isActive==2">
	  <xyky></xyky>
</view>



        </view>
</template>


<script>
  export default {

    
    components: {},
  data() {
  			return {
  				isActive: 0,
  				navList:[
  					{
  						index: 0,
  						title: '学院简介'
  					},{
  						index: 1,
  						title: "学科建设"
  					},{
  						index: 2,
  						title: "科研成果"
  					}
  				]
  			}
  		},
  
    methods: {
      checked(index) {
      				this.isActive = index
      			},
      gotojianshe1(){
        uni.navigateTo({
          url:'/package-shouye/jianshe1/jianshe1'
        })
      },
      gotokeyan(){
        uni.navigateTo({
          url:'/package-shouye/keyan/keyan'
        })
      },
      clickNav(e){
        console.log(e)
        this.navIndex=e
      },
      

 
     
      
      
      
      
      
      
      
      
      
      
      
      
    },
  }
  
</script>
<style lang="scss">
  .page {
    background-color: #f5f5f5;
    height: 100%;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    .image {
      width: 24.69rem;
      height: 2.62rem;
    }
    .text-wrapper {
      padding: 1rem 0;
      flex: 1 1 8.19rem;
      background-color: #d24735;
      height: 3.06rem;
      .text {
        line-height: 1.06rem;
      }
    }
    .text-wrapper_2 {
      padding: 1rem 0;
      flex: 1 1 8.19rem;
      background-color: #d37d72;
      height: 3.06rem;
      .text_2 {
        line-height: 1.06rem;
      }
    }
    .font_1 {
      font-size: 1.13rem;
      font-family: YOUSHEhaoshenti;
      line-height: 1rem;
      color: #ffffff;
    }
    .text-wrapper_3 {
      padding: 1rem 0;
      flex: 1 1 8.19rem;
      background-color: #d47d71;
      height: 3.06rem;
      .text_3 {
        line-height: 1.06rem;
      }
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
        margin-bottom: 0.25rem;
        padding: 0.38rem 0 0.19rem;
        position: relative;
        .text_4 {
          font-size: 0.75rem;
        }
        .image_3 {
          width: 1.88rem;
          height: 1.25rem;
          position: absolute;
          left: 3.47rem;
          bottom: 0;
        }
        .text_5 {
          font-size: 0.75rem;
          position: absolute;
          left: 0;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
    .group {
      margin-top: 0.88rem;
      padding: 0 0.81rem;
    }
    .group_3 {
      margin-top: 1.13rem;
      padding: 0.88rem 5rem 0.75rem;
      position: relative;
      .image-wrapper {
        background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635646825a7e3f03100b3c41/6369c2cdf9b4a40011de4f01/16679820049614183363.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: absolute;
        left: 5rem;
        top: 50%;
        transform: translateY(-50%);
        width: 4.63rem;
        .image_4 {
          width: 4.63rem;
          height: 2.69rem;
        }
      }
      .text_6 {
        align-self: center;
        color: #ad0f1f;
        font-size: 1.13rem;
        font-family: SourceHanSansCN;
        font-weight: 700;
        line-height: 1.06rem;
      }
    }
    .space-y-28 {
      & > view:not(:first-child),
      & > text:not(:first-child),
      & > image:not(:first-child) {
        margin-top: 1.75rem;
      }
      .group_5 {
        padding-left: 0.13rem;
        .space-y-67 {
          & > view:not(:first-child),
          & > text:not(:first-child),
          & > image:not(:first-child) {
            margin-top: 4.19rem;
          }
          .group_10 {
            padding-left: 0.75rem;
            .text_9 {
              margin-right: 1.06rem;
              align-self: flex-end;
            }
            .view {
              align-self: flex-start;
            }
            .space-x-6 {
              & > view:not(:first-child),
              & > text:not(:first-child),
              & > image:not(:first-child) {
                margin-left: 0.38rem;
              }
              .text_10 {
                margin-left: 3.69rem;
              }
              .text_14 {
                margin-top: 0.13rem;
              }
            }
            .view_3 {
              align-self: flex-start;
            }
            .group_12 {
              padding-left: 1.25rem;
            }
          }
          .text_17 {
            margin-right: 0.75rem;
            align-self: flex-end;
          }
          .group_15 {
            position: relative;
            .view_5 {
              align-self: center;
            }
            .text_18 {
              align-self: flex-start;
            }
            .image_13 {
              width: 1.06rem;
              height: 1.06rem;
              position: absolute;
              right: 0;
              top: 0;
            }
          }
        }
        .group_9 {
          margin-top: 3.38rem;
          width: 9.88rem;
        }
        .group_6 {
          width: 1.19rem;
          height: 22.88rem;
          position: relative;
          .image_5 {
            width: 1.19rem;
            height: 3.75rem;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
          }
          .image_7 {
            width: 1.19rem;
            height: 3.75rem;
            position: absolute;
            left: 0;
            right: 0;
            top: 3.19rem;
          }
          .image_9 {
            width: 1.19rem;
            height: 3.75rem;
            position: absolute;
            left: 0;
            right: 0;
            top: 6.38rem;
          }
          .image_10 {
            width: 1.19rem;
            height: 3.75rem;
            position: absolute;
            left: 0;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
          }
          .image_11 {
            width: 1.19rem;
            height: 3.75rem;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 6.38rem;
          }
          .image_12 {
            width: 1.19rem;
            height: 3.75rem;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 3.19rem;
          }
          .image_14 {
            width: 1.19rem;
            height: 3.75rem;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
          }
        }
        .group_7 {
          margin-top: 0.13rem;
          .space-y-2 {
            & > view:not(:first-child),
            & > text:not(:first-child),
            & > image:not(:first-child) {
              margin-top: 0.13rem;
            }
            .text_7 {
              margin-left: 1.63rem;
              align-self: flex-start;
            }
            .group_8 {
              padding-top: 0.13rem;
              position: relative;
              .image-wrapper_2 {
                background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635646825a7e3f03100b3c41/6369c2cdf9b4a40011de4f01/16679948467512644301.png');
                background-size: 100% 100%;
                background-repeat: no-repeat;
                width: 9.13rem;
                position: absolute;
                left: 0;
                top: 0;
                .image_6 {
                  width: 9.13rem;
                  height: 1.06rem;
                }
              }
              .text_8 {
                position: absolute;
                right: 0;
                bottom: 0;
              }
            }
            .text_19 {
              margin-left: 1.19rem;
              align-self: flex-start;
            }
            .view_6 {
              align-self: center;
            }
            .group_17 {
              margin-right: 0.38rem;
            }
          }
          .group_11 {
            margin-top: 4.19rem;
            .text_11 {
              margin-left: 1.63rem;
              align-self: flex-start;
            }
            .view_2 {
              align-self: center;
            }
            .space-x-8 {
              & > view:not(:first-child),
              & > text:not(:first-child),
              & > image:not(:first-child) {
                margin-left: 0.5rem;
              }
              .text_13 {
                margin-top: 0.13rem;
              }
            }
          }
          .group_13 {
            margin-top: 1.5rem;
            .text_15 {
              margin-left: 1.19rem;
              align-self: flex-start;
            }
            .view_4 {
              align-self: center;
            }
            .group_14 {
              margin-right: 0.38rem;
            }
          }
          .group_16 {
            margin-top: 3.5rem;
          }
          .space-x-2 {
            & > view:not(:first-child),
            & > text:not(:first-child),
            & > image:not(:first-child) {
              margin-left: 0.13rem;
            }
            .text_16 {
              margin-top: 0.13rem;
            }
          }
        }
        .divider {
          background-color: #d24735;
          width: 8.06rem;
          height: 0.063rem;
        }
        .image_8 {
          flex-shrink: 0;
          width: 1.06rem;
          height: 1.06rem;
        }
        .text_12 {
          width: 8.88rem;
        }
      }
      .space-y-13 {
        & > view:not(:first-child),
        & > text:not(:first-child),
        & > image:not(:first-child) {
          margin-top: 0.81rem;
        }
        .text_20 {
          align-self: center;
          font-size: 0.75rem;
        }
        .text_21 {
          font-size: 0.75rem;
          line-height: 0.88rem;
          text-indent: 1.38rem;
        }
      }
      .group_18 {
        margin-right: 0.56rem;
      }
      .font_3 {
        font-size: 0.81rem;
        font-family: SourceHanSansCN;
        line-height: 1rem;
        color: #000000;
      }
    }
    .group_4 {
      margin: 2.06rem 0 -4rem;
      padding-left: 1.44rem;
      padding-right: 1rem;
    }
    .font_2 {
      font-size: 0.81rem;
      font-family: SourceHanSansCN;
      line-height: 0.69rem;
      color: #383838;
    }
  }



.tab_nav{
	display: flex;

	align-items: center;
}
.tab_nav  .navTitle {
	height: 90rpx;
	line-height: 90rpx;
	width: 100%;
	text-align: center;
	font-size: 32rpx;
	font-family: Alibaba PuHuiTi;
	color: #ffffff; 
  background-color: #d47d71;
}


.active {
	position: relative;
  background-color: #d24735;
}

</style>