<template>
  <div class="footer">
    <label for="">
      <!-- <input type="checkbox" name="" id="" v-model="allComplete"> -->
      <!-- 不确定的标签结构 -->
      <!-- slot 使用插槽可以把标签从父组件传递给子组件 -->
      <slot name="seleftAll"></slot>
      <!-- <span>已完成{{completedSize}}/全部{{todos.length}}</span> -->
      <slot name="size"></slot>
    </label>
    <!-- <div class="delbtn" v-show="completedSize>0" @click="delCompleted">清除已完成的任务</div> -->
    <slot name="clearCompleted"></slot>
  </div>
</template>

<script>
export default {
  name: "pagefooter"
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
