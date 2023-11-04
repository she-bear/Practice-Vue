<template>
    <HeaderComponent />

    <section class="lost__page center">
        <div class="lost__page__content">
            <p class="lost__page__title">404</p>
            <p class="lost__page__subtitle">We are sorry, but the page
                you requested was not found</p>
            <button class="main__content__button">Back To Home
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                    <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887" stroke="#CDA274"
                        stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                </svg>
            </button>
        </div>
        <img :src="lostImage" alt="Lost Image">
    </section>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import lostImage from "@/assets/img/lost_page.png";

export default {
    components: { HeaderComponent },
    data() {
        return {
            lostImage,
        }
    },
}
</script>

<style lang="scss" scoped>
.lost__page {
    display: flex;
    gap: 100px;
    align-items: center;

    &__content {
        display: flex;
        flex-direction: column;
        gap: 25px;
        align-items: flex-start;
    }

    &__title {
        color: #CDA274;
        font-family: DM Serif Display;
        font-size: 250px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
    }

    &__subtitle {
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 35px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.35px;
    }
}
</style>
