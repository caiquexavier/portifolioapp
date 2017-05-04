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
            <h3>Order Id:</h3>
            <h3>{{ orderId }}</h3>
          </div>
          <hr/>
          <div class="row">


            <div class="col-md-6">

              <div class="row">
                <label class="label-custom" for="fullname">Card Holder Name: </label>
                <input id="fullname" v-model="cardHolder.fullname" v-validate="'required'" :class="{'input-custom': true, 'is-danger': errors.has('fullname') }" name="fullname" type="text" placeholder="Your full name">
                <span v-show="errors.has('fullname')" class="validate-error">{{ errors.first('fullname') }}</span>
              </div>
              <div class="row">
                <label class="label-custom" for="cpf">CPF: </label>
                <input id="cpf" v-model="cardHolder.taxDocument.number" v-validate="'required'" :class="{'input-custom': true, 'is-danger': errors.has('cpf') }" name="cpf" type="number" placeholder="Only Numbers">
                <span v-show="errors.has('cpf')" class="validate-error">{{ errors.first('cpf') }}</span>
              </div>
              <div class="row">
                <div class="col-sm-6 custom-margin">
                  <label class="label-custom" for="birthDate">Birth Date: </label>
                  <input id="birthDate" v-model="cardHolder.birthdate" v-validate="'required'" :class="{'input-custom': true, 'is-danger': errors.has('birthDate') }" name="birthDate" type="text" placeholder="YYYY-MM-DD">
                  <span v-show="errors.has('birthDate')" class="validate-error">{{ errors.first('birthDate') }}</span>
                </div>
                <div class="col-sm-6 custom-margin">
                  <label class="label-custom" for="phoneNumber">Phone: </label>
                  <input id="phoneNumber"  v-model="cardHolder.phone.number" v-validate="'required'" :class="{'input-custom': true, 'is-danger': errors.has('phoneNumber') }" name="phoneNumber" type="number" placeholder="+55 (99) 99999-9999 ">
                  <span v-show="errors.has('phoneNumber')" class="validate-error">{{ errors.first('phoneNumber') }}</span>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <fieldset class="card-fieldset">
                <label class="label-custom">Card Number</label>
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

                <input type="button" v-on:click="verifyCard" value="Verify Card" id="encrypt" class="btn btn-lg btn-custom-lg btn-block">
              </fieldset>
              <br>
              <label>Card Type</label>
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
            <button type="button" v-on:click="processPayment" class="btn-checkout btn-featured">
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
      this.$store.commit('updateCardHolder', this.cardHolder)
    },
    processPayment () {
      this.$store.dispatch('paymentApiCall')
    }
  },
  computed: {
    orderId () {
      return this.$store.getters.orderId
    },
    // Retrieve payment card Object from store
    paymentCard () {
      return this.$store.getters.paymentCard
    },
    paymentCardType () {
      return this.$store.getters.paymentCardType
    },
    cardHolder () {
      return this.$store.getters.cardHolder
    }
  }
}
</script>

<style>
.card-fieldset{
  padding: 10px;
  border-radius: 10px;
  border: solid 2px #c9c9c9;
}
.btn-custom-lg{
  margin: auto;
  font-size: 20px;
  background: #c9c9c9;
  border: 0px;
  color: #313131;
}
.btn-custom-lg:hover{
  transition: all 0.2s ease 0s;
  background: #02b387;
  color: #D9D9D9;
}

</style>
