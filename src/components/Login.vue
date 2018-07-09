<template>
<div id="login" class="login-wrap" style="width:100%">   
<el-card class="box-card" >
   <img src="../assets/logo.png"/>
   <h2>Login</h2>
  <el-form :model="log_form">
      <el-form-item label="User">
      <el-input placeholder="user name" v-model="log_form.username"/></el-form-item>
      <el-form-item label="Password">
      <el-input  placeholder="password" v-model="log_form.password"/></el-form-item>
      <el-form-item>
      <el-button type="primary" @click="checkLogin('log_form')" >SUBMIT</el-button></el-form-item>
  </el-form>
  <a @click="goToReg()">Register</a>
</el-card>

    </div>
</template>
<script>
export default {
    name: 'Login',
    data(){
        return{
            log_form:{
                username : '',
                password : '',
            },
            list:[],
        }
    },
    methods:{
        checkLogin(log_form){
            let formData ={
                name:this.log_form.username,
                password:this.log_form.password,
            }
          this.$http.post('/api/user/login',formData).then((response) => {
            console.log(response);
            this.$router.push('./movie-show')
          // this.list = response.body;
        }).then(function(error) {
			console.log(error);})
        },
        goToReg(){
            this.$router.push('/Register')
        }
    },
    
}
</script>
<style  scoped>
#login{
   
    margin: 10% 10%;
    text-align: center;
    background-color: #242f42;
}
a{
    color: #2c3e50;
}
</style>



