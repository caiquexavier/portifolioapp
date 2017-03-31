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

            <div class="row cart">
              Cart
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
  methods: {
    nextStep () {
      this.checkoutStep++
    },
    previousStep () {
      this.checkoutStep--
    }
  }

}
</script>

<style>
.modal-custom{
  background: #D9D9D9;
  color: #313131;
}
.modal-header-custom{
  background: #313131;
  color: #D9D9D9;
  border-radius: 5px;
}
.cart{
  background: red;
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
  background: black;
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
