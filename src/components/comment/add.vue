<template>
  <div class="add_wrap">
    <p>用户名</p>
    <input type="text" name="" id="" placeholder="用户名" v-model="username">
    <p>评论内容</p>
    <textarea name="" id="" cols="30" rows="10" placeholder="评论内容" v-model="content"></textarea>
    <button class="btncomit" @click="add">提交</button>
  </div>
</template>

<script>
export default {
  name: "add",
  data() {
    return {
      username: "",
      content: ""
    };
  },
  props: {
    addComment: {
      //属性名为addComment
      type: Function, //属性值类型为函数
      required: true //是否必须
    }
  },
  methods: {
    add: function() {
      //1.检查输入
      let username = this.username.trim();
      let content = this.content.trim();

      //2.根据输入的数据 封装一个comment
      let comment = {
        username,
        content
      };
      //3、添加到comments 更新数据
      if (username && content) {
        this.addComment(comment);
      } else alert("请输入用户名和评论内容");

      //4.清除输入
      this.username = "";
      this.content = "";
    }
  }
};
</script>

<style scoped>
.add_wrap p {
  text-align: left;
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-top: 0px;
}
input {
  padding: 0 10px;
  width: 100%;
  height: 40px;
  border-style: none;
  border: 1px solid #ccc;
  border-radius: 5px;
}
textarea {
  font-family: "微软雅黑";
  padding: 10px;
  width: 100%;
  border-style: none;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.btncomit {
  margin: 0px auto;
  margin-top: 20px;
  padding: 8px 30px;
}
</style>
</style>
