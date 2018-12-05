<template>
  <div class="list_wrap">
    <h3 class="part_tit">评论回复</h3>
    <h4 v-show="comments.length==0">暂无评论</h4>
    <item v-for="(comment,index) in comments" :key='index' :comment="comment" :delComment='delComment' :index='index'></item>
  </div>
</template>

<script>
  import item from "../comment/item.vue"//引入组件
  export default {
    name:'list',
    //声明接收属性,所有接收到的属性，都会成为组件对象的属性
    props:['comments','delComment'],
    components:{
      //注册组件
      item
    }
  }
</script>

<style scoped>
.part_tit{margin-top: 0px;text-align: left;margin-bottom: 10px;font-size: 1.5rem}
</style>
