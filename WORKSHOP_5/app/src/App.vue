<template>
  <!-- значение isAuth будет принято в самом компоненте -->
  <AuthComponent :isAuth="false" />
  <hr>
  <UserListComponent />
  <hr>
  <MortageCalculatorComponent />
</template>
<script>

import AuthComponent from './components/AuthComponent.vue';
import MortageCalculatorComponent from './components/MortageCalculatorComponent.vue';
import UserListComponent from './components/UserListComponent.vue';

export default {
  name: 'App',
  components: {
    AuthComponent,
    UserListComponent,
    MortageCalculatorComponent
  }
}
</script>

<style lang="scss">
</style>
