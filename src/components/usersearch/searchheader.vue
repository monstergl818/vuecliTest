<template>
  <div>
    <el-form  ref="form" >
        <el-form-item label="">
          <el-row :gutter="10">
            <el-col :span="10">
              <el-input v-model="searchName" placeholder="请输入关键字进行查询"></el-input>
            </el-col>
            <el-col :span="2">
              <el-button type="primary" icon="el-icon-search" @click="search" >查询</el-button>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
  import PubSub from "pubsub-js"
  export default {
    name: "searchheader",
    data(){
      return{
        searchName:"",
      }
    },
    methods:{
      search(){
        const searchName = this.searchName.trim()
        if(searchName){
          console.log(searchName)
          //发布消息（相当于触发自定义事件）
          PubSub.publish('search',searchName)
        }
      }
    }
  }
</script>

<style scoped>

</style>
