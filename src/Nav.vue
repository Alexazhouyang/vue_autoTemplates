<template>
<div id = "nav">
    <el-col :span="12">
    <el-menu
      default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <router-link to="/User" >
       <el-menu-item index="1"><i class="el-icon-menu"></i><span slot="title">User</span>
      </el-menu-item></router-link>
      <router-link to="/Product">
      <el-menu-item index="2"><i class="el-icon-document"></i><span slot="title">Product</span>
      </el-menu-item></router-link>
    </el-menu>
    </el-col>
</div> 
</template>
<script>
export default {
    name:'Nav',
    data(){
        return{
            isCollapse: true,
        }
    },
    methods:{
         handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
}
</script>

