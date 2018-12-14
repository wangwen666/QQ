// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Login from '@/pages/login/index'
import router from './router'
import './reset.css'
import '@/font/iconfont.css'
import './index.less'

Vue.config.productionTip = false

/* eslint-disable no-new */



let isLogin = true;

router.beforeEach((to, from, next) => {
  if (isLogin) {
    next();
  } else {
    if (to.path === '/login') { //这就是跳出循环的关键
      next()
    } else {
      next({path: '/login'})
    }
  }

})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


