<template>
  <h2>Counter</h2>
  <h3>Count: {{ count }}</h3>
  <button @click="INCREMENT">+++</button>
  <button @click="DECREMENT">---</button>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapMutations(['INCREMENT', 'DECREMENT'])
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
