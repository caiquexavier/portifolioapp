<template>
  <div id="app">
    <div v-if="loading" class="loader" id="loader-2">
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
  computed: {
    loading () {
      return this.$store.getters.loading
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
