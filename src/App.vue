<template>
  <div id="app">
    <transition name="opa">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
html, body{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-size: 10px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
.opa-enter-active, .opa-enter-leave-active{
  transition: opacity .5s;
}
.opa-enter, .opa-leave-to{
  opacity: 0;
}
</style>
