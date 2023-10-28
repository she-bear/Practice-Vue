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

        <section class="main center">
            <img :src="mainImage" alt="Main top image">
            <div class="main__content">
                <h2 class="main__content__title">Let Your Home Be Unique</h2>
                <h3 class="main__content__subtitle">There are many variations of the passages of lorem Ipsum fromavailable,
                    majority.</h3>
                <button class="main__content__button">Get Started
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                        <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
                            stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </section>

        <section class="projects center">
            <h2 class="projects__title">Follow Our Projects</h2>
            <p class="projects__text">It is a long established fact that a reader will be distracted by the of readable
                content of page lookings at its layouts points.</p>
            <div class="projects__content">
                <article v-for="(project, index) in projects" :key="index" class="projects__item">
                    <img :src="project.img" alt="Project image">
                    <div class="projects__item__content">
                        <div class="projects__item__content__text">
                            <h3 class="projects__item__content__title">{{ project.title }}</h3>
                            <p class="projects__item__content__subtitle">{{ project.route }}</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                </article>
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
                <article v-for="(article, index) in article" :key="index" class="articles__item">
                    <img :src="article.img" alt="Article photo">
                    <h3 class="articles__item__title">{{ article.title }}</h3>
                    <div class="articles__item__bottom">
                        <p class="articles__item__data">{{ article.date }}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                            <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                            <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </article>
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

import mainImage from "@/assets/img/main_image.png";
import projectImage_1 from "@/assets/img/project_photo1.png";
import projectImage_2 from "@/assets/img/project_photo2.png";
import projectImage_3 from "@/assets/img/project_photo3.png";
import projectImage_4 from "@/assets/img/project_photo4.png";
import articleImage_1 from "@/assets/img/article_photo1.png";
import articleImage_2 from "@/assets/img/article_photo2.png";
import articleImage_3 from "@/assets/img/article_photo3.png";
import twitterIcon from "@/assets/img/twitter_icon.svg";
import inIcon from "@/assets/img/in_icon.svg";


export default {
    data() {
        const projects = [
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
            projects: projects,
            statistic: statistic,
            article: article,
            twitterIcon,
            inIcon,
        }
    },

}
</script>

<style lang="scss" scoped>
</style>
