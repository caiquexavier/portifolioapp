import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {

    cartItems: [],
    checkoutCount: 0,
    checkoutAmount: 0,

    moipOrder: {
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

    moipPayment: {
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
    },
    moipOrderId: null
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
