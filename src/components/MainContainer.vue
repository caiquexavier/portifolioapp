<template>
  <div class="mainContainer">
    <nav class="navbar navbar-fixed-top">
      <div class="container custom-margin">
        <button class="btn-checkout"><i class="fa fa-shopping-cart" aria-hidden="true"></i><span class="cart-counter">{{checkoutCounter}}</span></button>
        <div class="navbar-header">
          <a class="navbar-brand" href="#"></a>
        </div>
      </div>
    </nav>
    <br/>
    <div class="row">

      <div class="col-sm-2">

      </div>

      <div class="col-sm-8">
        <app-products></app-products>
      </div>

      <div class="col-sm-2">

      </div>

    </div>
  </div>

</template>

<script>
import Products from './Products/Products.vue'

export default {
  name: 'mainContainer',
  data () {
    return {
      msg: 'Great!',
      seen: true
    }
  },
  components: {
    'app-products': Products
  },
  computed: {
    checkoutCounter () {
      return this.$store.state.checkoutCount
    }
  }
}
</script>
<style>
.custom-margin{
  margin-right: 0px;
  padding: 10px;
}
.navbar-custom{
  background-color: black;
  opacity: 0.5;
}
.btn-checkout{
  float:right;
  margin: 20px;
  font-size: 100px;
  padding-right: 30px;
  border: 3px solid #313131;
  border-radius: 20px;
  background: #D9D9D9;
  color: #313131;
;
}
</style>
