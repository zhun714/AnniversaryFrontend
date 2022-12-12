<template>
    <div class="box" @click="$emit('switchTo', index)">
        <image :src="url" mode="aspectFill"></image>
        <div class="tag">
            {{ name }}
        </div>
        <div v-if="active" class="active">
            <image src="/static/round_check_fill.png"></image>
        </div>
    </div>
</template>


<script>
export default{
    props:{
        name:String,
        active:Boolean,
        index:Number,
        url:String,
    }
}
</script>

<style scoped>
.box {
    border: 2px solid white;
    width: 60px;
    height: 60px;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.box>image {
    width: 60px;
    height: 60px;
    border-radius: 5px;
}

.tag {
    position: absolute;
    display: flex;
    width: 100%;
    height: 20px;
    bottom: 0;
    font-size: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    align-items: center;
    justify-content: center;
}


.active {
    border-radius: 50%;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 2px;
    right: 2px;
}

.active > image{
    width: 20px;
    height: 20px;
}
</style>