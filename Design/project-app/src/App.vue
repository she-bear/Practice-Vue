<template>
  <MainPageComponent />
  <BlogComponent />
</template>

<script>
import MainPageComponent from './components/MainPageComponent.vue';
import BlogComponent from './components/BlogComponent.vue';


export default {
  name: 'App',
  components: {
    MainPageComponent,
    BlogComponent,
  }
}
</script>

<style lang="scss">
</style>
