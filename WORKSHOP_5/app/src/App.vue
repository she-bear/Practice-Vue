<template>
  <!-- значение isAuth будет принято в самом компоненте -->
  <AuthComponent :isAuth="false" />
  <hr>
  <UserListComponent />
</template>
<script>

import AuthComponent from './components/AuthComponent.vue';
import UserListComponent from './components/UserListComponent.vue';

export default {
  name: 'App',
  components: {
    AuthComponent,
    UserListComponent,
  }
}
</script>

<style lang="scss">
</style>
