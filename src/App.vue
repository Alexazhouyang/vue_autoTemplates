<template>
<el-container id="app">
  <el-container style="height:600px; border: 1px solid #eee">
  <el-aside width=auto style="background-color: rgb(238, 241, 246)">
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse" >
      <router-link to="/User">
     <el-menu-item index="1"><i class="el-icon-menu"></i>
    <span slot="title">User</span>
  </el-menu-item></router-link>
      <router-link to="/Product">
      <el-menu-item index="2"><i class="el-icon-document"></i>
    <span slot="title">Product</span>
  </el-menu-item></router-link>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
  </el-container>
</el-container>
</template>
<script>
export default {
  name: 'App',
  data(){
    return{
      isCollapse: true,
    }
  },
  methods:{
     
  }
}
</script>

<style>
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>