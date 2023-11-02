<template>
  <MainPageComponent />
  <BlogComponent />
  <ProjectComponent />
</template>

<script>
import MainPageComponent from './components/MainPageComponent.vue';
import BlogComponent from './components/BlogComponent.vue';
import ProjectComponent from './components/ProjectComponent.vue';


export default {
  name: 'App',
  components: {
    MainPageComponent,
    BlogComponent,
    ProjectComponent
  }
}
</script>

<style lang="scss">
</style>
