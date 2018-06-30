<template>
    <div class="product">
        <h1>{{intro}}</h1>
      <el-form >
      <el-input placeholder="productname" v-model="productName"></el-input>
      <el-input placeholder="description" v-model="description"></el-input>
       <el-button @click="addProduct">提交</el-button>
     </el-form>
    <ul>
      <li v-for="item in list">{{item.name}}---{{item.description}}</li>
    </ul>
    </div>
</template>

<script>
export default {
    name: "Product",
    data(){
        return{
            intro: 'Product List',
             productName:'',
             description:'',
             list:[],
        }
    },
    mounted(){
   this.selectProduct();
  },
  methods: {
    addProduct() {
      var name = this.productName;
      var description = this.description;
      if(name && description){
      this.$http.post('/api/product/addProduct', {
        productname: name,
        description: description
      },{
      }).then((response) => {
        console.log(response);
        this.selectProduct();
      })
    }else{
      alert("please fill the empty")
    }
    },
    selectProduct() {
      this.$http.get('/api/product/selectProduct').then((response) => {
        console.log(response);
        this.list = response.body;
      }),response => {
        //error callback
      }
    }
  }
}
</script>

