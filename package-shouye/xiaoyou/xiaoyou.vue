<template>
<view class="flex-col page">
  <image
    class="image"
    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635646825a7e3f03100b3c41/6369c2cdf9b4a40011de4f01/16679820049749163892.png"
  />
  <view class="flex-row group">
    <image
      class="image_2"
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635646825a7e3f03100b3c41/6369c2cdf9b4a40011de4f01/16679828879459055625.png"
    />
    <view class="flex-col group_2">
      <text class="font_1 text">当前位置：首页&gt;&gt;校友风采</text>
      <view class="section"></view>
    </view>
  </view>
  <view class="flex-row justify-center group_3">
    <image
      class="image_3"
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635646825a7e3f03100b3c41/6369c2cdf9b4a40011de4f01/16679820049614183363.png"
    />
    <text class="text_2">校友风采</text>
  </view>
  
  <view class="">
    <view v-for="(item,index) in xiaoyous" :key="index">
     <xiaoyouzj :xiaoyou="item"></xiaoyouzj>
    
     </view>
  </view>

    
</view>

</template>

<script>
  
  export default {
      onShow() {
        this.requestxyfc()
      },
    data() {
      return {
       xiaoyous:
       {
         
       }
      };
    },
    methods:
    {
      requestxyfc()
      {
        uni.request({
          url:'https://www.prxdong.top:8081/alumnus',
 
          
          method:'GET',
          header:{
            'content-type':'application/json' ,//自定义请求头信息
          }, 
          success: (res) => {
           console.log('这里是杰出校友返回',res.data.dataList)
           this.xiaoyous= res.data.dataList
  
          }
        })
      }
    }
    }
</script>


<style lang="scss">
.page {
  padding-bottom: 28.13rem;
  background-color: #ffffff;
  overflow: hidden;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .image {
    flex-shrink: 0;
    width: 24.69rem;
    height: 2.62rem;
  }
  .group {
    margin-top: 0.63rem;
    padding: 0 1.69rem;
    .image_2 {
      width: 1.13rem;
      height: 1.5rem;
    }
    .group_2 {
      margin: 0.13rem 0 0.13rem 0.88rem;
      padding: 0.25rem 0 0.31rem;
      position: relative;
      .text {
        color: #383838;
        line-height: 0.69rem;
      }
      .section {
        background-color: #cccccc00;
        width: 1.88rem;
        height: 1.25rem;
        position: absolute;
        left: 3.53rem;
        top: 0;
      }
    }
  }
  .group_3 {
    margin-top: 0.31rem;
    padding: 0.88rem 5rem 0.75rem;
    position: relative;
    .image_3 {
      position: absolute;
      left: 5rem;
      top: 50%;
      transform: translateY(-50%);
      width: 4.63rem;
      height: 2.69rem;
    }
    .text_2 {
      align-self: center;
      color: #ad0f1f;
      font-size: 1.13rem;
      font-family: SourceHanSansCN;
      font-weight: 700;
      line-height: 1.06rem;
    }
  }
  .section_2 {
    margin: 0.75rem 1.5rem 0;
    padding: 1.31rem 1.13rem 1.31rem 1.5rem;
    filter: drop-shadow(0px 0px 0.094rem #00000040);
    background-color: #d14735;
    border-radius: 0.63rem;
    position: relative;
    .image_4 {
      border-radius: 0.5rem;
      width: 8.31rem;
      height: 10.63rem;
    }
    .space-y-22 {
      & > view:not(:first-child),
      & > text:not(:first-child),
      & > image:not(:first-child) {
        margin-top: 1.38rem;
      }
      .text_3 {
        align-self: flex-start;
        font-size: 0.81rem;
      }
      .text_4 {
        font-size: 0.69rem;
        line-height: 0.81rem;
        text-indent: 0.66rem;
      }
    }
    .group_4 {
      margin-top: 1.44rem;
      width: 8.75rem;
    }
    .image_5 {
      opacity: 0.35;
      width: 9.38rem;
      height: 4.06rem;
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
  .font_1 {
    font-size: 0.75rem;
    font-family: SourceHanSansCN;
    line-height: 0.75rem;
    color: #ffffff;
  }
}
</style>