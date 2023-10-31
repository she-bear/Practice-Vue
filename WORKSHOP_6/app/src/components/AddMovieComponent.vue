<template>
    <!-- prevent отменит стандартное поведение submit -->
    <form @submit.prevent="createMovie">
        <input type="text" placeholder="Movie title" v-model="title">
        <input type="text" placeholder="Movie author" v-model="author">
        <input type="number" placeholder="Movie year" v-model="year">
        <button>Submit</button>
    </form>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
    emits: [
        'add-movie',
    ],
    data() {
        return {
            title: '',
            author: '',
            year: 0,
        }
    },
    methods: {
        createMovie() {
            const newMovie = {
                // способ создать уникальный ключ
                id: uuidv4(),
                title: this.title,
                author: this.author,
                year: this.year,
            };
            this.$emit('add-movie', newMovie);
            this.title = '';
            this.author = '';
            this.year = 0;
        }
    },
}
</script>

<style lang="scss" scoped>
</style>
