<template>
    <div>
        <h2>{{ movie.title }}</h2>
        <p>{{ movie.author }}</p>
        <button @click="toggleBtn">{{ showBtn ? "Hide details" : "Show details" }}</button>
        <div v-if="showBtn">
            <p>{{ movie.year }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "MovieInfo",
    data() {
        return {
            showBtn: false,
        };
    },
    methods: {
        toggleBtn() {
            this.showBtn = !this.showBtn;
        }
    },
    props: {
        movie: Object,
    },
}
</script>

<style lang="scss" scoped>
</style>
