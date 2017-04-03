<template>
  <div class="checkoutView">
    <div class="modal fade" id="checkoutModal" tabindex="-1" role="dialog" aria-labelledby="checkoutModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content modal-custom">
          <div class="modal-header modal-header-custom">
            <button type="button" class="close close-custom" data-dismiss="modal" aria-label="Close">
              <i class="fa fa-times" aria-hidden="true"></i>
            </button>
            <h1 class="modal-title" id="checkoutModalLabel" v-if="checkoutStep==0"><span><i class="fa fa-user-o" aria-hidden="true"></i></span> Your personal information</h1>
            <h1 class="modal-title" id="checkoutModalLabel" v-if="checkoutStep==1"><span><i class="fa fa-home" aria-hidden="true"></i></span> Where we deliver?</h1>
            <h1 class="modal-title" id="checkoutModalLabel" v-if="checkoutStep==2"><span><i class="fa fa-usd" aria-hidden="true"></i></span> Payment</h1>
            <h1 class="modal-title" id="checkoutModalLabel" v-if="checkoutStep==3"><span><i class="fa fa-check-circle-o" aria-hidden="true"></i></span> Have a nice time trip!</h1>

          </div>
          <div class="modal-body">

            <div class="row" v-if="checkoutStep==0">
              <h2>Dados Cliente</h2>
            </div>

            <div class="row" v-if="checkoutStep==1">
              <h2>Endereço</h2>
            </div>

            <div class="row" v-if="checkoutStep==2">
              <h2>Dados Pagamento</h2>
            </div>

            <div class="row" v-if="checkoutStep==3">
              <h2>Sucesso</h2>
            </div>
            <div id="cart" class="row cart">
              <div class="col-sm-8">
                <div class="cart-items" v-for="(item, index) in cartItems">
                  {{ item.name | uppercase }} -
                  {{ item.price | currency }}
                  <button class="btn-remove-item" v-on:click="remove(index, item.price)"><i class="fa fa-times" aria-hidden="true"></i></button>
                  <br/>
                </div>
              </div>
              <div class="col-sm-4">
                <label for="checkoutAmount"> Total</label>
                <p id="ckacoutAmount" class="amount-value"> {{ checkoutAmount | currency }}</p>
              </div>
            </div>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn-custom-secondary" v-if="checkoutStep!=0" v-on:click="previousStep"><span><i class="fa fa-arrow-left" aria-hidden="true"></i></span> Back</button>
            <button type="button" class="btn-custom-primary" v-on:click="nextStep">Next <span><i class="fa fa-arrow-right" aria-hidden="true"></i></span></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'checkoutView',
  data () {
    return {
      title: 'Modal',
      checkoutStep: 0
    }
  },
  computed: {
    cartItems () {
      return this.$store.state.cartItems
    },
    checkoutAmount () {
      return this.$store.state.checkoutAmount
    }
  },
  methods: {
    nextStep () {
      this.checkoutStep++
    },
    previousStep () {
      this.checkoutStep--
    },
    remove (index, itemPrice) {
      this.$store.commit('decrement')
      this.$store.commit('removeProduct', index)
      this.$store.commit('updateAmountSubtract', itemPrice)
    }
  }

}
</script>

<style>
.modal-custom{
  /*background: #D9D9D9;*/
  color: #313131;
  border: 0px;
  box-shadow: 0px;
}
.modal-header-custom{
  /*background: #313131;*/
  color: #313131;
  border-radius: 5px;
}
.cart{
  padding: 5px;
  margin: 20px auto;
  border: 3px dashed #313131;
  border-radius: 10px;
  color: #313131;
  background: #96fab1;
}
.cart-items{
  font-weight: bold;
  border: 2px solid white;
  border-radius: 15px;
  background: #313131;
  color: #D9D9D9;
}
.cart-item{
  margin: 0px;
}
.amount-value{
  font-weight: bold;
  font-size: 30px;
  color: #313131;
}
.btn-remove-item{
  float:right;
  margin: auto;
  font-size: 10px;
  font-weight: bold;
  border: 0px;
  border-radius: 10px;
  background: #313131;
  color: #D9D9D9;
}
.close-custom{
  font-size: 40px;
  color:white;
}
.close-custom:hover{
  color:#ffc7c7;
}
.btn-custom-primary{
  float:right;
  font-size: 20px;
  font-weight: bolder;
  padding-left: 20px;
  padding-right: 20px;
  border: 3px solid white;
  border-radius: 20px;
  background: #313131;
  color: #D9D9D9;
}
.btn-custom-primary:hover{
  background: #96fab1;
  color: #313131;
}
.btn-custom-secondary{
  float:left;
  font-size: 20px;
  font-weight: bolder;
  padding-left: 20px;
  padding-right: 20px;
  background: black;
  border: 3px solid white;
  border-radius: 20px;
  background: #D9D9D9;
  color: #313131;
}
.btn-custom-secondary:hover{
  background: #ffc7c7;
  color: #313131;
}
</style>
