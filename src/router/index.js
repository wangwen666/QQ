import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/index'
import Home from '@/pages/home/index'
import Message from '@/pages/message/index'
import Contact from '@/pages/contact/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',  // 默认进入路由
      redirect: '/message'   // 重定向
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      component: Home,
      // name: 'Home',  // 不需要
      children: [
        {
          path: '/message',
          name: 'Message',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component: Message
        },{
          path: '/contact',
          name: 'Contact',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component: Contact
      }]
    }
  ]
})


