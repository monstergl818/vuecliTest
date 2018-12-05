<template>
  <div>
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add" v-model="inputTodo">
  </div>
</template>
<script>
export default {
  name: "pageheader",
  data(){
    return {
      inputTodo:''
    }
  },
  props:{
    addTodo:Function
  },
  methods:{
    add(){
      //检查输入
      let inputTodo = this.inputTodo.trim()
      if(!inputTodo){
        alert("请输入内容")
        return
      }
      let todo = {title:inputTodo,completed:false}
      this.addTodo(todo)

      this.inputTodo=''
    }
  }
};
</script>
<style scoped>
input {
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 100%;
  padding: 0px 10px
}
</style>

