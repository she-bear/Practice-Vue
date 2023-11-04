<template>
    <HeaderComponent />

    <section class="blog__top">
        <img :src="topImage" alt="Top look image">
    </section>
    <section class="look center">
        <h2 class="projects__title">{{ pageData.title }}</h2>
        <p class="projects__text projects__text-left">{{ pageData.paragraph }}</p>
    </section>

    <swiper :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
    }" :zoom="true" :navigation="true" :pagination="{
    clickable: true,
}" :modules="modules" class="mySwiper">

        <swiper-slide>
            <div class="swiper-zoom-container">
                <img :src="swiperImage" alt="image">
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="swiper-zoom-container">
                <img :src="swiperImage" alt="image">
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="swiper-zoom-container">
                <img :src="swiperImage" alt="image">
            </div>
        </swiper-slide>
    </swiper>

    <FooterComponent />
</template>

<script>
import FooterComponent from './FooterComponent.vue';
import HeaderComponent from './HeaderComponent.vue';
import { mapState } from 'vuex';

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Zoom, Navigation, Pagination } from 'swiper/modules';

import topImage from "@/assets/img/top_look.png";
import swiperImage from "@/assets/img/look_image.png";

export default {
    components: {
        HeaderComponent,
        FooterComponent,
        Swiper,
        SwiperSlide
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
            swiperImage,
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

.swiper-button-prev,
.swiper-button-next {
    color: black !important;
}
</style>

