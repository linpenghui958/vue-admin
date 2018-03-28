<template>
  <div class="menu-wrapper">
    <template v-for="item in routes" v-if="!item.hidden&&item.children">

      <router-link v-if="hasOneShowingChildren(item.children) && !item.children[0].children&&!item.alwaysShow" :to="item.path+'/'+item.children[0].path" :key="item.children[0].name">
        <el-menu-item :index="item.path+'/'+item.children[0].path" :class="{'submenu-title-noDropdown':!isNest}">
          <svg-icon v-if="item.children[0].meta&&item.children[0].meta.icon" :icon-class="item.children[0].meta.icon"></svg-icon>
          <span v-if="item.children[0].meta&&item.children[0].meta.title">{{item.children[0].meta.title}}</span>
        </el-menu-item>
      </router-link>

      <el-submenu v-else :index="item.name||item.path" :key="item.name">
        <template slot="title">
          <svg-icon v-if="item.meta&&item.meta.icon" :icon-class="item.meta.icon"></svg-icon>
          <span v-if="item.meta&&item.meta.title">{{item.meta.title}}</span>
        </template>

        <template v-for="child in item.children" v-if="!child.hidden">
          <sidebar-item :is-nest="true" class="nest-menu" v-if="child.children&&child.children.length>0" :routes="[child]" :key="child.path"></sidebar-item>

          <router-link v-else :to="item.path+'/'+child.path" :key="child.name">
            <el-menu-item :index="item.path+'/'+child.path">
              <svg-icon v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon"></svg-icon>
              <span v-if="child.meta&&child.meta.title">{{child.meta.title}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>

    </template>
  </div>
</template>

<script>

export default {
  name: 'SidebarItem',
  props: {
    routes: {
      type: Array,
    },
    isNest: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hasOneShowingChildren(children) {
      const showingChildren = children.filter((item) => {
        return !item.hidden;
      });
      if (showingChildren.length === 1) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="stylus">
.el-menu-item
  text-align left!important
.el-submenu__title
  text-align left!important

.hideSidebar 
  .submenu-title-noDropdown 
    padding-left: 10px!important;
    position: relative;
    span 
      height: 0;
      width: 0;
      overflow: hidden;
      visibility: hidden;
      transition: opacity .3s cubic-bezier(.55, 0, .1, 1);
      opacity: 0;
      display: inline-block;
    
    &:hover 
      span 
        display: block;
        border-radius: 3px;
        z-index: 1002;
        width: 140px;
        height: 56px;
        visibility: visible;
        position: absolute;
        right: -145px;
        text-align: left;
        text-indent: 20px;
        top: 0px;
        background-color: $subMenuBg!important;
        opacity: 1;

  .el-submenu 
    &>.el-submenu__title 
      padding-left: 10px!important;
      &>span 
        display: none;
      
      .el-submenu__icon-arrow 
        display: none;
      
    
    .nest-menu 
      .el-submenu__icon-arrow 
        display: block!important;
      
      span 
        display: inline-block!important;

  .nest-menu .el-submenu>.el-submenu__title,
  .el-submenu .el-menu-item
    min-width: 180px!important;
    background-color: $subMenuBg!important;
    &:hover 
      background-color: $menuHover!important;
    
  
  .el-menu--collapse .el-menu .el-submenu
    min-width: 180px!important;
  
.el-tooltip__popper
  display none

.el-tooltip
  padding 0 10px!important
</style>
