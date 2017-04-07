<template>
  <div id="checkout">

      <div class="row page-header">
        <div class="col-sm-2">
          <router-link to="/address">
            <button class="btn-back">
              <i class="fa fa-angle-left" aria-hidden="true"></i>
            </button>
          </router-link>
        </div>

        <div class="col-sm-10">
          <div class="header-info">
            <i class="fa fa-check-square-o" aria-hidden="true"></i>
            <span>{{pageTitle}}</span>
          </div>
        </div>
      </div>
      <br/>

      <div class="row">

          <div class="col-sm-12">
            <table class="table table-striped">
              <tr>
                <th>Item</th>
                <th>Detail</th>
                <th>Price</th>
                <th></th>
              </tr>
              <tbody>
                <tr v-for="(item, index) in items">
                  <td>{{index}} - {{ item.product }}</td>
                  <td>{{ item.detail }}</td>
                  <td>{{ item.price | currency }}</td>
                  <td><button class="btn-custom-remove" v-on:click="remove(index, item.price)"><i class="fa fa-times" aria-hidden="true"></i></button></td>
                </tr>
            </tbody>
            </table>
          </div>

      </div>

      <div class="row">
        <div class="col-sm-8 header-checkout">
          <h3>Discount Coupon (-5%)</h3>
        </div>
        <div class="col-sm-3">
          <input v-model="discount" class="input-custom" type="text" placeholder="Cumpom code"></input>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-8 header-checkout">
          <h3>Payment (+2,5% for installments )</h3>
        </div>
        <div class="col-sm-3">
          <select v-model="addition" class="select-custom">
            <option value="cash" selected>Cash</option>
            <option value="installment">Installment</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-8 header-total">
          <h1>Total Order: </h1>
        </div>
        <div class="col-sm-4 amount-total">
          <h1>{{ updatedAmount | currency }}</h1>
        </div>
      </div>


      <div class="row">
        <div class="col-sm-12">
          <p style="height:200px;">Some Info</p>
        </div>
      </div>
      <footer class="footer">
        <div class="col-sm-6">
          <router-link to="/">
            <button type="button" class="btn-checkout">
              <i class="fa fa-home" aria-hidden="true"></i>
            </button>
          </router-link>
        </div>
        <div class="col-sm-6">
            <button type="button" v-on:click="processOrderCheckout" class="btn-checkout btn-featured">
              <span>Checkout</span>
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              <i class="fa fa-angle-double-right" aria-hidden="true"></i>
            </button>
        </div>
      </footer>

  </div>
</template>

<script>
export default {
  name: 'checkout',
  data () {
    return {
      pageTitle: 'Checkout your Order',
      addition: 'cash',
      additionAmount: 0,
      discount: '',
      discountAmount: 0
    }
  },
  methods: {
    remove (index, itemPrice) {
      this.$store.commit('removeProduct', index)
      this.$store.commit('updateAmountSubtract', itemPrice)
    },
    // Process the order
    processOrderCheckout () {
      this.$store.commit('applyDiscount', this.discountAmount)
      this.$store.commit('applyAddition', this.additionAmount)
      this.$router.push('/payment')
      this.$store.dispatch('orderApiCall')
    }
  },
  watch: {
    // Aplly discount if getts a cupom
    discount () {
      if (this.discount.length === 5) {
        this.discountAmount = this.checkoutAmount * 0.05
      }
    },
    // Apply adition if payment is installment
    addition () {
      if (this.addition === 'installment') {
        this.additionAmount = this.checkoutAmount * 0.025
      }
    }
  },
  computed: {
    // Gets items from order store
    items () {
      return this.$store.getters.items
    },
    // Gets Checkout Amount from store
    checkoutAmount () {
      return this.$store.getters.checkoutAmount
    },
    // Updates Local Total Order Amount
    updatedAmount () {
      return this.checkoutAmount + this.additionAmount - this.discountAmount
    },
    // Gets Created Order from store
    createdOrder () {
      return this.$store.getters.createdOrder
    }

  }
}
</script>

<style>
.table{
  border: 0px;
}
.table-striped>tbody>tr:nth-child(odd)>td,
.table-striped>tbody>tr:nth-child(odd)>th {
  padding: 30px;
  text-align: left;
  font-size: 20px;
  background-color: #fcfcfc;
  border: 0px;
}
 .table-striped>tbody>tr:nth-child(even)>td,
 .table-striped>tbody>tr:nth-child(even)>th {
  padding: 30px;
  text-align: left;
  font-size: 20px;
  background-color: white;
  border: 0px;
}
th{
  padding: 30px;
  font-size: 30px;
  font-weight: lighter;
  color: #02b387;
}
.header-checkout{
  text-align: right;
  color: #02b387;
}
.header-total{
  text-align: right;
  font-weight: bolder;
  color: #02b387;
}
.select-custom{
  margin-top: 15px;
  padding: 10px;
  width: 100%;
  line-height: 30px;
  font-size: 20px;
  border: 0px;
  border-bottom: solid 2px #c9c9c9;
}
.amount-total{
  text-align: left;
  font-weight: bolder;
  color: #02b387;
}.
.btn-custom-remove{
  font-size: 50px;
  border: 0px;
  color: #313131;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
.btn-custom-remove:hover{
  transition: all 0.2s ease 0s;
  color: #02b387;
}
</style>
