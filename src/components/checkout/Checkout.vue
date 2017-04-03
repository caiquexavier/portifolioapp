<template>
  <div id="userData">
    <form @submit.prevent="onSubmit">

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
            <button type="submit" class="btn-checkout btn-featured">
              <span>Next</span>
              <i class="fa fa-angle-double-right" aria-hidden="true"></i>
            </button>
        </div>
      </footer>

    </form>
  </div>
</template>

<script>
export default {
  name: 'checkout',
  data () {
    return {
      pageTitle: 'Checkout your Order'
    }
  }
}
</script>

<style>


</style>
