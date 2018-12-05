<template>
  <div class="footer">
    <label for="">
      <input type="checkbox" name="" id="" v-model="allComplete">
      <span>已完成{{completedSize}}/全部{{todos.length}}</span>
    </label>
    <div class="delbtn" v-show="completedSize>0" @click="delCompleted">清除已完成的任务</div>
  </div>
</template>

<script>
export default {
  name: "pagefooter",
  data(){
    return{}
  },
  props:{
    todos:Array,
    selectAll:Function,
    delCompleted:Function
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
  }
};
</script>

<style scoped>
.footer {
  position: relative;
  padding: 0px;
  margin-top: 10px;
  height: 30px;
  line-height: 30px;
}
.delbtn {
  background: #d8074c;
  color: #fff;
  border-radius: 3px;
  padding: 0px 10px;
  right: 0px;
  top: 50%;
  margin-top: -12px;
  height: 24px;
  line-height: 24px;
  position: absolute;
}
</style>
