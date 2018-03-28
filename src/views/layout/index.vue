<template>
  <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
    <Sliderbar class="sidebar-container"></Sliderbar>
    <div class="main-container">
      <navbar></navbar>
      <tags-view></tags-view>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import { AppMain, Sliderbar, Navbar, TagsView } from './components';

export default {
  name: 'layout',
  components: {
    AppMain,
    Sliderbar,
    Navbar,
    TagsView,
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar;
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../../styles/mixin.styl';
.app-wrapper
  clearfix
  position: relative;
  height: 100%;
  width: 100%;
.el-tooltip__popper
  display none

.el-tooltip
  padding 0 10px!important
</style>
