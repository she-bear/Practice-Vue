<template>
    <article class="project__content__item">
        <img :src="article.img" alt="Project photo" @click="toggleFavourite">
        <svg class="project__content__favourite" :class="favourite ? '' : 'unfavourite'" width="36" height="35"
            viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_993_142)">
                <path
                    d="M16.0992 1.80951C16.7004 -0.0279021 19.2996 -0.0279021 19.9008 1.80951L21.7983 7.60879C22.0673 8.43084 22.8342 8.98685 23.6992 8.98685H29.8097C31.7506 8.98685 32.5539 11.4732 30.98 12.6088L26.0604 16.1581C25.3546 16.6674 25.0591 17.5748 25.3298 18.402L27.2146 24.1623C27.8166 26.0025 25.7137 27.539 24.1435 26.4062L19.1702 22.818C18.4715 22.3139 17.5285 22.3139 16.8298 22.818L11.8565 26.4062C10.2863 27.539 8.18335 26.0025 8.78545 24.1623L10.6702 18.402C10.9409 17.5748 10.6454 16.6674 9.93955 16.1581L5.02004 12.6088C3.44611 11.4732 4.24942 8.98685 6.19025 8.98685H12.3008C13.1658 8.98685 13.9327 8.43084 14.2017 7.60879L16.0992 1.80951Z"
                    fill="#FFA928" />
            </g>
        </svg>

        <div class="projects__item__content">
            <div class="projects__item__content__text">
                <h3 class="projects__item__content__title">{{ article.title }}</h3>
                <p class="projects__item__content__subtitle">{{ article.route }}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </div>
    </article>
</template>

<script>
export default {
    data() {
        return {
            favourite: true,
        };
    },
    methods: {
        toggleFavourite() {
            this.favourite = !this.favourite;
            console.log(this.favourite);
        }
    },
    props: {
        article: Object,
    }
}
</script>

<style lang="scss" scoped>
</style>
