<template>
  <div id="app">
      <h2 class="page_tit">请发表对vue的评论</h2>
      <div class="container">
        <div class="left">
          <add :addComment="addComment"></add>
        </div>
        <div class="right">
          <list :comments="comments" :delComment="delComment"></list>
        </div>
      </div>
  </div>
</template>

<script>
import add from '../comment/add'
import list from '../comment/list'
export default {
  name: 'comment',
  data(){
    return {
      comments:[
        {
          username:'张三',
          content:'vue so easy!'
        },
        {
          username:'李四',
          content:'vue is wonderful'
        },
        {
          username:'老王',
          content:'just so so'
        }
      ]
    }
  },
  methods:{
    addComment(comment){
      this.comments.unshift(comment)
    },
    delComment(index){
      this.comments.splice(index,1)
    }
  },
  components:{
    add,
    list
  }
}
</script>

<style>
.container{overflow:hidden;}
  .left{width: 30%;float: left;overflow: hidden;}
  .right{width: 65%;float: right;overflow: hidden}
  .page_tit{font-size: 2rem;padding: 0px 0;margin-bottom: 10px}
</style>
