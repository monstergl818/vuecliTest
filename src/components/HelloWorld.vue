<template>
  <div>
    <div>
      <h1>Notes</h1>
      <h3>组件写法</h3>
      <p>拆分组件:静态组件/动态组件</p>
      <p>初始化动态显示，完成交互</p>
      <h3>组件通信原则</h3>
      <p>不在子组件中直接修改父组件的状态数据</p>
      <p>数据在哪，更新数据的行为（函数）就定义在哪</p>
      <hr>
      <p>过滤器filter:</p>
      <p>指令的作用：对所在标签进行特定处理</p>
    </div>
  </div>
</template>

<script>
  export default {
    name:'helloworld'
  }
</script>

<style scoped>
  .logo{width: 100px}
</style>
