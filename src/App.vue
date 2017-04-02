<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
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
