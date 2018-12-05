<template>
  <div>
    <li :style="{background:bgColor}" class="item" @mouseover="handEnter(true)" @mouseout="handEnter(false)" >
      <label >
        <input type="checkbox" name=""  v-model="todo.completed">
        <span>{{todo.title}}</span>
      </label>
      <div v-show="isShow" class="delbtn" @click="delItem">删除</div>
    </li>
  </div>
</template>

<script>
export default {
  name: "item",
  data(){
    return{
      bgColor:'#fff',
      isShow:false
    }
  },
  props: {
    todo: Object,
    index: Number,
    delTodo:Function
  },
  methods:{
    handEnter(isEnter){
      if(isEnter){
        this.bgColor = "#f5f4f4"
        this.isShow = true
      }else{
        this.bgColor = "#fff"
        this.isShow = false
      }
    },
    delItem(){
      const {todo,index,delTodo} = this
      if(window.confirm(`确定删除${todo.title}吗?`)){
        delTodo(index)
      }
    }
  }

};
</script>

<style scoped>
.delbtn {
  background: #ea0752;
  color: #fff;
  border-radius: 3px;
  padding: 0px 10px;
  right: 10px;
  top: 50%;
  margin-top: -12px;
  height: 24px;
  line-height: 24px;
  position: absolute;
}
.item{position:relative}
li{padding: 10px}
</style>
