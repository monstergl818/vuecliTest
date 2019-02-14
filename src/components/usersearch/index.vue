<template>
  <div>
    <el-container>
      <el-header height>
        <!-- Header content -->
        <searchheader></searchheader>
      </el-header>
      <el-main height>
        <!-- Main content -->
        <searchbody></searchbody>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// import pageheader from "../todolist/header.vue"
import searchheader from '../usersearch/searchheader.vue'
import searchbody from '../usersearch/searchbody.vue'
export default {
  name:"searchmain",
  components:{
    searchheader,
    searchbody
  }
};
</script>

<style scoped>
</style>
