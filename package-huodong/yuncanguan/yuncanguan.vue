<template>
  <Viewer :images="images"></Viewer>
</template>

<script>
import Viewer from '../../components/Viewer.vue';
export default {
  components: {
    Viewer: Viewer
  },
  data() {
    return {
      images: [
        {
          picture_name: '东门',
          picture_url: "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/636e0914f9b4a40011def608/16681556784402302093.png"
        },
        {
          picture_name: '北门',
          picture_url: "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/636e0914f9b4a40011def608/16681556784447443523.png"
        },
        {
          picture_name: '西门',
          picture_url: "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/636e0914f9b4a40011def608/16681556784426983374.png"
        },
        {
          picture_name: '南门',
          picture_url: "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/636e0914f9b4a40011def608/16681556784433466945.png"
        },
        {
          picture_name: '福友阁',
          picture_url: "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/636e0914f9b4a40011def608/16681556784456651986.png"
        },
        {
          picture_name: '图书馆',
          picture_url: "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6360d2c65a7e3f0310d3abbb/636e0914f9b4a40011def608/16681556784456815493.png"
        }
      ]
    }
  }
}
</script>