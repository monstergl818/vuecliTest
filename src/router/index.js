import Vue from 'vue'
import Router from 'vue-router'
import helloworld from '@/components/HelloWorld'
import comment from '@/components/comment/comment'
import todolist from '@/components/todolist/todolist'
import todos from '@/components/todos2/todos'
import search from '@/components/usersearch/index'

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
    },
    {
      path:'/todolist1',
      name:'todolist1',
      component:todolist
    },
    {
      path:'/todos2',
      name:'todos2',
      component:todos
    },
    {
      path:'/search',
      name:'searchmain',
      component:search
    }
  ]
})
