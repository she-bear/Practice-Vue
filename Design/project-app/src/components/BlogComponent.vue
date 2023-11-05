<template>
    <section class="blog__top">
        <img :src="topImage" alt="Top blog image">
        <div class="blog__top__intro">
            <h2 class="blog__top__title">Articles &amp; News</h2>
            <p class="blog__top__text">Home / Blog</p>
        </div>
    </section>

    <section class="latest__post center">
        <h2 class="latest__post__title">Latest Post</h2>
        <div class="latest__post__content">
            <img :src="latestPostImage" alt="Latest post image">
            <div class="latest__post__left">
                <h3 class="latest__post__subtitle">Low Cost Latest Invented Interior Designing Ideas</h3>
                <p class="latest__post__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpisdignissim maximus.posuere in.Contrary to popular belief.</p>
                <p class="latest__post__text">Lorem Ipsum is not simply random text. It has roots in a piece of
                    classica.</p>
                <div class="latest__post__bottom">
                    <p class="latest__post__data">26 December, 2022 </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                        <circle cx="26" cy="26.5" r="26" fill="#F4F0EC" />
                        <path d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141" stroke="#292F36" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    </section>

    <section class="articles center">
        <h2 class="articles__title">Articles &amp; News</h2>
        <div class="articles__content">
            <ArticleComponent v-for="(article, index) in article" :key="index" :article="article" />
        </div>
    </section>

    <FooterComponent />
</template>

<script>

import FooterComponent from "./FooterComponent.vue";

import topImage from "@/assets/img/top_blog.png";
import latestPostImage from "@/assets/img/latest_post_image.png";
import articleImage_1 from "@/assets/img/article_photo1.png";
import articleImage_2 from "@/assets/img/article_photo2.png";
import articleImage_3 from "@/assets/img/article_photo3.png";
import articleImage_4 from "@/assets/img/article_photo4.png";
import articleImage_5 from "@/assets/img/article_photo5.png";
import articleImage_6 from "@/assets/img/article_photo6.png";
import ArticleComponent from "./ArticleComponent.vue";

export default {
    components: {
        FooterComponent,
        ArticleComponent
    },
    data() {
        const article = [
            {
                img: articleImage_1,
                title: 'Let’s Get Solution For Building Construction Work',
                date: '26 December, 2022'
            },
            {
                img: articleImage_2,
                title: 'Low Cost Latest Invented Interior Designing Ideas.',
                date: '22 December, 2022'
            },
            {
                img: articleImage_3,
                title: 'Best For Any Office & Business Interior Solution',
                date: '25 December, 2022'
            },
            {
                img: articleImage_4,
                title: 'Let’s Get Solution For Building Construction Work',
                date: '26 December, 2022'
            },
            {
                img: articleImage_5,
                title: 'Low Cost Latest Invented Interior Designing Ideas.',
                date: '22 December, 2022'
            },
            {
                img: articleImage_6,
                title: 'Best For Any Office & Business Interior Solution',
                date: '25 December, 2022'
            }
        ]

        return {
            article: article,
            topImage,
            latestPostImage,
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
