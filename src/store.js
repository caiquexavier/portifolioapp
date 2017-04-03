import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    // App props
    checkoutCount: 0,
    checkoutAmount: 0,

    // Moip Integration props
    orderId: null,
    order: {
      ownId: null,
      amount: {
        currency: 'BLR',
        subtotals: {
          addition: 0,
          discount: 0
        }
      },
      items: [],
      costumer: {
        ownId: null,
        fullname: null,
        email: null,
        birthDate: null,
        taxDocument: {
          type: null,
          number: null
        },
        phone: {
          countryCode: null,
          areaCode: null,
          number: null
        },
        shippingAddress: {
          street: null,
          streetNumber: null,
          complement: null,
          district: null,
          city: null,
          state: null,
          country: null,
          zipCode: null
        }
      }
    },

    payment: {
      installmentCount: 1,
      statementDescriptor: 'kuikaStore.com',
      fundingInstrument: {
        method: 'CREDIT_CARD',
        creditCard: {
          hash: null,
          store: true,
          holder: {
            fullname: null,
            birthdate: null,
            taxDocument: {
              type: 'CPF',
              number: null
            },
            phone: {
              countryCode: null,
              areaCode: null,
              number: null
            }
          }
        }
      }
    }
  },
  getters: {
    costumer (state) {
      return state.order.costumer
    }
  },
  mutations: {
    updateCostumer (state, costumer) {
      state.order.costumer = costumer
    },
    addProductToOrder (state, product) {
      const item = {
        product: null,
        quantity: 1,
        detail: null,
        price: null
      }
      item.product = product.name
      item.detail = product.local
      item.price = product.price
      state.order.items.push(item)
    },
    removeProduct (state, index) {
      state.cartItems.splice(index, 1)
    },
    increment (state) {
      state.checkoutCount++
    },
    decrement (state) {
      state.checkoutCount--
    },
    updateAmount (state, amount) {
      state.checkoutAmount = state.checkoutAmount + amount
    },
    updateAmountSubtract (state, amount) {
      state.checkoutAmount = state.checkoutAmount - amount
    }
  }
})
