<template>
  <div class="user">
    <h1>{{ msg }}</h1>
    <form>
      <input type="text" name="username" v-model="userName"> <br>
      <input type="text" name="age" v-model="age"> <br>
       <a href="javascript:;" @click="addUser">提交</a>
      <!-- <button ref="javascript:;" @click="addUser">提交</button> -->
    </form>
    <br>
    
  </div>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      msg: 'User List',
      userName: '',
      age: '',
     
    }
  },
  mounted(){
   this.selectProduct();
  },
  methods: {
    addUser() {
      var name = this.userName;
      var age = this.age;
      if(name && age){
      this.$http.post('/api/user/addUser', {
        username: name,
        age: age
      },{
      }).then((response) => {
        alert("name:"+this.userName+"\n age:"+this.age)
        console.log(response);
      })
    }else{
      alert("please fill the empty")
    }
    },
    selectUser() {
      this.$http.get('/api/product/selectUser').then((response) => {
        console.log(response);
        this.list = response.body;
      }),response => {
        //error callback
      }
    }
  }
}
</script>