<template>
    <section class="blog__top">
        <img :src="topImage" alt="Top blog image">
        <div class="blog__top__intro">
            <h2 class="blog__top__title">Our Project</h2>
            <p class="blog__top__text">Home / Project</p>
        </div>
    </section>

    <section class="project center">
        <div class="project__buttons">
            <button class="project__button" @click="getProjectFiltered('Bathroom')">Bathroom</button>
            <button class="project__button" @click="getProjectFiltered('Bedroom')">Bedroom</button>
            <button class="project__button" @click="getProjectFiltered('Kitchen')">Kitchen</button>
            <button class="project__button" @click="getProjectFiltered('Living')">Living Area</button>
        </div>
        <div class="project__content">
            <ToggleArticleComponent v-for="(article, index) in current" :key="index" :article="article" />
        </div>
    </section>
    <FooterComponent />
</template>

<script>
import FooterComponent from './FooterComponent.vue';
import ToggleArticleComponent from './ToggleArticleComponent.vue';

import topImage from "@/assets/img/top_project.png";
import projectImage_1 from "@/assets/img/project_bedroom_1.png";
import projectImage_2 from "@/assets/img/project_bedroom_2.png";
import projectImage_3 from "@/assets/img/project_bedroom_3.png";
import projectImage_4 from "@/assets/img/project_bedroom_4.png";
import projectImage_5 from "@/assets/img/project_bedroom_5.png";
import projectImage_6 from "@/assets/img/project_bedroom_6.png";
import projectImage_7 from "@/assets/img/project_living_1.png";
import projectImage_8 from "@/assets/img/project_bedroom_7.png";
import projectImage_9 from "@/assets/img/project_bathroom_1.png";
import projectImage_10 from "@/assets/img/project_bathroom_2.png";
import projectImage_11 from "@/assets/img/project_bathroom_3.png";
import projectImage_12 from "@/assets/img/project_bathroom_4.png";
import projectImage_13 from "@/assets/img/project_bathroom_5.png";
import projectImage_14 from "@/assets/img/project_bathroom_6.png";
import projectImage_15 from "@/assets/img/project_bathroom_7.png";
import projectImage_16 from "@/assets/img/project_bathroom_8.png";
import projectImage_17 from "@/assets/img/project_bathroom_9.png";
import projectImage_18 from "@/assets/img/project_living_2.png";
import projectImage_19 from "@/assets/img/project_living_3.png";
import projectImage_20 from "@/assets/img/project_living_4.png";
import projectImage_21 from "@/assets/img/project_living_5.png";
import projectImage_22 from "@/assets/img/project_living_6.png";
import projectImage_23 from "@/assets/img/project_living_7.png";
import projectImage_24 from "@/assets/img/project_living_8.png";
import projectImage_25 from "@/assets/img/project_kitchen_1.png";
import projectImage_26 from "@/assets/img/project_kitchen_2.png";
import projectImage_27 from "@/assets/img/project_kitchen_3.png";
import projectImage_28 from "@/assets/img/project_kitchen_4.png";
import projectImage_29 from "@/assets/img/project_kitchen_5.png";
import projectImage_30 from "@/assets/img/project_kitchen_6.png";
import projectImage_31 from "@/assets/img/project_kitchen_7.png";
import projectImage_32 from "@/assets/img/project_kitchen_8.png";


export default {
    components: {
        FooterComponent,
        ToggleArticleComponent,
    },

    data() {
        const project = [
            {
                tag: 'Bedroom',
                img: projectImage_1,
                title: 'Minimal Bedroom',
                route: 'Decor / Artchitecture',
            },
            {
                tag: 'Bedroom',
                img: projectImage_2,
                title: 'Classic Minimal Bedroom',
                route: 'Decor / Artchitecture',
            },
            {
                tag: 'Bedroom',
                img: projectImage_3,
                title: 'Minimal Bedroom table',
                route: 'Decor / Artchitecture',
            },
            {
                tag: 'Bedroom',
                img: projectImage_4,
                title: 'Modern Bedroom',
                route: 'Decor / Artchitecture',
            },
            {
                tag: 'Bedroom',
                img: projectImage_5,
                title: 'Minimal Bedroom',
                route: 'Decor / Artchitecture',
            },
            {
                tag: 'Bedroom',
                img: projectImage_6,
                title: 'Modern Bedroom',
                route: 'Decor / Artchitecture',
            },
            {
                tag: 'Living',
                img: projectImage_7,
                title: 'System Table',
                route: 'Decor / Artchitecture',
            },
            {
                tag: 'Bedroom',
                img: projectImage_8,
                title: 'Modern Bedroom',
                route: 'Decor / Artchitecture',
            },
            {
                tag: 'Bathroom',
                img: projectImage_9,
                title: 'Modern Bathroom',
                route: 'Decor / Artchitecture',
            },
            {
                tag: 'Bathroom',
                img: projectImage_10,
                title: 'Modern Bathroom',
                route: 'Decor / Artchitecture',
            },
            {
                tag: 'Bathroom',
                img: projectImage_11,
                title: 'Modern Bathroom',
                route: 'Decor / Artchitecture',
            },
            {
                tag: 'Bathroom',
                img: projectImage_12,
                title: 'Modern Bathroom',
                route: 'Decor / Artchitecture',
            },
            {
                tag: 'Bathroom',
                img: projectImage_13,
                title: 'Modern Bathroom',
                route: 'Decor / Artchitecture',
            },
            {
                tag: 'Bathroom',
                img: projectImage_14,
                title: 'Modern Bathroom',
                route: 'Decor / Artchitecture',
            },
            {
                tag: 'Bathroom',
                img: projectImage_15,
                title: 'Modern Bathroom',
                route: 'Decor / Artchitecture',
            },
            {
                tag: 'Bathroom',
                img: projectImage_16,
                title: 'Modern Bathroom',
                route: 'Decor / Artchitecture',
            },
            {
                tag: 'Bathroom',
                img: projectImage_17,
                title: 'Modern Bathroom',
                route: 'Decor / Artchitecture',
            },
            {
                tag: 'Living',
                img: projectImage_18,
                title: 'System Table',
                route: 'Decor / Artchitecture',
            },
            {
                tag: 'Living',
                img: projectImage_19,
                title: 'Modern Living Room',
                route: 'Decor / Artchitecture',
            },
            {
                tag: 'Living',
                img: projectImage_20,
                title: 'Modern Living Room',
                route: 'Decor / Artchitecture',
            },
            {
                tag: 'Living',
                img: projectImage_21,
                title: 'Modern Living Room',
                route: 'Decor / Artchitecture',
            },
            {
                tag: 'Living',
                img: projectImage_22,
                title: 'Modern Living Room',
                route: 'Decor / Artchitecture',
            },
            {
                tag: 'Living',
                img: projectImage_23,
                title: 'Modern Living Room',
                route: 'Decor / Artchitecture',
            },
            {
                tag: 'Living',
                img: projectImage_24,
                title: 'Modern Living Room',
                route: 'Decor / Artchitecture',
            },
            {
                tag: 'Kitchen',
                img: projectImage_25,
                title: 'Modern Kitchen',
                route: 'Decor / Artchitecture',
            },
            {
                tag: 'Kitchen',
                img: projectImage_26,
                title: 'Modern Kitchen',
                route: 'Decor / Artchitecture',
            },
            {
                tag: 'Kitchen',
                img: projectImage_27,
                title: 'Modern Kitchen',
                route: 'Decor / Artchitecture',
            },
            {
                tag: 'Kitchen',
                img: projectImage_25,
                title: 'Modern Kitchen',
                route: 'Decor / Artchitecture',
            },
            {
                tag: 'Kitchen',
                img: projectImage_26,
                title: 'Modern Kitchen',
                route: 'Decor / Artchitecture',
            },
            {
                tag: 'Kitchen',
                img: projectImage_27,
                title: 'Modern Kitchen',
                route: 'Decor / Artchitecture',
            },
            {
                tag: 'Kitchen',
                img: projectImage_28,
                title: 'Modern Kitchen',
                route: 'Decor / Artchitecture',
            },
            {
                tag: 'Kitchen',
                img: projectImage_29,
                title: 'Modern Kitchen',
                route: 'Decor / Artchitecture',
            },
            {
                tag: 'Kitchen',
                img: projectImage_30,
                title: 'Modern Kitchen',
                route: 'Decor / Artchitecture',
            },
            {
                tag: 'Kitchen',
                img: projectImage_31,
                title: 'Modern Kitchen',
                route: 'Decor / Artchitecture',
            },
            {
                tag: 'Kitchen',
                img: projectImage_32,
                title: 'Modern Kitchen',
                route: 'Decor / Artchitecture',
            },
        ]

        return {
            project: project,
            current: project,
            topImage,
        };
    },
    methods: {
        getProjectFiltered(tag) {
            this.current = this.project.filter(item => item.tag === tag);
        },
    },
}
</script>

<style lang="scss" scoped>
</style>
