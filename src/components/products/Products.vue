<template>
  <div class="productsView">
    <h1> {{ message }} </h1>

    <div v-for="product in productsList">
      <div class="row product">
        <div class="col-sm-4">

          <div class="productdiv">
            <img class="productimg" :src="'/static/img/' + product.id + '.jpg'">

          </div>
        </div>
        <div class="col-sm-8">

          <h2>{{ product.name }}</h2>
          <p>{{ product.description }}</p>
          <div class="row">

          </div>
          <div class="row price-checkout-div">
            <div class="col-sm-6">
              <h1> CR$ <span class="price">{{product.price}} </span> </h1>
            </div>
            <div class="col-sm-6 buy-div">
              <button class="btn-custom-buy" v-on:click="add(product, product.price)"><i class="fa fa-cart-plus" aria-hidden="true"></i></button>
            </div>
          </div>

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
      imgUrl: '/static/img/',
      productsList: productsList
    }
  },
  methods: {
    add (product, productPrice) {
      console.log(this.$store)
      this.$store.commit('increment')
      this.$store.commit('addProduct', product)
      this.$store.commit('updateAmount', productPrice)
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
.price-checkout-div{
  margin: auto;
  padding: 20px;
}
.price{
  font-size: 70px;
}
.buy-div{
  margin: auto;
  text-align: right;

}
.btn-custom-buy{
  font-size: 70px;
  padding-right: 30px;
  background: black;
  border: 3px solid white;
  border-radius: 20px;
  background: #313131;
  color: #D9D9D9;
}
</style>
