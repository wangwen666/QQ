// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios';
import Login from '@/pages/login/index'
import router from './router'
import './reset.css'
import '@/font/iconfont.css'
import './index.less'

import store from './store/index'

Vue.config.productionTip = false

/* eslint-disable no-new */


Vue.prototype.$axios = axios;


let isLogin = true;

router.beforeEach((to, from, next) => {

  console.log(Boolean(localStorage.user));
  if (localStorage.user) {
    next();
  } else {
    if (to.path === '/login') { // 这就是跳出循环的关键
      next()
    } else {
      next({path: '/login'})
    }
  }

})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


