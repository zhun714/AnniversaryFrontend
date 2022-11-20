<template>
  <view class="flex-col page">
    <view class="flex-row justify-end group">
      <view class="flex-col group_2">
        <view class="flex-col items-end text-wrapper"><text class="font_1 text">福州大学</text></view>
        <view class="section"></view>
      </view>
      <image
        class="image"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63667be2fe65f70012e850e6/16676607767486712797.png"
      />
    </view>
    <view class="flex-col items-end space-y-4 group_3">
      <text class="font_1">计算机与大数据学院/软件学院</text>
      <text class="font_1 text_2">40周年院庆</text>
    </view>
    <view class="flex-col items-center group_4">
      <view class="flex-col items-center text-wrapper_2"><text class="text_3">节目单</text></view>
      <image
        class="image_2"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63667be2fe65f70012e850e6/16676607767544241500.png"
      />
    </view>
    <view class="flex-col group_5">
      <view class="flex-col group_6">
        <view class="flex-col items-center section_2">
          <view class="flex-col group_7">
            <view class="flex-col list">
              <view class="flex-col space-y-5" :key="i" v-for="(item, i) in itemList">
                <view class="flex-col group_8">
                  <view class="section_3"></view>
                  <view class="flex-col items-center text-wrapper_3"><text class="font_2">《{{item.name}}》</text></view>
                </view>
                <text class="font_3 text_4">表演：{{item.type}}</text>
              </view>
            </view>
          </view>
        </view>
        <image
          class="image_5"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63667be2fe65f70012e850e6/16676607767514203381.png"
        />
        <image
          class="image_4"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63667be2fe65f70012e850e6/16679620322113855017.png"
        />
        <image
          class="image_3"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63667be2fe65f70012e850e6/16679620322141472893.png"
        />
        <image
          class="image_8"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63667be2fe65f70012e850e6/16676607767505835713.png"
        />
        <image
          class="image_7"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63667be2fe65f70012e850e6/16676607767523534126.png"
        />
        <image
          class="image_6"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63667be2fe65f70012e850e6/16676607767514203381.png"
        />
      </view>
      <view class="flex-row justify-between group_9">
        <image
          class="image_9"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63667be2fe65f70012e850e6/16679620322181057634.png"
        />
        <image
          class="image_9 image_10"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63667be2fe65f70012e850e6/16679620322173039518.png"
        />
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
		itemList: [],
        lists: [
			{
				type:'诗朗诵',
				title:'相聚院庆'
			},
			{
				type:'小品',
				title:'学习'
			},
			{
				type:'舞蹈',
				title:'舞动福大'
			},
			{
				type:'诗朗诵',
				title:'相聚院庆'
			},
			{
				type:'合唱',
				title:'我和我的祖国'
			},
			{
				type:'歌伴舞',
				title:'如此多娇'
			},
			{
				type:'健美操',
				title:'青春节拍'
			},
			{
				type:'歌曲四重唱',
				title:'二十年后再相会'
			}			
		],
      };
    },
	onLoad() {
	            /* 列表 */
	            this.getList();
	},
	onPullDownRefresh() {
	            /* 下拉的时候更新 */
	            this.getList();
	},
    methods: {
		getList(){
			uni.request({
				url:'http://43.139.44.201:8081/program',
				method:'GET',
				header:{
					'content-type':'application/json',
				},
				success:(res)=>{
					console.log(res.data);
					this.itemList =res.data.dataList;
					console.log(this.itemList);
				}
			})
			
		},
		
	},
  };
</script>

<style scoped lang="scss">
  .page {
    padding: 112.03rpx 0 77.85rpx;
    background-color: #d14735;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    .group {
      padding-left: 110.13rpx;
      padding-right: 26.58rpx;
      .group_2 {
        margin-right: -613.29rpx;
        width: 355.06rpx;
        position: relative;
        .text-wrapper {
          margin-right: 20.89rpx;
          padding-top: 243.04rpx;
          background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63667be2fe65f70012e850e6/16676607767531783679.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          width: 334.18rpx;
          height: 275.32rpx;
          .text {
            margin-right: 9.49rpx;
          }
        }
        .section {
          background-color: #d14735;
          height: 17.09rpx;
          position: absolute;
          left: 153.8rpx;
          right: 0;
          top: 138.61rpx;
        }
      }
      .image {
        margin-right: 347.47rpx;
        margin-top: 189.87rpx;
        opacity: 0.8;
        width: 265.82rpx;
        height: 85.44rpx;
      }
    }
    .space-y-4 {
      & > view:not(:first-child),
      & > text:not(:first-child),
      & > image:not(:first-child) {
        margin-top: 7.59rpx;
      }
      .text_2 {
        margin-right: 7.59rpx;
      }
    }
    .group_3 {
      margin-top: 3.8rpx;
      padding: 0 60.76rpx;
    }
    .font_1 {
      font-size: 26.58rpx;
      font-family: PangMenZhengDao;
      line-height: 32.28rpx;
      color: #ffffff;
    }
    .group_4 {
      margin-top: 34.18rpx;
      padding-bottom: 36.08rpx;
      position: relative;
      .text-wrapper_2 {
        padding: 22.78rpx 0 28.48rpx;
        background-color: #d96253;
        border-radius: 56.96rpx;
        width: 402.53rpx;
        .text_3 {
          color: #fff4de;
          font-size: 56.96rpx;
          font-family: PangMenZhengDao;
          line-height: 58.86rpx;
        }
      }
      .image_2 {
        width: 254.43rpx;
        height: 138.61rpx;
        position: absolute;
        left: 91.14rpx;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .group_5 {
      margin-top: 7.59rpx;
      overflow-x: hidden;
      height: 1492.41rpx;
      .group_6 {
        padding-top: 18.99rpx;
        overflow-x: hidden;
        height: 1467.72rpx;
        position: relative;
        .section_2 {
          margin-left: 49.37rpx;
          margin-right: 47.47rpx;
          padding: 24.68rpx 0 106.33rpx;
          background-color: #ffffff26;
          border-radius: 18.99rpx;
          .group_7 {
            width: 444.3rpx;
            height: 1317.72rpx;
            .list {
              width: 442.41rpx;
              .space-y-5 {
                & > view:not(:first-child),
                & > text:not(:first-child),
                & > image:not(:first-child) {
                  margin-top: 9.49rpx;
                }
                .group_8 {
                  padding: 15.19rpx 0 20.89rpx;
                  position: relative;
                  .section_3 {
                    margin: 0 11.39rpx;
                    background-color: #ffffff;
                    border-radius: 56.96rpx;
                    height: 85.44rpx;
                  }
                  .text-wrapper_3 {
                    padding: 39.87rpx 0 37.97rpx;
                    background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/63667be2fe65f70012e850e6/16676607770868548015.png');
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                    width: 442.41rpx;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    position: absolute;
                    .font_2 {
                      font-size: 45.57rpx;
                      font-family: PangMenZhengDao;
                      line-height: 43.67rpx;
                      color: #ad0f1f;
                    }
                  }
                }
                .font_3 {
                  font-size: 34.18rpx;
                  font-family: PangMenZhengDao;
                  line-height: 35.13rpx;
                  color: #ffffff;
                }
                .text_4 {
                  align-self: center;
                }
              }
            }
          }
        }
        .image_5 {
          opacity: 0.6;
          width: 438.61rpx;
          height: 132.91rpx;
          position: absolute;
          left: -168.99rpx;
          top: 356.96rpx;
        }
        .image_4 {
          width: 121.52rpx;
          height: 123.42rpx;
          position: absolute;
          right: 46.52rpx;
          top: 0;
        }
        .image_3 {
          width: 121.52rpx;
          height: 123.42rpx;
          position: absolute;
          left: 28.48rpx;
          top: 0;
        }
        .image_8 {
          opacity: 0.6;
          width: 385.44rpx;
          height: 184.18rpx;
          position: absolute;
          right: -224.05rpx;
          bottom: 142.41rpx;
        }
        .image_7 {
          opacity: 0.6;
          width: 438.61rpx;
          height: 132.91rpx;
          position: absolute;
          left: -244.94rpx;
          bottom: 425.32rpx;
        }
        .image_6 {
          opacity: 0.6;
          width: 438.61rpx;
          height: 132.91rpx;
          position: absolute;
          right: -222.15rpx;
          top: 546.84rpx;
        }
      }
      .group_9 {
        margin-top: -98.73rpx;
        padding: 0 28.48rpx;
        position: relative;
        .image_9 {
          width: 121.52rpx;
          height: 123.42rpx;
        }
        .image_10 {
          margin-right: 18.99rpx;
        }
      }
    }
  }
</style>