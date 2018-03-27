import Vue from 'vue';
import generateIconsView from '@/views/svg-icons/generateIconsView';// just for @/views/icons , you can delete it
import SvgIcon from '@/components/SvgIcon';// svg组件

// register globally
Vue.component('svg-icon', SvgIcon);

/* eslint-disable */
const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('./svg', false, /\.svg$/);
const iconMap = requireAll(req);

generateIconsView.generate(iconMap); // just for @/views/icons , you can delete it
