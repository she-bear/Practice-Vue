<template>
  <!-- значение isAuth будет принято в самом компоненте -->
  <AuthComponent :isAuth="false" />
</template>
<script>

import AuthComponent from './components/AuthComponent.vue';

export default {
  name: 'App',
  components: {
    AuthComponent,
  }
}
</script>

<style lang="scss">
</style>
