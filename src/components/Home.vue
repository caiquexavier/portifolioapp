<template>
  <div class="home">
    <div class="row">


      <div class="col-sm-12">
        <app-products></app-products>
      </div>
      <div class="col-sm-12">
        <p style="height:200px;">Some Info</p>
      </div>

    </div>

    <checkout></checkout>

    <footer class="footer">
        <button type="button" data-toggle="modal" data-target="#checkoutModal" class="btn-checkout">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          <span class="cart-counter">{{checkoutCounter}}</span>
        </button>
    </footer>

  </div>

</template>

<script>
import Products from './Products/Products.vue'
import Checkout from './checkout/Checkout.vue'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Home!',
      seen: true
    }
  },
  components: {
    'app-products': Products,
    'checkout': Checkout
  },
  computed: {
    checkoutCounter () {
      return this.$store.state.checkoutCount
    }
  }
}
</script>
<style>

.footer {
    margin: auto;
    background: white;
    position: fixed;
    height: 100px;
    bottom: 0;
    width: 100%;
}
.custom-margin{
  margin-right: 0px;
  padding: 10px;
}
.btn-checkout{
  margin: auto;
  width: 100%;
  height: 100px;
  font-size: 50px;
  background: white;
  border: 0px;
  color: #313131;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}
.btn-checkout:hover{
  transition: all 0.2s ease 0s;
  background: #00a9f7;
  color: #D9D9D9;
}
</style>
