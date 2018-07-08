<template>
<div id="app">
<router-view></router-view>
</div>
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
 @import "/assets/css/main.css";
 @import "assets/css/color-dark.css";     /*深色主题*/
</style>