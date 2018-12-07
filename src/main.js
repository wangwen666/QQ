// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Login from '@/pages/login/index'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */

const hash = window.location.hash;
if (hash === '#/login') {
  new Vue({
    el: '#app',
    components: { Login },
    template: '<login/>'
  })

} else if (hash === '#/register') {

} else if ( hash === '#/findPassword') {

} else {

  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  })

}

