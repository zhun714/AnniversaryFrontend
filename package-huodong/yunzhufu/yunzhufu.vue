<template>
	<view class="flex-col page">
	  <image
	    class="image"
	    src="/static/shouye/标题.png"
	  />
	  <view class="flex-col space-y-31 section">
	    <view class="flex-col space-y-9">
	      <view class="flex-row justify-center space-x-13 group">
	        <image
	          class="image_2"
	          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16669445130077024615.png"
	        />
	        <text class="font_1 text">学院风采</text>
	        <view class="flex-col text-wrapper"><text class="text_2">1982-2022</text></view>
	      </view>
	      <image
	        class="image_3"
	        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16669445130110160997.png"
	      />
	    </view>
	    <view class="flex-col space-y-26 group_2">
	      <view class="flex-col space-y-8 group_3">
	        <view class="group_4">
	          <text class="font_2">06月</text>
	          <text class="font_3 text_3">2021</text>
	        </view>
	        <text class="font_4 text_4">
	          为了适应当前学科发展的需求，撤销数学与计算机科学学院，成立了计算机与大数据学院。
	        </text>
	      </view>
	      <view class="flex-col">
	        <view class="group_5">
	          <text class="font_2">10月</text>
	          <text class="font_3 text_5">2009</text>
	        </view>
	        <text class="font_4 text_6">数学与计算机科学学院和软件学院进行实质性整合。</text>
	        <view class="flex-col items-start text-wrapper_2"><text class="font_4 text_7" @click="changetoxueyuann()">更 多 +</text></view>
	      </view>
	    </view>
	  </view>
	  <view class="flex-col group_6">
	    <view class="flex-col items-start space-y-8 section_2">
	      <view class="flex-row group_7">
	        <view class="flex-col items-start group_8">
	          <image
	            class="image_5"
	            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16669447039702860196.png"
	          />
	          <view class="flex-row justify-between section_3">
	            <view class="flex-col space-y-29 group_9">
	              <text class="font_4 text_9">林慧民</text>
	              <text class="text_10">1977年入福州大学计算数学专业学习，1982年2月在福州大学计算机系计算机...</text>
	            </view>
	            <image
	              class="image_4"
	              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16669445132748524185.png"
	            />
	          </view>
	        </view>
	        <view class="section_4"></view>
	        <view class="section_5"></view>
	        <view class="section_6"></view>
	        <view class="flex-col items-start text-wrapper_3"><text class="font_4 text_11">更 多 +</text></view>
	        <image
	          class="image_6"
	          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16669445130077024615.png"
	        />
	        <text class="font_1 text_12">云祝福</text>
	      </view>
	      <view class="flex-col items-end group_10">
	        <view class="flex-col space-y-24 section_7">
	          <view class="flex-col space-y-32 section_8">
	            <view class="flex-col items-start space-y-18 group_11">
	              <text class="font_5 text_13">祝福母校越来越好~~</text>
	              <text class="font_5 text_14">祝福计算机与大数据学院越来越好~~</text>
	            </view>
	            <text class="font_5 text_15">四十载弦歌不辍、砥砺奋进~~</text>
	            <view class="flex-col space-y-16 group_12">
	              <text class="font_5 text_16">四十年风雨，积淀下沉沉步履~~</text>
	              <text class="font_5 text_17">祝各位校友身体健康，万事顺意~~</text>
	            </view>
	          </view>
	          <view class="flex-row group_13">
	            <view class="flex-col items-start text-wrapper_4"><text class="font_4 text_18">写下你的祝福</text></view>
	            <view class="flex-col items-center text-wrapper_5"><text class="font_4">发送</text></view>
	          </view>
	        </view>
	        <image
	          class="image_7"
	          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16669447039721776277.png"
	        />
	      </view>
	    </view>
	    <view class="flex-col items-center button"><text class="font_1 text_8">校友风采</text></view>
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
			changetoxueyuann(){
				uni.navigateTo({
					url:'/package-shouye/xueyuan/xueyuan'
				})
			}
		}
	}
</script>

<style lang="scss">


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
  background-color: #f4f4f4;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  .image {
    flex-shrink: 0;
    width: 750rpx;
    height: 81.82rpx;
  }
  .space-y-31 {
    & > view:not(:first-child),
    & > text:not(:first-child),
    & > image:not(:first-child) {
      margin-top: 60.39rpx;
    }
    .space-y-9 {
      & > view:not(:first-child),
      & > text:not(:first-child),
      & > image:not(:first-child) {
        margin-top: 17.53rpx;
      }
      .space-x-13 {
        & > view:not(:first-child),
        & > text:not(:first-child),
        & > image:not(:first-child) {
          margin-left: 25.32rpx;
        }
        .image_2 {
          width: 144.16rpx;
          height: 83.77rpx;
        }
        .text {
          align-self: center;
          color: #000000;
          line-height: 33.12rpx;
        }
        .text-wrapper {
          padding: 7.79rpx 0;
          align-self: center;
          background-color: #d14735;
          border-radius: 5.84rpx;
          height: 29.22rpx;
          .text_2 {
            margin-left: 9.74rpx;
            margin-right: 3.9rpx;
            color: #ffffff;
            font-size: 21.43rpx;
            font-family: PangMenZhengDao;
            line-height: 14.61rpx;
          }
        }
      }
      .group {
        padding: 0 122.73rpx;
      }
      .image_3 {
        margin-right: 29.22rpx;
        overflow: hidden;
        width: 720.78rpx;
        height: 309.74rpx;
      }
    }
    .space-y-26 {
      & > view:not(:first-child),
      & > text:not(:first-child),
      & > image:not(:first-child) {
        margin-top: 50.65rpx;
      }
      .group_3 {
        margin-right: 19.48rpx;
      }
      .group_5 {
        margin-left: 3.9rpx;
        align-self: flex-start;
        .text_5 {
          line-height: 20.45rpx;
        }
      }
      .font_2 {
        font-size: 46.75rpx;
        font-family: SourceHanSansCN;
        line-height: 40.91rpx;
        color: #383838;
      }
      .font_3 {
        font-size: 27.27rpx;
        font-family: SourceHanSansCN;
        line-height: 21.43rpx;
        color: #383838;
      }
      .text_6 {
        margin-top: 17.53rpx;
        align-self: flex-start;
      }
      .text-wrapper_2 {
        margin-top: 50.65rpx;
        padding-bottom: 33.12rpx;
        align-self: center;
        background-color: #cccccc00;
        width: 132.47rpx;
        .text_7 {
          margin-left: 3.9rpx;
        }
      }
    }
    .group_2 {
      padding: 0 74.03rpx;
    }
  }
  .section {
    padding: 397.4rpx 0 120.78rpx;
    background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/814f94c3a3dbbe7972e0b8ac0509e5ec.png');
    background-position: 0% 0%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .group_6 {
    margin-top: -87.66rpx;
    padding-top: 40.91rpx;
    position: relative;
    .section_2 {
      margin-right: 7.79rpx;
      padding-top: 134.42rpx;
      background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/398f8623e40ae95cb44a2af69cba2c1e.png');
      background-position: 100% 0%;
      background-size: 114.5% 100%;
      background-repeat: no-repeat;
    }
    .button {
      padding: 35.06rpx 0 46.75rpx;
      background-color: #d24735;
      border-radius: 9.74rpx 9.74rpx 68.18rpx 68.18rpx;
      width: 309.74rpx;
      position: absolute;
      left: 202.6rpx;
      top: 0;
      .text_8 {
        color: #ffffff;
        line-height: 33.12rpx;
      }
    }
  }
  .space-y-8 {
    & > view:not(:first-child),
    & > text:not(:first-child),
    & > image:not(:first-child) {
      margin-top: 15.58rpx;
    }
    .group_4 {
      align-self: flex-start;
      .text_3 {
        line-height: 20.45rpx;
      }
    }
    .text_4 {
      line-height: 27.27rpx;
    }
    .group_7 {
      margin-left: -64.29rpx;
      width: 740.26rpx;
      height: 649.68rpx;
      position: relative;
      .group_8 {
        padding-top: 350.65rpx;
        width: 740.26rpx;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        .image_5 {
          width: 231.82rpx;
          height: 225.97rpx;
        }
        .section_3 {
          padding-left: 62.34rpx;
          background-color: #d14735;
          border-radius: 37.01rpx;
          width: 633.12rpx;
          position: absolute;
          right: 0;
          top: 0;
          .space-y-29 {
            & > view:not(:first-child),
            & > text:not(:first-child),
            & > image:not(:first-child) {
              margin-top: 56.49rpx;
            }
            .text_9 {
              align-self: flex-start;
              color: #ffffff;
              font-size: 25.32rpx;
              line-height: 23.38rpx;
            }
            .text_10 {
              color: #ffffff;
              font-size: 21.43rpx;
              font-family: SourceHanSansCN;
              line-height: 25.32rpx;
              text-indent: 20.45rpx;
            }
          }
          .group_9 {
            margin-top: 35.06rpx;
            width: 237.66rpx;
          }
          .image_4 {
            border-radius: 0px 37.01rpx 37.01rpx 0px;
            width: 288.31rpx;
            height: 368.18rpx;
          }
        }
      }
      .section_4 {
        background-color: #e56352;
        border-radius: 50%;
        width: 29.22rpx;
        height: 29.22rpx;
        position: absolute;
        left: 348.7rpx;
        top: 395.45rpx;
      }
      .section_5 {
        background-color: #e8c1bb;
        border-radius: 50%;
        width: 29.22rpx;
        height: 29.22rpx;
        position: absolute;
        right: 303.9rpx;
        top: 395.45rpx;
      }
      .section_6 {
        background-color: #e8c1bc;
        border-radius: 50%;
        width: 29.22rpx;
        height: 29.22rpx;
        position: absolute;
        right: 245.45rpx;
        top: 395.45rpx;
      }
      .text-wrapper_3 {
        padding: 5.84rpx 0 29.22rpx;
        background-color: #cccccc00;
        width: 132.47rpx;
        position: absolute;
        right: 224.03rpx;
        top: 465.58rpx;
        .text_11 {
          margin-left: 3.9rpx;
        }
      }
      .image_6 {
        width: 144.16rpx;
        height: 83.77rpx;
        position: absolute;
        left: 230.84rpx;
        bottom: 0;
      }
      .text_12 {
        color: #383838;
        position: absolute;
        right: 238.64rpx;
        bottom: 26.3rpx;
      }
    }
    .group_10 {
      margin-left: -29.22rpx;
      width: 697.4rpx;
      position: relative;
      .space-y-24 {
        & > view:not(:first-child),
        & > text:not(:first-child),
        & > image:not(:first-child) {
          margin-top: 46.75rpx;
        }
        .space-y-32 {
          & > view:not(:first-child),
          & > text:not(:first-child),
          & > image:not(:first-child) {
            margin-top: 62.34rpx;
          }
          .space-y-18 {
            & > view:not(:first-child),
            & > text:not(:first-child),
            & > image:not(:first-child) {
              margin-top: 35.06rpx;
            }
            .text_13 {
              line-height: 31.17rpx;
            }
            .text_14 {
              margin-left: 224.03rpx;
            }
          }
          .group_11 {
            padding-left: 50.65rpx;
          }
          .font_5 {
            font-size: 31.17rpx;
            font-family: PangMenZhengDao;
            line-height: 32.14rpx;
            color: #ffffff;
          }
          .text_15 {
            margin-left: 23.38rpx;
            align-self: flex-start;
            line-height: 31.17rpx;
          }
          .space-y-16 {
            & > view:not(:first-child),
            & > text:not(:first-child),
            & > image:not(:first-child) {
              margin-top: 31.17rpx;
            }
            .text_16 {
              align-self: flex-end;
              line-height: 29.22rpx;
            }
            .text_17 {
              align-self: flex-start;
              line-height: 37.01rpx;
              width: 483.12rpx;
            }
          }
          .group_12 {
            margin-left: -23.38rpx;
            align-self: flex-start;
            width: 638.96rpx;
          }
        }
        .section_8 {
          margin-right: 3.9rpx;
          padding: 68.18rpx 0 42.86rpx;
          overflow: hidden;
          border-radius: 27.27rpx;
          background-color: #f2897b;
        }
        .group_13 {
          padding-left: 44.81rpx;
          padding-right: 29.22rpx;
          .text-wrapper_4 {
            padding: 17.53rpx 0 11.69rpx;
            background-color: #f4f4f4;
            border-radius: 7.79rpx;
            width: 360.39rpx;
            height: 51.62rpx;
            .text_18 {
              margin-left: 17.53rpx;
              color: #808080;
            }
          }
          .text-wrapper_5 {
            margin: 5.84rpx 0 3.9rpx 35.06rpx;
            padding: 11.69rpx 0 7.79rpx;
            background-color: #fff4de;
            border-radius: 7.79rpx;
            width: 68.18rpx;
            height: 40.91rpx;
          }
        }
      }
      .section_7 {
        margin-left: 77.92rpx;
        padding:0 40.91rpx;
        background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16669447039714701061.png');
        background-position: 0% -1%;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        width: 619.48rpx;
      }
      .image_7 {
        width: 165.58rpx;
        height: 290.26rpx;
        position: absolute;
        left: 0;
        bottom: 148.05rpx;
      }
    }
  }
  .font_4 {
    font-size: 23.38rpx;
    font-family: SourceHanSansCN;
    line-height: 21.43rpx;
    color: #000000;
  }
  .font_1 {
    font-size: 35.06rpx;
    font-family: PangMenZhengDao;
    line-height: 32.14rpx;
  }
}
</style>
