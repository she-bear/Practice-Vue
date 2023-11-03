<template>
    <article class="projects__item">
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
</template>

<script>
export default {
    props: {
        project: Object,
    }
}
</script>

<style lang="scss" scoped>
</style>
