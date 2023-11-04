import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    cart: [],
  },
  getters: {
    cartItems(state) {
      return state.cart;
    },

    totalItems(state) {
      return state.cart.length;
    },

    totalPrice(state) {
      return state.cart.reduce((total, item) => total + item.price, 0);
    }
  },
  mutations: {
    INCREMENT(state) {
      state.count++;
    },
    // другой способ вызова
    // increment({ count }) {
    //   count++;
    // }
    DECREMENT(state) {
      state.count--;
    },
    ADD_ITEM_TO_CART(state, item) {
      state.cart.push(item);
    }
  },
  actions: {
    addToCart(context, item) {
      // метод commit вызовет мутацию и передаст в неё данные из компонента
      context.commit('ADD_ITEM_TO_CART', item);
    }
  },
  modules: {
  }
})
