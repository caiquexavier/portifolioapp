<template>
  <div id="userData">
    <form @submit.prevent="onSubmit">

      <div class="row page-header">
        <div class="col-sm-2">
          <router-link to="/userData">
            <button class="btn-back">
              <i class="fa fa-angle-left" aria-hidden="true"></i>
            </button>
          </router-link>
        </div>

        <div class="col-sm-10">
          <div class="header-info">
            <i class="fa fa-home" aria-hidden="true"></i>
            <span>{{pageTitle}}</span>
          </div>
        </div>
      </div>
      <br/>

      <div class="row">

        <div class="col-sm-2">
        </div>
        <div class="col-sm-8">

          <div class="row">
            <label class="label-custom" for="street">Street: </label>
            <input id="street" v-model="costumer.shippingAddress.street" v-validate="'required'" :class="{'input-custom': true, 'is-danger': errors.has('street') }" name="street" type="text" placeholder="St Name">
            <span v-show="errors.has('street')" class="validate-error">{{ errors.first('street') }}</span>
          </div>

          <div class="row">
            <div class="col-sm-6 custom-margin">
              <label class="label-custom" for="streetNumber">Street Number: </label>
              <input id="streetNumber" v-model="costumer.shippingAddress.streetNumber" v-validate="'required'" :class="{'input-custom': true, 'is-danger': errors.has('streetNumber') }" name="streetNumber" type="number" placeholder="St Number">
              <span v-show="errors.has('streetNumber')" class="validate-error">{{ errors.first('streetNumber') }}</span>
            </div>
            <div class="col-sm-6 custom-margin">
              <label class="label-custom" for="complement">Complement: </label>
              <input id="complement" v-model="costumer.shippingAddress.complement" v-validate="'required'" :class="{'input-custom': true, 'is-danger': errors.has('complement') }" name="complement" type="text" placeholder="Complement">
              <span v-show="errors.has('complement')" class="validate-error">{{ errors.first('complement') }}</span>
            </div>
          </div>

          <div class="row">
            <label class="label-custom" for="district">District: </label>
            <input id="district" v-model="costumer.shippingAddress.district" v-validate="'required'" :class="{'input-custom': true, 'is-danger': errors.has('district') }" name="district" type="text" placeholder="District">
            <span v-show="errors.has('district')" class="validate-error">{{ errors.first('district') }}</span>
          </div>

          <div class="row">
            <div class="col-sm-6 custom-margin">
              <label class="label-custom" for="city">City: </label>
              <input id="city" v-model="costumer.shippingAddress.city" v-validate="'required'" :class="{'input-custom': true, 'is-danger': errors.has('city') }" name="city" type="text" placeholder="City">
              <span v-show="errors.has('city')" class="validate-error">{{ errors.first('city') }}</span>
            </div>
            <div class="col-sm-6 custom-margin">
              <label class="label-custom" for="state">State: </label>
              <input id="state" v-model="costumer.shippingAddress.state" v-validate="'required'" :class="{'input-custom': true, 'is-danger': errors.has('state') }" name="state" type="text" placeholder="State">
              <span v-show="errors.has('state')" class="validate-error">{{ errors.first('state') }}</span>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6 custom-margin">
              <label class="label-custom" for="country">Country: </label>
              <input id="country" v-model="costumer.shippingAddress.country" v-validate="'required'" :class="{'input-custom': true, 'is-danger': errors.has('country') }" name="country" type="text" placeholder="Country">
              <span v-show="errors.has('country')" class="validate-error">{{ errors.first('country') }}</span>
            </div>
            <div class="col-sm-6 custom-margin">
              <label class="label-custom" for="zipCode">ZipCode: </label>
              <input id="zipCode" v-model="costumer.shippingAddress.zipCode" v-validate="'required'" :class="{'input-custom': true, 'is-danger': errors.has('zipCode') }" name="zipCode" type="number" placeholder="99999-999">
              <span v-show="errors.has('zipCode')" class="validate-error">{{ errors.first('zipCode') }}</span>
            </div>
          </div>

        </div>
        <div class="col-sm-2">
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
  name: 'address',
  data () {
    return {
      pageTitle: 'Where we deliver?'
    }
  },
  methods: {
    onSubmit () {
      this.$validator.validateAll().then(() => {
        this.updateCostumer(this.costumer)
        this.$router.push('/checkout')
      }).catch(() => {

      })
    },
    /* Updates the costumer object in store */
    updateCostumer (costumer) {
      this.$store.commit('updateCostumer', costumer)
    }
  },
  computed: {
    /* Gets costumer object from store */
    costumer () {
      return this.$store.getters.costumer
    }
  }
}
</script>

<style>


</style>
