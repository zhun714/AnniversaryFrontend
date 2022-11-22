<template>
<view class="flex-row justify-between section_2" @click="gotoxiaoyou()">
    <image
      class="image_4"
      :src=qrurl
    />
    <view class="flex-col space-y-22 group_4">
      <text class="font_1 text_3">{{xiaoyou.name}}</text>
          <text class="font_1 text_4">{{xiaoyou.position}}</text>
      <text class="font_1 text_4">{{xiaoyou.brief}}</text>
    </view>
    <image
      class="image_5"
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635646825a7e3f03100b3c41/6369c2cdf9b4a40011de4f01/16679820049812537820.png"
    />
  </view>
</template>

<script>
  
  export default {
    mounted() {
      this.change()
      console.log(this.qrurl)
    },
    name:"xiaoyouzj",
    data() {
      return {
      qrurl:'',
      };
    },
    props:
    {
     xiaoyou:
      {
    	  type: Object,
    	  default:
    	  {
    		  
    	  },
      }
    },
    methods:
    {

      change()
      {
        this.qrurl =this.xiaoyou.photo
      },
      gotoxiaoyou()
      {
        uni.navigateTo({
          url:'/package-shouye/xiaoyou1/xiaoyou1'
        })
      }
    }
  }
</script>

<style lang="scss">
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
    .font_1 {
      font-size: 0.75rem;
      font-family: SourceHanSansCN;
      line-height: 0.75rem;
      color: #ffffff;
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
</style>