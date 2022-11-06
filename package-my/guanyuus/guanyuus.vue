<template>
<view class="flex-col page">
  <view class="flex-row space-x-35 section">

    <text class="text">关于我们</text>
  </view>
  <image
    class="image_3"
    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16672830327521188843.png"
  />
  <view class="flex-col list">
    <view class="flex-row justify-between list-item" :key="i" v-for="(item, i) in list_IJ8aY6Cr">
      <text class="font_1 text_2">隐私协议</text>
      <image
        class="image"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16672829079406111125.png"
      />
    </view>
  </view>
  <image
    class="image_4"
    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/635c9b255a7e3f031085335e/635c9b51fe65f70012e6634b/16672829079276309967.png"
  />
</view>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      list_IJ8aY6Cr: [null, null],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.page {
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .space-x-35 {
    & > view:not(:first-child),
    & > text:not(:first-child),
    & > image:not(:first-child) {
      margin-left: 2.19rem;
    }
    .image_2 {
      margin-right: 0;
    }
    .text {
      margin-top: 0.31rem;
      color: #ffffff;
      font-size: 1.13rem;
      font-family: SourceHanSansCN;
      line-height: 1.03rem;
    }
  }
  .section {
    padding: 1rem 1.13rem 1.25rem;
    background-color: #d24735;
  }
  .image_3 {
    margin-top: 3rem;
    align-self: center;
    width: 8.31rem;
    height: 8.31rem;
  }
  .list {
    margin-top: 3.44rem;
    padding: 0 0.63rem;
    background-color: #ffffff;
    .list-item {
      padding: 1rem 1.69rem 0.88rem;
      &:first-of-type {
        border-bottom: solid 0.063rem #e5e5e5;
      }
      .font_1 {
        font-size: 1rem;
        font-family: SourceHanSansCN;
        line-height: 0.94rem;
        color: #808080;
      }
      .text_2 {
        margin: 0.19rem 0;
      }
    }
  }
  .image {
    margin-right: 0.25rem;
    width: 0.75rem;
    height: 1.31rem;
  }
  .image_4 {
    margin-top: 3.44rem;
    align-self: center;
    opacity: 0.15;
    width: 18.75rem;
    height: 15.31rem;
  }
}
</style>
