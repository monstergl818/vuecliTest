import Vue from 'vue'
import Router from 'vue-router'
import helloworld from '@/components/HelloWorld'
import comment from '@/components/comment/comment'
import todolist from '@/components/todolist/todolist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'helloworld',
      component: helloworld
    },
    {
      path:'/comment',
      name:'comment',
      component:comment
    },
    {
      path:'/todolist',
      name:'todolist',
      component:todolist
    }
  ]
})
