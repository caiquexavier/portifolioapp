<template>
<div id="productsView">
  <h1> Here's my product View </h1>
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
      message: 'A message for display',
      productsList: productsList
    }
  }

}
</script>
