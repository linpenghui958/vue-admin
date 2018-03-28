<template>
  <div class="dashboard-container">
    <component :is="currentRole"></component>
  </div>
</template>

<script>
import adminDashboard from './admin';

export default {
  name: 'dashboard',
  data() {
    return {
      currentRole: 'adminDashboard'
    };
  },
  components: {
    adminDashboard,
  },
};
</script>

<style src="./style.styl" lang="stylus"></style>
