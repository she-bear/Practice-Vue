<template>
    <HeaderComponent />

    <section class="main center">
        <img :src="mainImage" alt="Main top image">
        <div class="main__content">
            <h2 class="main__content__title">Let Your Home Be Unique</h2>
            <h3 class="main__content__subtitle">There are many variations of the passages of lorem Ipsum fromavailable,
                majority.</h3>
            <button class="main__content__button">Get Started
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                    <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887" stroke="#CDA274"
                        stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                </svg>
            </button>
        </div>
    </section>

    <section class="projects center">
        <h2 class="projects__title">Follow Our Projects</h2>
        <p class="projects__text">It is a long established fact that a reader will be distracted by the of readable
            content of page lookings at its layouts points.</p>
        <div class="projects__content">
            <FollowComponent v-for="(project, index) in project" :key="index" :project="project" />
        </div>
    </section>

    <section class="statistic center">
        <div v-for="(stat, index) in statistic" :key="index" class="statistic__item">
            <div class="statistic__content">
                <h2 class="statistic__number">{{ stat.number }}</h2>
                <p class="statistic__text">{{ stat.text }}</p>
            </div>
            <div v-if="index < 3" class="statistic__line"></div>
        </div>
    </section>

    <section class="articles center">
        <h2 class="articles__title">Articles & News</h2>
        <p class="articles__text">It is a long established fact that a reader will be distracted by the of readable
            content of a page when lookings at its layouts the points of using.</p>
        <div class="articles__content">
            <ArticleComponent v-for="(article, index) in article" :key="index" :article="article" />
        </div>
    </section>

    <FooterComponent />
</template>

<script>

import HeaderComponent from "./HeaderComponent.vue";
import FooterComponent from "./FooterComponent.vue";
import ArticleComponent from "./ArticleComponent.vue";
import FollowComponent from "./FollowComponent.vue";

import mainImage from "@/assets/img/main_image.png";
import projectImage_1 from "@/assets/img/project_photo1.png";
import projectImage_2 from "@/assets/img/project_photo2.png";
import projectImage_3 from "@/assets/img/project_photo3.png";
import projectImage_4 from "@/assets/img/project_photo4.png";
import articleImage_1 from "@/assets/img/article_photo1.png";
import articleImage_2 from "@/assets/img/article_photo2.png";
import articleImage_3 from "@/assets/img/article_photo3.png";


export default {
    components: {
        HeaderComponent,
        FooterComponent,
        ArticleComponent,
        FollowComponent,
    },
    data() {
        const project = [
            {
                id: 1,
                img: projectImage_1,
                title: "Modern Kitchen",
                route: "Decor / Artchitecture",
            },
            {
                id: 2,
                img: projectImage_2,
                title: "Modern Kitchen",
                route: "Decor / Artchitecture",
            },
            {
                id: 3,
                img: projectImage_3,
                title: "Modern Kitchen",
                route: "Decor / Artchitecture",
            },
            {
                id: 4,
                img: projectImage_4,
                title: "Modern Kitchen",
                route: "Decor / Artchitecture",
            },
        ]

        const statistic = [
            {
                number: "12",
                text: "Years Of Experiance",
            },
            {
                number: "85",
                text: "Success Project",
            },
            {
                number: "15",
                text: "Active Project",
            },
            {
                number: "95",
                text: "Happy Customers",
            },

        ]

        const article = [
            {
                img: articleImage_1,
                title: 'Let’s Get Solution For Building Construction Work',
                date: '26 December, 2022',
            },
            {
                img: articleImage_2,
                title: 'Low Cost Latest Invented Interior Designing Ideas',
                date: '22 December, 2022',
            },
            {
                img: articleImage_3,
                title: 'Best For Any Office & Business Interior Solution',
                date: '23 December, 2022',
            },
        ]

        return {
            mainImage,
            project: project,
            statistic: statistic,
            article: article,
        }
    },

}
</script>

<style lang="scss" scoped>
</style>
