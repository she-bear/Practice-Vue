<template>
  <h1>Hello Vue!</h1>
  <HelloComponent />
  <WorkGallary />
</template>

<script>
import HelloComponent from './components/HelloComponent.vue';
import WorkGallary from './components/WorkGallary.vue';

export default {
  components: {
    HelloComponent,
    WorkGallary,
  }
}
</script>

<style lang="scss">
</style>
