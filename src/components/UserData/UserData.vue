<template>
  <div id="userData">
    <form @submit.prevent="onSubmit">

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
            <label class="label-custom" for="fullname">Name: </label>
            <input id="fullname" v-model="costumer.fullname" v-validate="'required'" :class="{'input-custom': true, 'is-danger': errors.has('fullname') }" name="fullname" type="text" placeholder="Your full name">
            <span v-show="errors.has('fullname')" class="validate-error">{{ errors.first('fullname') }}</span>
          </div>
          <div class="row">
            <label class="label-custom" for="email">Email: </label>
            <input id="email" v-model="costumer.email" v-validate="'required|email'" :class="{'input-custom': true, 'is-danger': errors.has('email') }" name="email" type="email" placeholder="email@domain.com">
            <span v-show="errors.has('email')" class="validate-error">{{ errors.first('email') }}</span>
          </div>
          <div class="row">
            <label class="label-custom" for="cpf">CPF: </label>
            <input id="cpf" v-model="costumer.taxDocument.number" v-validate="'required'" :class="{'input-custom': true, 'is-danger': errors.has('cpf') }" name="cpf" type="number" placeholder="Only Numbers">
            <span v-show="errors.has('cpf')" class="validate-error">{{ errors.first('cpf') }}</span>
          </div>
          <div class="row">
            <div class="col-sm-6 custom-margin">
              <label class="label-custom" for="birthDate">Birth Date: </label>
              <input id="birthDate" v-model="costumer.birthDate" v-validate="'required'" :class="{'input-custom': true, 'is-danger': errors.has('birthDate') }" name="birthDate" type="text" placeholder="DD/MM/YYYY">
              <span v-show="errors.has('birthDate')" class="validate-error">{{ errors.first('birthDate') }}</span>
            </div>
            <div class="col-sm-6 custom-margin">
              <label class="label-custom" for="phoneNumber">Phone: </label>
              <input id="phoneNumber" v-model="costumer.phone.number" v-validate="'required'" :class="{'input-custom': true, 'is-danger': errors.has('phoneNumber') }" name="phoneNumber" type="number" placeholder="+55 (99) 99999-9999 ">
              <span v-show="errors.has('phoneNumber')" class="validate-error">{{ errors.first('phoneNumber') }}</span>
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
  name: 'userData',
  data () {
    return {
      pageTitle: 'Personal Information',
      costumer: {
        ownId: null,
        fullname: null,
        email: null,
        birthDate: null,
        taxDocument: {
          type: 'CPF',
          number: null
        },
        phone: {
          countryCode: null,
          areaCode: null,
          number: null
        }
      }
    }
  },
  methods: {
    onSubmit () {
      this.$validator.validateAll().then(() => {
        this.$router.push('/address')
      }).catch(() => {

      })
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
  font-size: 30px;
  font-weight: lighter;
  color: #02b387;
}
.is-danger{
  color: #ff4f4f;
  border-bottom: solid 2px #ffadad;
  transition: all 0.2s ease 0s;
}
.validate-error{
  float:left;
  color: #ff4f4f;
  transition: all 0.2s ease 0s;
}
.help{
  height:30px;
  background-color: red;
}

</style>
