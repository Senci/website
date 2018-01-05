import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/components/Blog'
import Me from '@/components/Me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Me',
      component: Me
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    }
  ]
})
