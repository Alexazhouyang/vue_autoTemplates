<template>
<div id="login" style="width:100%">   
<el-card class="box-card" >
   <img src="../assets/logo.png"/>
   <h2>Login</h2>
  <el-form>
      <el-form-item label="User">
      <el-input placeholder="user name" v-model="username"/></el-form-item>
      <el-form-item label="Password">
      <el-input placeholder="password" v-model="password"/></el-form-item>
      <el-form-item>
      <el-button type="primary" @click="selectUser" >SUBMIT</el-button></el-form-item>
  </el-form>
</el-card>

    </div>
</template>
<script>
export default {
    name: 'Login',
    data(){
        return{
            username : '',
            password : '',
            list:[],
        }
    },
    methods:{
        selectUser(){
            this.$router.push({
                path: '/Product',
               })
        },
    },
}
</script>
<style  scoped>
#login{
   
    margin: 0 10% ;
    text-align: center;
    background-color: #2c3e50;
}
</style>



