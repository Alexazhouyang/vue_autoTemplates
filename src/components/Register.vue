<template>
<div id="register" style="width:100%">   
<el-card class="box-card" >
   <img src="../assets/logo.png"/>
   <h2>Register</h2>
  <el-form ref="reg_form" :model="reg_form" :rules="rules">
      <el-form-item label="User" prop="name">
      <el-input placeholder="user name" v-model="reg_form.username"/></el-form-item>
      <el-form-item label="Password" prop="password">
      <el-input type="password" placeholder="password" v-model="reg_form.password"/></el-form-item>
      <el-form-item label="RepeatPassword" prop="checkPass">
      <el-input type="password" placeholder="repeat password" /></el-form-item>
      <el-form-item label="Email" prop="email">
      <el-input type="email" placeholder="email" v-model="reg_form.email"/></el-form-item>
      <el-form-item label="Phone" prop="phone">
      <el-input  placeholder="phone number" v-model="reg_form.phone"/></el-form-item>
       <el-form-item label="Gender" prop="gender">
      <el-select class="select-sex" placeholder="gender" v-model="reg_form.gender">
		<el-option label="male" value="male"></el-option>
		<el-option label="female" value="female"></el-option></el-select>
      </el-form-item>
      <el-form-item>
      <el-button type="primary" @click="addUser('reg_form')" >SUBMIT</el-button></el-form-item>
  </el-form>
  <a @click="goToLog()">Login</a>
</el-card>

    </div>
</template>
<script>
import Util from '../assets/js/utils';
export default {
    name: 'Register',
    data(){
        var validatePass = (rule, value, callback) => {
    if(value === '') {
        callback(new Error('please input password'));
    } else {
        if(this.reg_form.checkPass !== '') {
            this.$refs.reg_form.validateField('checkPass');
        }
        callback();
    }
};
var validatePass2 = (rule, value, callback) => {
    if(value === '') {
        callback(new Error('please input password again'));
    } else if (value !== this.reg_form.password) {
        callback(new Error('the password is not correct'));
    } else {
        callback();
    }
};
var validateEmail = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入邮箱'));
    } else if (!Util.emailReg.test(this.reg_form.email)){
        callback(new Error('请输入正确的邮箱'));
    } else {
        callback();
    }
};
var validatePhone = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入手机号'));
    } else if (!Util.phoneReg.test(this.reg_form.phone)){
        callback(new Error('请输入正确的手机号'));
    } else {
        callback();
    }
};
        return{
            reg_form:{
                username : '',
                password : '',
                email: '',
                phone:'',
                gender:'',
            },
            rules: {
                    name: [
                        { required: true, message: 'please input username', trigger: 'blur' }
                    ],
                    password: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                    email: [
                        { validator: validateEmail, trigger: 'blur' }
                    ],
                    phone: [
                        { validator: validatePhone, trigger: 'blur' }
                    ],
                    gender: [
                        { required: true, message: 'please input gender(female/male)', trigger: 'blur' }
                    ]
                },
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
#register{
   
    margin: 10% 10%;
    text-align: center;
    background-color: #242f42;
}
a{
    color: #2c3e50;
}
</style>



