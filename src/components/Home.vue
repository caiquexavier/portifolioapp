<template>
  <div class="home">
    <div class="row page-header">
      <h1>{{ pageTitle }}</h1>
    </div>

    <app-products></app-products>
    <div class="row">
      <div class="col-sm-12">
        <p style="height:200px;">Some Info</p>
      </div>
    </div>

    <footer class="footer">
      <router-link to="/userData">
        <button type="button" class="btn-checkout">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          <span class="cart-counter">{{checkoutCounter}}</span>
        </button>
      </router-link>
    </footer>

  </div>

</template>

<script>
import Products from './Products/Products.vue'

export default {
  name: 'home',
  data () {
    return {
      pageTitle: 'Welcome to Kuika Store',
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
h1{
  color: #02b387;
}
.btn-checkout{
  margin: auto;
  width: 100%;
  height: 120px;
  font-size: 50px;
  background: white;
  border: 0px;
  color: #313131;
}
.btn-checkout:hover{
  transition: all 0.2s ease 0s;
  background: #02b387;
  color: #D9D9D9;
}
</style>
