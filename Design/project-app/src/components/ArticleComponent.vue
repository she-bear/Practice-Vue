<template>
    <article class="articles__item">
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
</template>

<script>
export default {
    props: {
        article: Object,
    }
}
</script>

<style lang="scss" scoped>
</style>
