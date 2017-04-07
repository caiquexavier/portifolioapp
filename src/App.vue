<template>
  <div id="app">
    <div v-if="appError" style="margin-top:300px;">
      <span class="error-handler"><i class="fa fa-frown-o" aria-hidden="true"></i></span>
      <h2> {{ badMessage }} </h2>
      <h4>{{ appErrorMsg }} </h4>
      <button class="btn-custom" v-on:click="refreshApp" ><i class="fa fa-refresh" aria-hidden="true"></i></button>
    </div>
    <div v-else-if="loading" class="loader" id="loader-2">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div v-else>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      badMessage: 'Opsss...Something went wrong, plase refresh the App'
    }
  },
  computed: {
    appError () {
      return this.$store.getters.appError
    },
    appErrorMsg () {
      return this.$store.getters.appErrorMsg
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    refreshApp () {
      console.log(this.vm)
    }
  }
}
</script>

<style>
#app {
  font-family: "Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: white;
  color: #2c3e50;
}
.error-handler{
  font-size: 150px;
  color: #313131;
}
.btn-custom{
  font-size: 100px;
  background: #f5f5f5;
  border: 0px;
  border-radius: 50%;
	width: 200px;
	height: 200px;
  color: #313131;
  /*box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);*/
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
.btn-custom:hover{
  transition: all 0.2s ease 0s;
  background: #02b387;
  color: #D9D9D9;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
#loader-2 span{
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #02b387;
  margin: 35px 5px;
  margin-top: 500px;
}

#loader-2 span:nth-child(1){
  animation: bounce 1s ease-in-out infinite;
}

#loader-2 span:nth-child(2){
  animation: bounce 1s ease-in-out 0.33s infinite;
}

#loader-2 span:nth-child(3){
  animation: bounce 1s ease-in-out 0.66s infinite;
}

@keyframes bounce{
  0%, 75%, 100%{
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }

  25%{
    -webkit-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    -o-transform: translateY(-20px);
    transform: translateY(-20px);
  }
}
.btn:focus {
  outline: none;
}
.input:focus {
  outline: none;
}
.row{
  margin-right: 0px;
  margin-left: 0px;
}
.page-header{
  float: left;
  margin: 0px;
  width: 100%;
  height:150px;
  color: #313131;
  background-color: white;
  font-size: 50px;
}
.header-info{
  padding-top: 50px;
  float: left;
  color: #02b387;
}
.custom-margin{
  margin-right: 0px;
  padding: 10px;
}
.footer {
    margin: auto;
    margin-top: 200px;
    background: white;
    position: fixed;
    height: 120px;
    bottom: 0;
    width: 100%;
}
.form-custom{
  margin: auto;
}
.btn-back{
  float: left;
  width: 150px;
  height: 100%;
  border: 0px;
  font-size: 120px;
  color: #313131;
  background-color: white;
}
.btn-back:hover{
  transition: all 0.2s ease 0s;
  color: #02b387;
}
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}
.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
