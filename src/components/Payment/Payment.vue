<template>
  <div id="payment">
    <form @submit.prevent="onSubmit">

      <div class="row page-header">
        <div class="col-sm-2">
          <router-link to="/checkout">
            <button class="btn-back">
              <i class="fa fa-angle-left" aria-hidden="true"></i>
            </button>
          </router-link>
        </div>

        <div class="col-sm-10">
          <div class="header-info">
            <i class="fa fa-usd" aria-hidden="true"></i>
            <span>{{pageTitle}}</span>
          </div>
        </div>
      </div>
      <br/>

      <div class="row">
        <div class="col-sm-12">
          <div class="row">

            <div class="col-md-2">
            </div>
            <div class="col-md-4">
              <div class="row">
                <label class="label-custom" for="fullname">Name: </label>
                <input id="fullname" v-validate="'required'" :class="{'input-custom': true, 'is-danger': errors.has('fullname') }" name="fullname" type="text" placeholder="Your full name">
                <span v-show="errors.has('fullname')" class="validate-error">{{ errors.first('fullname') }}</span>
              </div>
              <div class="row">
                <label class="label-custom" for="cpf">CPF: </label>
                <input id="cpf" v-validate="'required'" :class="{'input-custom': true, 'is-danger': errors.has('cpf') }" name="cpf" type="number" placeholder="Only Numbers">
                <span v-show="errors.has('cpf')" class="validate-error">{{ errors.first('cpf') }}</span>
              </div>
              <div class="row">
                <div class="col-sm-6 custom-margin">
                  <label class="label-custom" for="birthDate">Birth Date: </label>
                  <input id="birthDate" v-validate="'required'" :class="{'input-custom': true, 'is-danger': errors.has('birthDate') }" name="birthDate" type="text" placeholder="DD/MM/YYYY">
                  <span v-show="errors.has('birthDate')" class="validate-error">{{ errors.first('birthDate') }}</span>
                </div>
                <div class="col-sm-6 custom-margin">
                  <label class="label-custom" for="phoneNumber">Phone: </label>
                  <input id="phoneNumber"  v-validate="'required'" :class="{'input-custom': true, 'is-danger': errors.has('phoneNumber') }" name="phoneNumber" type="number" placeholder="+55 (99) 99999-9999 ">
                  <span v-show="errors.has('phoneNumber')" class="validate-error">{{ errors.first('phoneNumber') }}</span>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <label class="label-custom">Número do cartão</label>
              <input type="text" v-model='paymentCard.number' placeholder="Credit card number" id="number" class="form-control"><br>

              <label class="label-custom">CVC</label>
              <input type="text" v-model='paymentCard.cvc' placeholder="CVC" id="cvc" class="form-control"><br>

              <div class="row">
                <div class="col-md-6">
                  <label class="label-custom">Expiration Month (MM)</label>
                  <input type="text" v-model='paymentCard.expMonth' placeholder="Month" id="month" class="form-control"><br>
                </div>
                <div class="col-md-6">
                    <label class="label-custom">Expiration Year (AA)</label>
                    <input type="text" v-model='paymentCard.expYear' placeholder="Year" id="year" value="18" class="form-control"><br>
                </div>
              </div>

              <input type="button" v-on:click="verifyCard" value="Verify Card" id="encrypt" class="btn btn-lg btn-primary btn-block">
              <br>
              <label>Bandeira do cartão</label>
              <p> {{paymentCardType }} </p>

            </div>
          </div>
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
            <button type="submit" class="btn-checkout btn-featured">
              <span>Submit</span>
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              <i class="fa fa-angle-double-right" aria-hidden="true"></i>
            </button>
        </div>
      </footer>

    </form>
  </div>

</template>

<script>

export default {
  name: 'payment',
  data () {
    return {
      pageTitle: 'Payment'
    }
  },
  methods: {
    verifyCard () {
      this.$store.commit('setPaymentCard', this.paymentCard)
      this.$store.commit('encryptCard')
    }
  },
  computed: {
    // Retrieve payment card Object from store
    paymentCard () {
      return this.$store.getters.paymentCard
    },
    paymentCardType () {
      return this.$store.getters.paymentCardType
    }
  }
}
</script>

<style>

</style>
