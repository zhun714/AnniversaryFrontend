<template>
    <div class="container">
        <div class="displayed">
            <image :src="`/static/云参观/${images[displayed]}.jpg`" mode="heightFix"></image>
        </div>
        <div v-if="selector" class="selector">
            <ImageSelect v-for="(image, i) in images" :name="image" :active="i === displayed" :index="i"
                @switch-to="changeDisplayed"></ImageSelect>
        </div>
        <div class="switch" @click="switchSelector">
            <image src="/static/map.png"></image>
        </div>
    </div>

</template>


<script setup>
import { ref } from 'vue';
import ImageSelect from './ImageSelect.vue';
const images = [
    '不三不四湖',
    '福友道',
    '福友阁',
    '山南行',
    '卧龙桥',
    '行政北楼',
    '院楼背面',
    '院楼正面'
]
const selector = ref(true)
const displayed = ref(0)
const switchSelector = () => {
    selector.value = !selector.value
}

const changeDisplayed = (i) => {
    displayed.value = i
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

.displayed > image {
    width: 100%;
    height: 100%;
}

.switch > image{
    width: 20px;
    height: 20px;
}
</style>