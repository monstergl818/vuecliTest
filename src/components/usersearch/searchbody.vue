<template>
  <div>
    <h3 v-if="firstView">请输入关键字搜索</h3>
    <h3 v-if="loading">Loading</h3>
    <h3 v-if="errorMsg">{{errorMsg}}</h3>
    <el-row :gutter="20" v-if="users">
      <el-col :span="6" v-for="(user,index) in users" :key="index" class="item">
        <a class="grid-content bg-purple" :href="user.url">
          <img :src="user.avatar" alt>
          <p class="userName">{{user.name}}</p>
        </a>
      </el-col>
    </el-row>
  </div>
</template>


<script>
import PubSub from "pubsub-js";
import axios from "axios";
export default {
  data() {
    return {
      firstView: true,
      errorMsg: "",
      loading: false,
      users: []
    };
  },
  mounted() {
    //订阅消息 相当于绑定监听
    PubSub.subscribe("search", (message, serachName) => {
      //发送新的ajax请求
      //请求之前跟新状态
      this.firstView = false;
      this.loading = true;
      const url = `https://api.github.com/search/users?q=${serachName}`;
      axios
        .get(url)
        .then(response => {
          console.log(response.data);
          console.log("请求成功");
          const result = response.data.items;
          //this.users = result
          // this.users = result.map(function(items){
          //   return{
          //     url:items.html_url,
          //     avatar:items.avatar_url,
          //     name:items.login
          //   }
          // })
          // map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

          // map() 方法按照原始数组元素顺序依次处理元素。

          // 注意： map() 不会对空数组进行检测。

          // 注意： map() 不会改变原始数组。
          // this.users = response.data.items.map(items => {
          //   return {
          //     url: items.html_url,
          //     avatar: items.avatar_url,
          //     name: items.login
          //   };
          // });
          this.users = response.data.items.map(items => ({
              url: items.html_url,
              avatar: items.avatar_url,
              name: items.login
              })
           );
          this.loading = false;
        })
        .catch(error => {
          this.loading = false;
          this.errorMsg = "请求失败";
        });
    });
  }
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.item img {
  width: 100%;
}
.userName {
  text-align: center;
  margin: 10px 0;
  font-weight: bold;
  color: #000;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
