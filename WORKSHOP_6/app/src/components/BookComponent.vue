<template>
    <div>
        <h2>{{ book.title }}</h2>
        <p>{{ book.author }}</p>
        <button @click="toggleBtn">{{ showBtn ? "Hide details" : "Show details" }}</button>
        <div v-if="showBtn">
            <p>{{ book.year }}</p>
            <p>{{ book.pages }}</p>
        </div>
    </div>
</template>

<script>
export default {
    // имя компонента (будет отображаться во Vue Devtools)
    name: "Book",
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
        book: Object,
    },
}
</script>

<style lang="scss" scoped>
</style>
