<template>
<div id="login" style="width:100%">   
<el-card class="box-card" >
   <img src="../assets/logo.png"/>
   <h2>Register</h2>
  <el-form :model="reg_form">
      <el-form-item label="User">
      <el-input placeholder="user name" v-model="reg_form.username"/></el-form-item>
      <el-form-item label="Password">
      <el-input type="password" placeholder="password" v-model="reg_form.password"/></el-form-item>
      <el-form-item label="Email">
      <el-input type="email" placeholder="email" v-model="reg_form.email"/></el-form-item>
      <el-form-item label="Phone">
      <el-input  placeholder="phone number" v-model="reg_form.phone"/></el-form-item>
       <el-form-item label="Gender">
      <el-input  placeholder="gender" v-model="reg_form.gender"/></el-form-item>
      <el-form-item>
      <el-button type="primary" @click="addUser('reg_form')" >SUBMIT</el-button></el-form-item>
  </el-form>
  <a @click="goToLog()">Login</a>
</el-card>

    </div>
</template>
<script>
export default {
    name: 'Login',
    data(){
        return{
            reg_form:{
                username : '',
                password : '',
                email: '',
                phone:'',
                gender:'',
            },
            list:[],
        }
    },
    methods:{
        addUser(form){
            let formData ={
                name:this.reg_form.username,
                password:this.reg_form.password,
                email:this.reg_form.email,
                phone:this.reg_form.phone,
                gender:this.reg_form.gender,
            }
          this.$http.post('/api/user/addUser',formData).then((response) => {
            console.log(response);
            this.$router.push('/Product')
          // this.list = response.body;
        }).then(function(error) {
			console.log(error);})
        },
        goToLog(){
            this.$router.push('./Login')
        }
    },
    
}
</script>
<style  scoped>
#Register{
   
    margin: 0 10% ;
    text-align: center;
    background-color: #2c3e50;
}
</style>



