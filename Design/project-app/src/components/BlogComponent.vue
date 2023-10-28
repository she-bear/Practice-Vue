<template>
    <div>
        <header class="header center">
            <div class="logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <path
                        d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
                        fill="#CDA274" />
                </svg>
                <a href="index.html" class="logo__title">Interno</a>
            </div>
            <nav class="header__right">
                <a href="#" class="header__right__item">Home</a>
                <a href="#" class="header__right__item">Project</a>
                <a href="#" class="header__right__item">Blog</a>
            </nav>
        </header>

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
                <article v-for="(article, index) in article" :key="index" class="articles__item">
                    <img :src="article.img" alt="Article photo">
                    <h3 class="articles__item__title">{{ article.title }}</h3>
                    <div class="articles__item__bottom">
                        <p class="articles__item__data">{{ article.date }} </p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                            <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                            <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </article>
            </div>
            <div class="articles__pagination">
                <img :src="paginationImage_1" alt="pagination icon">
                <img :src="paginationImage_2" alt="pagination icon">
                <img :src="paginationImage_3" alt="pagination icon">
                <img :src="paginationImage_more" alt="pagination icon">
            </div>
        </section>

        <footer class="footer center">
            <div class="footer__column">
                <div class="logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                        <path
                            d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
                            fill="#CDA274" />
                    </svg>
                    <a href="index.html" class="logo__title">Interno</a>
                </div>
                <p class="footer__text">It is a long established fact that a reader will be distracted lookings.</p>
                <div class="footer__icons">
                    <img :src="twitterIcon" alt="Twitter icon">
                    <img :src="inIcon" alt="IN icon">
                </div>
            </div>
            <div class="footer__column footer__column_shifted">
                <p class="footer__title">Pages</p>
                <a href="" class="footer__text">Home</a>
                <a href="" class="footer__text">Project</a>
                <a href="" class="footer__text">Blog</a>
            </div>
            <div class="footer__column footer__column_shifted">
                <p class="footer__title">Contact</p>
                <p class="footer__text">55 East Birchwood Ave. Brooklyn, New York 11201</p>
                <p class="footer__text">contact@interno.com</p>
                <p class="footer__text">(123) 456 - 7890</p>
            </div>
        </footer>
    </div>
</template>

<script>

import topImage from "@/assets/img/top_blog.png";
import latestPostImage from "@/assets/img/latest_post_image.png";
import articleImage_1 from "@/assets/img/article_photo1.png";
import articleImage_2 from "@/assets/img/article_photo2.png";
import articleImage_3 from "@/assets/img/article_photo3.png";
import articleImage_4 from "@/assets/img/article_photo4.png";
import articleImage_5 from "@/assets/img/article_photo5.png";
import articleImage_6 from "@/assets/img/article_photo6.png";
import paginationImage_1 from "@/assets/img/pagination_01.svg";
import paginationImage_2 from "@/assets/img/pagination_02.svg";
import paginationImage_3 from "@/assets/img/pagination_03.svg";
import paginationImage_more from "@/assets/img/pagination_more.svg";
import twitterIcon from "@/assets/img/twitter_icon.svg";
import inIcon from "@/assets/img/in_icon.svg";

export default {
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
            twitterIcon,
            inIcon,
            paginationImage_1,
            paginationImage_2,
            paginationImage_3,
            paginationImage_more,
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
