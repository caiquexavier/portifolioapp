<template>
  <div class="products">

    <div class="row product" v-for="product in productsList">
        <div class="col-sm-4">
          <div class="productdiv">
            <img class="productimg" :src="'/static/img/' + product.id + '.jpg'">
          </div>
        </div>

        <div class="col-sm-6">
          <h2>{{ product.name }}</h2>
          <p>{{ product.description }}</p>

          <div class="row price-checkout-div">
            <div class="col-sm-12">
              <h1> <span class="price">{{product.price | currency}} </span> </h1>
            </div>
          </div>
        </div>

        <div class="col-sm-2">
            <button class="btn-custom-buy" v-on:click="add(product, product.price)"><i class="fa fa-cart-plus" aria-hidden="true"></i></button>
        </div>
    </div>

  </div>
</template>

<script>
import productsList from '../../assets/products/products.json'

export default{
  name: 'products',
  data () {
    return {
      message: 'Here is my products: ',
      productsList: productsList
    }
  },
  methods: {
    add (product, productPrice) {
      this.$store.commit('increment')
      this.$store.commit('addProductToOrder', product)
      this.$store.commit('updateAmount', productPrice)
    }
  }

}
</script>
<style scoped>
.product{
  margin: 10px;
  color: #313131;
  background-color: #fcfcfc;
  /*box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);*/

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
.btn-custom-buy{
  margin-top: 40%;
  font-size: 50px;
  background: #f5f5f5;
  border: 0px;
  border-radius: 50%;
	width: 100px;
	height: 100px;
  color: #313131;
  /*box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);*/
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
.btn-custom-buy:hover{
  transition: all 0.2s ease 0s;
  background: #02b387;
  color: #D9D9D9;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
</style>
