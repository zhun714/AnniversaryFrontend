<template>
	<view class="flex-col page">
	  <view class="group">
	    <view class="flex-col space-y-15 section">
	      <view class="flex-col items-center">
	        <image
	          class="image"
	          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16666214214332051304.png"
	        />
	      </view>
	      <view class="flex-row space-x-39 group_2">
	        <text class="font_1 text">祝福母校越来越好~~</text>
	        <text class="font_1 text_2">祝福计算机与大数据学院越来越好~~</text>
	      </view>
	      <view class="flex-col space-y-4 group_3">
	        <view class="flex-row space-x-28 group_4">
	          <text class="font_1 text_3">四十载弦歌不辍、砥砺奋进~~</text>
	          <text class="font_1 text_4">祝各位校友身体健康，万事顺意~~</text>
	        </view>
	        <text class="font_1 text_5">四十年风雨，积淀下沉沉步履~~</text>
	      </view>
	    </view>
	    <view class="flex-col group_5">
	      <view class="flex-col space-y-36 section_3">
	        <view class="flex-col space-y-9 group_6">
	          <text class="text_8">1982 - 2022</text>
	          <view class="flex-col">
	            <view class="flex-col space-y-19 section_4">
	              <view class="flex-col items-start image-wrapper">
	                <image
	                  class="image_2"
	                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16666214218925449127.png"
	                />
	              </view>
	              <text class="font_3 text_9">【学院风采】</text>
	            </view>
	            <view class="flex-col space-y-15 section_5">
	              <view class="flex-col items-start image-wrapper_2">
	                <image
	                  class="image_3"
	                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16666214219651271867.png"
	                />
	              </view>
	              <text class="font_3 text_9">【校友风采】</text>
	            </view>
	          </view>
	        </view>
	        <view class="section_6"></view>
	      </view>
	      <image
	        class="image_7"
	        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/b4cf4d8af776992c90dbc6113cece6d5.png"
	      />
	    </view>
	    <view class="flex-col items-start space-y-2 section_2">
	      <text class="font_2 text_6">留下你的</text>
	      <text class="font_2 text_6 text_7">祝福吧</text>
	    </view>
	    <view class="flex-row space-x-12 group_7">
	      <image
	        class="image_4"
	        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16666214218687001283.png"
	      />
	      <view class="flex-col group_8">
	        <view class="flex-col space-y-12 section_7">
	          <view class="flex-row">
	            <view class="flex-col items-start text-wrapper"><text class="text_12">写下祝福…</text></view>
	            <text class="font_4 text_10">21</text>
	            <image
	              class="image_6"
	              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16666214219881406009.png"
	            />
	            <image
	              class="image_5"
	              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16666214220024414514.png"
	            />
	          </view>
	          <view class="flex-row space-x-38 group_9">
	            <view class="flex-col items-center text-wrapper_2"><text class="font_5 text_13">取消</text></view>
	            <view class="flex-col items-start text-wrapper_3"><text class="font_5 text_14">提交</text></view>
	          </view>
	        </view>
	        <text class="font_4 text_11">272</text>
	      </view>
	    </view>
	  </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
/************************************************************
** 请将全局样式拷贝到项目的全局 CSS 文件或者当前页面的顶部 **
** 否则页面将无法正常显示                                  **
************************************************************/

page {
  width: 100vw;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', 'Microsoft Yahei', sans-serif;
}

view,
image,
text {
  box-sizing: border-box;
  flex-shrink: 0;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.justify-start {
  justify-content: flex-start;
}

.justify-center {
  justify-content: center;
}

.justify-end {
  justify-content: flex-end;
}

.justify-evenly {
  justify-content: space-evenly;
}

.justify-around {
  justify-content: space-around;
}

.justify-between {
  justify-content: space-between;
}

.items-start {
  align-items: flex-start;
}

.items-center {
  align-items: center;
}

.items-end {
  align-items: flex-end;
}
.page {
  padding-bottom: 7.59rpx;
  background-color: #f7f7f7;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .group {
    height: 1500rpx;
    position: relative;
    .space-y-15 {
      & > view:not(:first-child),
      & > text:not(:first-child),
      & > image:not(:first-child) {
        margin-top: 28.48rpx;
      }
      .image {
        width: 647.47rpx;
        height: 100.63rpx;
      }
      .space-x-39 {
        & > view:not(:first-child),
        & > text:not(:first-child),
        & > image:not(:first-child) {
          margin-left: 74.05rpx;
        }
        .text {
          margin-bottom: 3.8rpx;
        }
        .text_2 {
          margin-top: 3.8rpx;
          line-height: 31.33rpx;
        }
      }
      .group_2 {
        margin-left: -11.39rpx;
        align-self: flex-start;
      }
      .space-y-4 {
        & > view:not(:first-child),
        & > text:not(:first-child),
        & > image:not(:first-child) {
          margin-top: 7.59rpx;
        }
        .space-x-28 {
          & > view:not(:first-child),
          & > text:not(:first-child),
          & > image:not(:first-child) {
            margin-left: 53.16rpx;
          }
          .text_3 {
            line-height: 36.08rpx;
            width: 406.33rpx;
          }
          .text_4 {
            margin-top: 3.8rpx;
            flex-shrink: 0;
            line-height: 32.28rpx;
          }
        }
        .group_4 {
          align-self: flex-start;
        }
        .text_5 {
          align-self: center;
          line-height: 28.48rpx;
        }
      }
      .group_3 {
        padding-left: 56.96rpx;
      }
      .font_1 {
        font-size: 30.38rpx;
        font-family: PangMenZhengDao;
        line-height: 30.38rpx;
        color: #ffffff;
      }
      .image-wrapper_2 {
        margin-right: 13.29rpx;
        padding: 3.8rpx 0 195.57rpx;
        background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/c00098b607d4fdaef143f150441eb825.png');
        background-position: 0% 0%;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        .image_3 {
          margin-left: 22.78rpx;
          width: 72.15rpx;
          height: 28.48rpx;
        }
      }
    }
    .section {
      padding-bottom: 313.29rpx;
      background-image: radial-gradient(29% 29% at 50% 75%, #e35656 0%, #98060e 100%);
      background-color: #ffffff;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
    }
    .group_5 {
      height: 1073.73rpx;
      position: absolute;
      left: 0;
      right: 0;
      top: 415.82rpx;
      .space-y-36 {
        & > view:not(:first-child),
        & > text:not(:first-child),
        & > image:not(:first-child) {
          margin-top: 68.35rpx;
        }
        .space-y-9 {
          & > view:not(:first-child),
          & > text:not(:first-child),
          & > image:not(:first-child) {
            margin-top: 17.09rpx;
          }
          .text_8 {
            align-self: center;
            color: #dc52525c;
            font-size: 37.97rpx;
            font-family: HarmonyOSSansSC;
            font-weight: 900;
            line-height: 28.48rpx;
          }
          .space-y-19 {
            & > view:not(:first-child),
            & > text:not(:first-child),
            & > image:not(:first-child) {
              margin-top: 36.08rpx;
            }
            .image-wrapper {
              margin-right: 24.68rpx;
              padding: 13.29rpx 0 186.08rpx;
              background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/a36b75480e572e45af3e27b07a9f09b0.png');
              background-position: 0% 0%;
              background-size: 100% 100%;
              background-repeat: no-repeat;
              .image_2 {
                margin-left: 11.39rpx;
                width: 94.94rpx;
                height: 22.78rpx;
              }
            }
          }
          .section_4 {
            margin-right: 11.39rpx;
            padding: 7.59rpx 9.49rpx 26.58rpx;
            background-color: #d44545;
            border-radius: 15.19rpx;
            box-shadow: 0px 20.89rpx 53.16rpx #0000004a;
          }
          .section_5 {
            margin: 37.97rpx 5.7rpx 0;
            padding: 9.49rpx 11.39rpx 26.58rpx;
            background-color: #db5151;
            border-radius: 15.19rpx;
            box-shadow: 0px 20.89rpx 53.16rpx #0000004a;
          }
          .font_3 {
            font-size: 30.38rpx;
            font-family: SourceHanSansCN;
            line-height: 30.38rpx;
            font-weight: 700;
            color: #030303;
          }
          .text_9 {
            align-self: center;
            font-size: 32.28rpx;
            opacity: 0.8;
          }
        }
        .group_6 {
          padding: 26.58rpx 0;
        }
        .section_6 {
          align-self: flex-end;
          background-color: #ececec;
          width: 531.65rpx;
          height: 0.95rpx;
        }
      }
      .section_3 {
        padding: 0 24.68rpx 182.28rpx 30.38rpx;
        background-color: #ffffff;
        border-radius: 45.57rpx 45.57rpx 0px 0px;
        box-shadow: 0px -13.29rpx 34.18rpx #00000040;
      }
      .image_7 {
        margin-right: 22.78rpx;
        margin-top: -58.86rpx;
        flex-shrink: 0;
        align-self: flex-end;
        width: 358.86rpx;
        height: 97.78rpx;
      }
    }
    .space-y-2 {
      & > view:not(:first-child),
      & > text:not(:first-child),
      & > image:not(:first-child) {
        margin-top: 3.8rpx;
      }
      .font_2 {
        font-size: 18.99rpx;
        font-family: PangMenZhengDao;
        line-height: 22.78rpx;
        color: #000000;
      }
      .text_6 {
        opacity: 0.6;
      }
      .text_7 {
        margin-left: 7.59rpx;
      }
    }
    .section_2 {
      padding: 121.52rpx 11.39rpx 106.33rpx;
      background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16666214218479105067.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      width: 148.1rpx;
      position: absolute;
      right: 0;
      top: 199.37rpx;
    }
    .space-x-12 {
      & > view:not(:first-child),
      & > text:not(:first-child),
      & > image:not(:first-child) {
        margin-left: 22.78rpx;
      }
      .image_4 {
        flex-shrink: 0;
        width: 146.2rpx;
        height: 290.51rpx;
      }
      .group_8 {
        margin-top: 72.15rpx;
        flex: 1 1 auto;
        width: 481.33rpx;
        position: relative;
        .space-y-12 {
          & > view:not(:first-child),
          & > text:not(:first-child),
          & > image:not(:first-child) {
            margin-top: 22.78rpx;
          }
          .text-wrapper {
            padding: 11.39rpx 0 13.29rpx;
            flex: 1 1 auto;
            background-color: #f4f4f4;
            border-radius: 7.59rpx;
            width: 317.09rpx;
            height: 50.32rpx;
            .text_12 {
              margin-left: 34.18rpx;
              color: #030303;
              font-size: 26.58rpx;
              font-family: SourceHanSansCN;
              line-height: 24.68rpx;
              opacity: 0.4;
            }
          }
          .text_10 {
            margin-left: 39.87rpx;
            color: #313131;
          }
          .image_6 {
            margin-left: -56.96rpx;
            margin-top: 18.99rpx;
            width: 30.38rpx;
            height: 26.58rpx;
          }
          .image_5 {
            margin: 15.19rpx 34.18rpx 0 30.38rpx;
            width: 34.18rpx;
            height: 28.48rpx;
          }
          .space-x-38 {
            & > view:not(:first-child),
            & > text:not(:first-child),
            & > image:not(:first-child) {
              margin-left: 72.15rpx;
            }
            .text-wrapper_2 {
              padding: 3.8rpx 0 11.39rpx;
              background-color: #f4f4f4;
              border-radius: 7.59rpx;
              width: 83.54rpx;
              height: 34.18rpx;
              .text_13 {
                line-height: 17.09rpx;
              }
            }
            .text-wrapper_3 {
              padding: 5.7rpx 0 15.19rpx;
              background-color: #f4f4f4;
              border-radius: 7.59rpx;
              width: 56.96rpx;
              height: 37.97rpx;
              .text_14 {
                line-height: 18.04rpx;
              }
            }
            .font_5 {
              font-size: 18.99rpx;
              font-family: SourceHanSansCN;
              line-height: 18.99rpx;
              color: #000000;
            }
          }
          .group_9 {
            padding: 0 75.95rpx;
          }
        }
        .section_7 {
          margin-right: 3.8rpx;
          padding: 3.8rpx 0 9.49rpx;
          background-color: #ffffff;
          width: 478.48rpx;
        }
        .font_4 {
          font-size: 24.68rpx;
          font-family: SourceHanSansCN;
          line-height: 18.99rpx;
          font-weight: 700;
        }
        .text_11 {
          color: #d65858;
          position: absolute;
          right: 0;
          top: 2.85rpx;
        }
      }
    }
    .group_7 {
      position: absolute;
      left: 36.08rpx;
      top: 1209.49rpx;
    }
  }
}

</style>
