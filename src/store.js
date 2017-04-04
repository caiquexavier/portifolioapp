import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios)

export const store = new Vuex.Store({
  state: {
    // App props
    loading: false,
    checkoutCount: 0,
    checkoutAmount: 0,
    // Moip Integration props
    config: {
      headers: {
        'Authorization': 'Basic ' + btoa('01010101010101010101010101010101' + ':' + 'ABABABABABABABABABABABABABABABABABABABAB')
      }
    },
    // Order Api
    orderApi: 'https://sandbox.moip.com.br/v2/orders',
    order: {
      ownId: 1,
      amount: {
        currency: 'BRL',
        subtotals: {
          addition: 0,
          discount: 0
        }
      },
      items: [],
      costumer: {
        ownId: 1,
        fullname: null,
        email: null,
        birthDate: null,
        taxDocument: {
          type: null,
          number: null
        },
        phone: {
          countryCode: 55,
          areaCode: 11,
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
    createdOrder: false,
    createdOrderObj: {},
    orderId: null,
    // Payment Api
    paymentApi: null,
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
    // Set Getters For External Access to Props
    loading (state) {
      return state.loading
    },
    costumer (state) {
      return state.order.costumer
    },
    items (state) {
      return state.order.items
    },
    checkoutAmount (state) {
      return state.checkoutAmount
    },
    createdOrder (state) {
      return state.createdOrder
    }
  },
  mutations: {
    // Sets App Loader
    loader (state, value) {
      state.loading = value
    },
    // Updates Order Costumer Obj
    updateCostumer (state, costumer) {
      state.order.costumer = costumer
    },
    // Updates Order Item Obj
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
    // Updates Order Item Obj
    removeProduct (state, index) {
      state.order.items.splice(index, 1)
    },
    // Updates Cart Total Amount
    updateAmount (state, amount) {
      state.checkoutAmount = state.checkoutAmount + amount
    },
    // Updates Cart Total Amount
    updateAmountSubtract (state, amount) {
      state.checkoutAmount = state.checkoutAmount - amount
    },
    // Applys Discount to order
    applyDiscount (state, discountAmount) {
      state.checkoutAmount = state.checkoutAmount - discountAmount
      state.order.amount.discount = discountAmount
    },
    // Applys Addtion to Order
    applyAddition (state, additionAmount) {
      state.checkoutAmount = state.checkoutAmount + additionAmount
      state.order.amount.addition = additionAmount
    },
    // Creates Order from Api Response
    createOrder (state, responseData) {
      state.createdOrder = true
      state.order_id = responseData.id
      state.createdOrderObj = responseData
      state.paymentApi = 'https://sandbox.moip.com.br/v2/orders/' + responseData.id + '/payments'
    },
    // Increments Cart Counter
    increment (state) {
      state.checkoutCount++
    },
    // Drcrements Cart Counter
    decrement (state) {
      state.checkoutCount--
    }
  },
  actions: {
    orderApiCall (context) {
      context.commit('loader', true)
      axios.post(context.state.orderApi, context.state.order, context.state.config).then(function (response) {
        context.commit('createOrder', response.data)
        context.commit('loader', false)
      }).catch(function (error) {
        console.log(error.response)
        context.commit('loader', false)
      })
    }
  }
})
