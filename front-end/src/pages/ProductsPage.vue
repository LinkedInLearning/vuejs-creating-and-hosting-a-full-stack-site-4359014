<template>
  <h1>Products</h1>
  <ProductList :products="products" />
</template>

<script>
import ProductList from '@/components/ProductsList.vue'
import { products } from '@/temp-data';

export default {
  name: "ProductsPage",
  components: {
    ProductList
  },
  data(){
    return {
      products,
    }
  }
}
</script>