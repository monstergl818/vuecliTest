<template>
  <div>
    <p v-if="!repoName">loading...</p>
    <p v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></p>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data(){
      return{
        repoName:'',
        repoUrl:'',
        searchName:'v'
      }
    },
    mounted(){
      const linkurl = 'https://api.github.com/search/repositories?q=v&sort=stars'
      //使用vue-resource发送ajax请求异步获取数据
      // this.$http.get(linkurl)
      //   .then(
      //     response => {
      //       console.log(response)
      //       //success
      //       const result = response.data
      //       const repo = result.items[0]
      //       this.repoName = repo.full_name
      //       this.repoUrl = repo.html_url
      //     },
      //     response => {
      //       alert('请求失败！')
      //     },
      //   )


      //使用axios发送请求
      axios.get(linkurl)
      .then(
          response => {
            //success
            const result = response.data
            console.log(result)
            const repo = result.items[0]
            this.repoName = repo.name
            this.repoUrl = repo.html_url
          }
      )
      .catch(error=>{
        alert('请求失败！')
      })
    }

  }
</script>

<style scoped>
a:link{color: rgb(28, 148, 228);}
a:visited{color: rgb(28, 148, 228);}
a:hover{color:brown;}
</style>
