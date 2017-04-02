<template>
  <div id="userData">
    <div class="row page-header">
      <div class="col-sm-2">
        <router-link to="/">
          <button class="btn-back">
            <i class="fa fa-angle-left" aria-hidden="true"></i>
          </button>
        </router-link>
      </div>

      <div class="col-sm-10">
        <div class="header-info">
          <i class="fa fa-user-o" aria-hidden="true"></i>
          <span>Personal Information</span>
        </div>
      </div>
    </div>
    <br/>

    <div class="row">
      <div class="col-sm-2">
      </div>
      <div class="col-sm-8">
        <form>
          <label class="label-custom" for="name">Name: </label>
          <div class="form-custom">
            <input class="input-custom" placeholder="Name" id="name">
          </div>
          <div class="form-custom">
            <label class="label-custom" for="document">CPF: </label>
            <input class="input-custom" placeholder="CPF" id="document">
          </div>
        </form>
      </div>
      <div class="col-sm-2">
      </div>
    </div>

    <footer class="footer">
      <div class="col-sm-6">
        <router-link to="/">
          <button type="button" class="btn-checkout">
            <i class="fa fa-home" aria-hidden="true"></i>
            <span class="cart-counter">{{checkoutCounter}}</span>
          </button>
        </router-link>
      </div>
      <div class="col-sm-6">
        <router-link to="/">
          <button type="button" class="btn-checkout btn-featured">
            <span>Next</span>
            <i class="fa fa-angle-double-right" aria-hidden="true"></i>
            <span class="cart-counter">{{checkoutCounter}}</span>
          </button>
        </router-link>
      </div>

    </footer>
  </div>
</template>

<script>
export default {
  name: 'userData',
  data () {
    return {
      pageTitle: 'User Registration'
    }
  }
}
</script>

<style>
.btn-featured{
  color: #02b387;
}
.input-custom{
  padding: 10px;
  width: 100%;
  line-height: 30px;
  font-size: 20px;
  border: 0px;
  border-bottom: solid 2px #c9c9c9;

}
.input-custom:focus{
  padding: 10px;
  border: none;
  border-bottom: solid 3px #02b387;
  transition: all 0.2s ease 0s;
}
.label-custom{
  float: left;
  font-size: 40px;
  font-weight: bold;
  color: #02b387;
}

</style>
