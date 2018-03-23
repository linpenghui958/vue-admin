import Vue from 'vue';
import Router from 'vue-router';

const Login = () => import('@/views/login');
const Home = () => import('@/views/Home');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
  ],
});
