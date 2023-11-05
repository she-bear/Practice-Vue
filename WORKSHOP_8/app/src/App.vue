<template>
  <NavigationComponent />
  <router-view />
</template>
<script>
import NavigationComponent from './components/NavigationComponent.vue';
export default {
  components: {
    NavigationComponent,
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
}
</style>
