<template>
    <BookComponent v-for="book in booksArray" :key="book.id" :book="book" />
</template>

<script>
import BookComponent from './BookComponent.vue';

export default {
    data() {
        return {
            booksArray: [
                {
                    id: 0,
                    title: 'Book1',
                    author: 'Author 1',
                    year: 2001,
                    pages: 125,
                },
                {
                    id: 1,
                    title: 'Book2',
                    author: 'Author 2',
                    year: 2005,
                    pages: 1345,
                },
                {
                    id: 2,
                    title: 'Book3',
                    author: 'Author 3',
                    year: 1975,
                    pages: 340,
                }
            ]
        };
    },
    components: { BookComponent }
}
</script>

<style lang="scss" scoped>
</style>
