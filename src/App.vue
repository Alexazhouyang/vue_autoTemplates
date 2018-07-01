<template>
<el-container id="app">
<router-view></router-view>
</el-container>
</template>
<script>
export default {
  name: 'App',
  data(){
    return{
      isCollapse: true,
      user:'Alexa'
    }
  },
  methods:{
     
  }
}
</script>

<style>
 #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>