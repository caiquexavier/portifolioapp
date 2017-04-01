import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    cartItems: [],
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
      state.cartItems.push(item)
    },
    removeProduct (state, index) {
      state.cartItems.splice(index, 1)
    },
    updateAmount (state, amount) {
      state.checkoutAmount = state.checkoutAmount + amount
    },
    updateAmountSubtract (state, amount) {
      state.checkoutAmount = state.checkoutAmount - amount
    }
  }
})
