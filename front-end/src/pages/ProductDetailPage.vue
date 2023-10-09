<template>
  <div v-if="product">
    <div class="img-wrap">
      <img :src="product.imageName"/>
      <div class="product-details">
        <h1>{{ product.name }}</h1>
        <h3 class="price">{{ product.price }}</h3>
        <button class="add-to-cart">Add to Cart</button>
      </div>
    </div>
  </div>

  <div v-else>
    <NotFoundPage/>
  </div>
</template>

<script>
import { products } from '@/temp-data'; 
import NotFoundPage from './NotFoundPage.vue';

  export default {
      name: "ProductDetailPage",
      data(){
        return {
          product:products.find(product => product.id === this.$route.params.productId)
        }
      },
      components:{
        NotFoundPage
      }
  }
</script>