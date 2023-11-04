<template>
  <h2>Counter</h2>
  <h3>Count: {{ count }}</h3>
  <button @click="INCREMENT">+++</button>
  <button @click="DECREMENT">---</button>

  <hr>

  <div>
    <h2>Корзина</h2>
    <ul>
      <li v-for="(item, index) in cartItems" :key="index">
        {{ item.name }} - {{ item.price }}
      </li>
    </ul>

    <p>Товаров в корзине: {{ totalItems }}</p>
    <p>Общая стоимость: {{ totalPrice }}</p>

    <button @click="addToCart({ id: 1, name: 'Товар', price: 10 })">
      Добавить в корзину</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState(['count']),
    ...mapGetters(['cartItems', 'totalItems', 'totalPrice']),
  },
  methods: {
    ...mapMutations(['INCREMENT', 'DECREMENT']),
    ...mapActions(['addToCart']),
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
