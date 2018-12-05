<template>
  <div>
    <div class="user_comment_wrap">
      <h4 class="user">{{comment.username}}说：</h4>
      <p class="user_comment">{{comment.content}}</p>
      <button class="delbtn" @click="delItem">删除</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "item",
  props: {
    //声明接收 方式二 名称：类型
    comment: Object,
    delComment:Function,
    index:Number
  },
  methods:{
    delItem(){
      let {comment,delComment,index} = this
      if(window.confirm(`确定删除${comment.username}的评论吗？`)){
        delComment(index)
      }
    }
  }
};
</script>

<style scoped>
.user_comment_wrap {
  position: relative;
  margin-bottom: 10px;
  border-radius: 5px;
  text-align: left;
  font-size: 1.4rem;
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 0px;
  background: #fff;
  margin-top: -1px
}
.user {
  margin-bottom: 10px;
}
.user_comment {
  text-indent: 4rem;
}
.delbtn {
  position: absolute;
  top: 0px;
  right: 0;
}
</style>
