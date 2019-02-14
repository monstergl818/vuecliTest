<template>
  <div id="main">
     <ul class="todolist" v-show="todos.length>0">
      <li  v-for="(todo,index) in todos" :key="index" :index="index" :todo="todo">
        <item  :key="index" :index="index" :todo="todo" :delTodo='delTodo'></item>
      </li>

     </ul>
     <p v-show="todos.length==0">暂无任务</p>
  </div>
</template>

<script>
  import item from "./item.vue"
  export default {
    name:'pagemain',
   // props:['todos']
    props:{
      todos:Array,
      delTodo:Function
    },
    components:{
      item
    }
  }
</script>

<style scoped>
.todolist{border: 1px solid #ccc;background: #fff;border-radius: 5px}
  .todolist li{border-bottom: 1px solid #ccc;}
  .todolist li:nth-last-child(1){border-bottom: 0px}
</style>
