<template>
  <!-- <BookListComponent /> -->
  <MovieListComponent />
</template>

<script>
import BookListComponent from './components/BookListComponent.vue';
import MovieListComponent from './components/MovieListComponent.vue';


export default {
  name: 'App',
  components: {
    BookListComponent,
    MovieListComponent
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
