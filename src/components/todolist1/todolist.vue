<template>
  <div class="wrap">
    <p class="page_tit">todolist</p>
    <!-- 绑定自定义事件监听：方法一 推荐使用-->
    <pageheader @addTodo="addTodo"></pageheader>
    <!-- 绑定自定义事件监听：方法二 -->
    <!-- <pageheader :ref="header"></pageheader> -->
    <pagemain :todos='todos' :delTodo='delTodo'></pagemain>
    <!-- slot 使用插槽可以把标签从父组件传递给子组件 -->
    <pagefooter :todos='todos' :selectAll='selectAll' :delCompleted='delCompleted'>
      <input type="checkbox" name="" id="" v-model="allComplete" slot="selectAll">
      <span slot="size">已完成{{completedSize}}/全部{{todos.length}}</span>
      <div slot="clearCompleted" class="delbtn" v-show="completedSize>0" @click="delCompleted">清除已完成的任务</div>
    </pagefooter>
  </div>
</template>

<script>
  import PubSub from "pubsub-js"
  import pageheader from "../todolist/header.vue"
  import pagemain from '../todolist/main.vue'
  import pagefooter from '../todolist/footer.vue'
  import storageUtil from '../../utils/storageUtil'
  export default {
    name: 'todolist',
    data(){
      return {
        //从缓存里读取保存todos数据
      //todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')
      todos:storageUtil.readTodos()
      }
    },
    // 模板编译之前，不能访问模板里的标签
    mounted(){
      //mounted()在模板编译之后执行
      // 绑定监听 启动定时器都写在mounted中

      //绑定自定义事件监听
      this.$refs.header.$on('addTodo',this.addTodo)

      //消息订阅（deleteTodo）相当于绑定监听
      PubSub.subscribe('deleteTodo',(msg,index)=>{
        this.delTodo(index)
      })
    },
    computed:{
     //已完成数量
      completedSize(){
        return this.todos.reduce((preTotal,todo)=>preTotal+(todo.completed?1:0),0)
      },
      allComplete:{
        get(){
          return this.completedSize===this.todos.length && this.todos.length>0
        },
        set(value){
          //对所有todos进行全选或者全不选
          this.selectAll(value)
        }

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
          //window.localStorage.setItem('todos_key',JSON.stringify(newValue))
          storageUtil.saveTodos(newValue)
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
