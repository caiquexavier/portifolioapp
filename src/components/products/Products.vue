<template>
<div class="productsView">
  <h1> {{ message }} </h1>
  <div v-for="product in productsList">
    <h2>{{ product.name }}</h2>
    <p>{{ product.description }}</p>
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
      productsList: productsList
    }
  }

}
</script>
