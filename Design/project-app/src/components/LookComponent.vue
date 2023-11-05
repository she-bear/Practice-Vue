<template>
    <section class="blog__top">
        <img :src="topImage" alt="Top look image">
    </section>
    <section class="look center">
        <div>
            <h2 class="projects__title">{{ pageData.title }}</h2>
            <p class="projects__text projects__text-left">{{ pageData.paragraph }}</p>
        </div>
    </section>

    <swiper :style="{
        '--swiper-navigation-color': '#000',
        '--swiper-pagination-color': '#000',
    }" :zoom="true" :navigation="true" :pagination="{
    clickable: true,
}" :modules="modules" class="mySwiper">

        <swiper-slide>
            <div class="swiper-zoom-container">
                <img :src="swiperImage1" alt="image">
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="swiper-zoom-container">
                <img :src="swiperImage2" alt="image">
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="swiper-zoom-container">
                <img :src="swiperImage3" alt="image">
            </div>
        </swiper-slide>
    </swiper>

    <FooterComponent />
</template>

<script>
import FooterComponent from './FooterComponent.vue';
import { mapState } from 'vuex';

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Zoom, Navigation, Pagination } from 'swiper/modules';

import topImage from "@/assets/img/top_look.png";
import swiperImage1 from "@/assets/img/look_image_1.png";
import swiperImage2 from "@/assets/img/look_image_2.png";
import swiperImage3 from "@/assets/img/look_image_3.png";


export default {
    components: {
        FooterComponent,
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Zoom, Navigation, Pagination],
        };
    },
    computed: {
        ...mapState(['pageData']),
    },

    data() {
        return {
            topImage,
            swiperImage1,
            swiperImage2,
            swiperImage3,
        }
    },
}
</script>

<style lang="scss" scoped>
.look {
    padding-top: 150px;
    padding-bottom: 97px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.projects__text-left {
    text-align: left;
}

.swiper {
    width: 100%;
    height: 100%;
    margin-bottom: 100px;
}

.swiper-slide {
    overflow: hidden;
}

.swiper-slide img {
    border-radius: 55px;
}
</style>

