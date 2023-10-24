<template>
    <div>
        <img width="500" class="big" :src="bigImg">
        <div>
            <img width="100" v-for="(cat, index) in images" :key="index" :src="cat" @click="changeImg(cat)">
        </div>
    </div>
</template>

<script>

// второй способ подключения ресурсов
import img_2 from "@/assets/img/image_2.jpg";
import img_3 from "@/assets/img/image_3.jpeg";
import img_4 from "@/assets/img/image_4.jpg";

export default {
    data() {
        return {
            images: {
                // указание пути к локальным ресурсам, первый способ
                cat1: require("@/assets/img/image_1.png"),
                cat2: img_2,
                cat3: img_3,
                cat4: img_4,
            },
            bigImg: '',
        };
    },
    methods: {
        changeImg(url) {
            this.bigImg = url;
        },
    }
}
</script>

<style lang="scss" scoped>
</style>
