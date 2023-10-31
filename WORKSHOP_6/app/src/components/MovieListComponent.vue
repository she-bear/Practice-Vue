<template>
    <MovieInfoComponent v-for="movie in movieArray" :key="movie.id" :movie="movie" />
    <AddMovieComponent @add-movie="addMovie" />
</template>

<script>
import AddMovieComponent from './AddMovieComponent.vue';
import MovieInfoComponent from './MovieInfoComponent.vue';
import { v4 as uuidv4 } from 'uuid';

export default {
    data() {
        return {
            movieArray: [
                {
                    id: uuidv4(),
                    title: 'Movie 1',
                    author: 'Author 1',
                    year: 2001,
                },
                {
                    id: uuidv4(),
                    title: 'Movie 2',
                    author: 'Author 2',
                    year: 2005,
                },
                {
                    id: uuidv4(),
                    title: 'Movie 3',
                    author: 'Author 3',
                    year: 1975,
                }
            ]
        };
    },
    methods: {
        addMovie(movie) {
            this.movieArray.push(movie);
        }
    },
    components: { MovieInfoComponent, AddMovieComponent }
}
</script>

<style lang="scss" scoped>
</style>
