<template>
    <div id="login">
        <el-container>
<el-card class="box-card">
  <h2>Login</h2>
  <el-form>
      <el-form-item label="User">
      <el-input placeholder="user name" v-model="username"/></el-form-item>
      <el-form-item label="Password">
      <el-input placeholder="password" v-model="password"/></el-form-item>
      <el-form-item>
      <el-button @click="selectUser" class="" >SUBMIT</el-button></el-form-item>
  </el-form>
</el-card>
        </el-container>
    </div>
</template>
<script>
export default {
    name: 'Login',
    data(){
        return{
            username : '',
            password : '',
        }
    },
    methods:{
        selectUser(){

        },
    },
}
</script>
<style  scoped>
#login{
    text-align: center;

}
</style>



