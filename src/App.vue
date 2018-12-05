<template>
  <div id="app">
    <div class="logo">
      <img class="logo_img" src="../src/assets/logo.png">
      <h1 class="">Vue</h1>
    </div>

    <ul class="nav">
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/comment">评论</router-link>
      </li>
      <li>
        <router-link to="/todolist">todolist</router-link>
      </li>
    </ul>
    <div class="line"></div>

      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  font-family: "微软雅黑";
}
a {
  color: #fff;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 14px;line-height: 1.5
}
.nav {
  width: 100%;
}
.nav li {
  height: 30px;
  line-height: 30px;
  text-align: center;
  background: #15abf1;
  color: #fff;
  display: inline-block;
  padding: 0px 30px;
}
.logo{overflow: hidden;margin: 0px auto;margin: 20px 0}
.logo_img{width: 100px;float: left;}
.logo h1{float: left;margin-left: 20px;line-height: 100px;font-size: 5rem}
.line{height: 2px;width: 100%;margin: 20px 0;background:#dddfe0 ;}
</style>
