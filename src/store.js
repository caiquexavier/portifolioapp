import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    checkoutProducts: [],
    checkoutCount: 0,
    checkoutAmount: 0
  },
  mutations: {
    increment (state) {
      state.checkoutCount++
    },
    decrement (state) {
      state.checkoutCount--
    },
    addProduct (state, item) {
      state.checkoutProducts.push(item)
    },
    updateAmount (state, amount) {
      state.checkoutAmount = state.checkoutAmount + amount
    }
  }
})
