import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
  },
  getters: {
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
  },
  actions: {
  },
  modules: {
  }
})
