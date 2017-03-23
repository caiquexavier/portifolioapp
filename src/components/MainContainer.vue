<template>
  <div class="mainContainer">
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Mysoundtips</a>
        </div>

      </div>
    </nav>
    <div class="row">
      <div class="col-sm-12">
        <app-products></app-products>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
import Vue from 'vue'
import Products from './Products/Products.vue'

Vue.component('app-products', Products)

export default {
  name: 'mainContainer',
  data () {
    return {
      msg: 'Great!',
      seen: true
    }
  }
}
</script>
