<template>
  <div class="image-wrap">
    <img :src="product.imageName"/>
  </div>
  <div class="product-details">
    <h1>{{ product.name }}</h1>
    <h3 class="price">{{ product.price }}</h3>
    <button class="add-to-cart">Add to cart</button>
  </div>
</template>

<script>
import { products } from '@/temp-data';

export default{
  name: "ProductDetailPage",
  data(){
    return{
      product: products.find(p => p.id === this.$route.params.productId),
    }
  }
}
</script>