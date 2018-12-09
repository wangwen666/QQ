import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/index'
import Message from '@/pages/message/index'
import Contact from '@/pages/contact/index'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/message',
      name: 'Message',
      component: Message
    },{
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
