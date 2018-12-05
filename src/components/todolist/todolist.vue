<template>
  <div class="wrap">
    <p class="page_tit">todolist</p>
    <pageheader :addTodo="addTodo"></pageheader>
    <pagemain :todos='todos' :delTodo='delTodo'></pagemain>
    <pagefooter :todos='todos' :selectAll='selectAll' :delCompleted='delCompleted'></pagefooter>
  </div>
</template>

<script>
  import pageheader from "../todolist/header.vue"
  import pagemain from '../todolist/main.vue'
  import pagefooter from '../todolist/footer.vue'
  export default {
    name: 'todolist',
    data(){
      return {
        //从缓存里读取保存todos数据
       todos:JSON.parse(window.localStorage.getItem('todos_key') || '[]')
      }
    },
    methods:{
      addTodo(todo){
        this.todos.unshift(todo)
      },
      delTodo(index){
        this.todos.splice(index,1)
      },
      //全选
      selectAll(check){
        this.todos.forEach(todo => todo.completed = check)
      },
      //全部删除
      delCompleted(){
        this.todos = this.todos.filter(todo =>!todo.completed)
      }
    },
    watch:{
      todos:{
        deep:true,//深度监视
        handler:function(newValue){
          //将todos保存到缓存 todos的JSON数据
          window.localStorage.setItem('todos_key',JSON.stringify(newValue))
        }
      }
    },
    components:{
      pageheader,
      pagemain,
      pagefooter
    }
  }
</script>

<style scoped>
.page_tit{font-size: 1.7rem;margin-bottom: 10px}
  .wrap{background: #fff;border: 1px solid #ccc;padding: 10px;border-radius: 5px}
</style>
