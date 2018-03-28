<template>
  <scroll-bar>
    <el-menu mode="vertical" :default-active="$route.path" :collapse="isCollapse" background-color="#304156" text-color="#bfcbd9" active-text-color="#409EFF">
      <sidebar-item :routes="routers"></sidebar-item>
    </el-menu>
  </scroll-bar>
</template>

<script>
import { mapGetters } from 'vuex';
import ScrollBar from '@/components/ScrollBar';
import SidebarItem from './SidebarItem';

export default {
  data() {
    return {
      routers: [
        { path: '/login', hidden: true },
        {
          path: '',
          redirect: 'dashboard',
          meta: {
            title: 'dashboard',
            icon: 'dashboard',
          },
          children: [{
            path: 'dashboard',
            name: 'dashboard',
            meta: { title: 'Dashboard', icon: 'dashboard', noCache: true },
          }],
        },
        {
          path: '/documentation',
          redirect: '/documentation/index',
          meta: {
            title: 'documentation',
            icon: 'documentation',
          },
          children: [{
            path: 'index',
            name: 'documentation',
            meta: { title: 'Documentation', icon: 'documentation', noCache: true },
          }],
        },
        {
          path: '/components',
          redirect: 'noredirect',
          name: 'component-demo',
          meta: {
            title: 'components',
            icon: 'component',
          },
          children: [
            { path: 'tinymce', name: 'tinymce-demo', meta: { title: 'tinymce' } },
            { path: 'markdown', name: 'markdown-demo', meta: { title: 'markdown' } },
            { path: 'json-editor', name: 'jsonEditor-demo', meta: { title: 'jsonEditor' } },
            { path: 'dnd-list', name: 'dndList-demo', meta: { title: 'dndList' } },
            { path: 'splitpane', name: 'splitpane-demo', meta: { title: 'splitPane' } },
            { path: 'avatar-upload', name: 'avatarUpload-demo', meta: { title: 'avatarUpload' } },
            { path: 'dropzone', name: 'dropzone-demo', meta: { title: 'dropzone' } },
            { path: 'sticky', name: 'sticky-demo', meta: { title: 'sticky' } },
            { path: 'count-to', name: 'countTo-demo', meta: { title: 'countTo' } },
            { path: 'mixin', name: 'componentMixin-demo', meta: { title: 'componentMixin' } },
            { path: 'back-to-top', name: 'backToTop-demo', meta: { title: 'backToTop' } },
          ],
        },
        {
          path: '/icon',
          meta: {
            title: 'icon',
            icon: 'icon',
          },
          children: [{
            path: 'index',
            name: 'icons',
            meta: { title: 'icons', icon: 'icon', noCache: true },
          }],
        },
      ],
    };
  },
  components: {
    ScrollBar,
    SidebarItem,
  },
  computed: {
    ...mapGetters([
      // 'permission_routers',
      'sidebar',
    ]),
    isCollapse() {
      return !this.sidebar.opened;
    },
  },
};
</script>
