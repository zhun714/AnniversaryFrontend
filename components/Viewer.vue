<template>
    <div class="container">
        <div class="displayed">
            <image :src="images[displayed].photo" mode="heightFix"></image>
        </div>
        <div v-if="selector" class="selector">
            <ImageSelect v-for="(image, i) in images" :name="image.name" :active="i === displayed" :index="i"
                :url="image.photo" @switch-to="changeDisplayed"></ImageSelect>
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
    props:{
        images:Array
    },
    data() {
        return {
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