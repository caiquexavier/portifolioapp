<template>
  <div class="productsView">
    <h1> {{ message }} </h1>

    <div v-for="product in productsList">
      <div class="row product">
        <div class="col-sm-4">

          <div class="productdiv">
            <!-- <img class="productimg" :src="imgUrl + product.id +'.jpg'"> -->
            <img class="productimg" src="">
          </div>
        </div>
        <div class="col-sm-8">

          <h2>{{ product.name }}</h2>
          <p>{{ product.description }}</p>

        </div>
      </div>
      <br/>
    </div>



  </div>
</template>

<script>
import productsList from '../../assets/products/products.json'

export default{
  name: 'productsView',
  data () {
    return {
      message: 'Here is my products: ',
      imgUrl: '../../assets/img/',
      productsList: productsList
    }
  }

}
</script>
<style scoped>
.product{
  background: #313131;
  color: #D9D9D9;
  border: 2px solid;
  border-radius: 10px;

}
.productdiv{
  margin: 10px;
  padding: 10px;


}
.productimg{
  height: 300px;

}
</style>
