<template>
    <div class="container">
        <div class="displayed">
            <image :src="images[displayed].picture_url" mode="heightFix"></image>
        </div>
        <div v-if="selector" class="selector">
            <ImageSelect v-for="(image, i) in images" :name="image.picture_name" :active="i === displayed" :index="i"
                :url="image.picture_url" @switch-to="changeDisplayed"></ImageSelect>
        </div>
        <div class="switch" @click="switchSelector">
            <image src="/static/map.png"></image>
        </div>
    </div>

</template>

<script>
import ImageSelect from './ImageSelect.vue';

export default {
    components:{
        'ImageSelect':ImageSelect
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
            ],
            selector: true,
            displayed: 0,
        }

    },
    methods: {
        switchSelector() {
            this.selector = !this.selector
        },
        changeDisplayed(i){
            this.displayed = i
        }
    }
}
</script>

<style scoped>
.container {
    position: relative;
    width: 100vw;
    height: 100vh;
}

.switch {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    z-index: 20;
    position: absolute;
    bottom: 10px;
    left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.displayed {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: auto;
}

.selector {
    position: absolute;
    display: flex;
    overflow-x: auto;
    bottom: 10%;
    left: 5%;
    right: 5%;
    gap: 10px;
}

.displayed>image {
    width: 100%;
    height: 100%;
}

.switch>image {
    width: 20px;
    height: 20px;
}
</style>