<template>
  <div class="app-wrapper">
    <Sliderbar class="sidebar-container"></Sliderbar>
    <div class="main-container">
      <navbar></navbar>
      <tags-view></tags-view>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import { AppMain, Sliderbar, Navbar } from './components';

export default {
  name: 'layout',
  components: {
    AppMain,
    Sliderbar,
    Navbar,
  },
};
</script>

<style lang="stylus" scoped>
.app-wrapper
  position: relative;
  height: 100%;
  width: 100%;
</style>
