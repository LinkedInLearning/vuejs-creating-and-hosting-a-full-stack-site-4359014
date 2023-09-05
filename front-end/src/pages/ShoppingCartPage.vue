<template>
  <h1>Shoppring Cart</h1>
  <div v-if="cartItems.length > 0">
      <ShopppingCartList :cartItems="cartItems"/>
      </div>
      <div v-if="cartItems.length === 0">
        Your cart is empty!!
      </div>
  
</template>
<script>
import ShopppingCartList from '@/components/ShopppingCartList.vue';
import { cartItems } from '../temp-data.js'
 export default {
  name: "ShoppingCartPage",
  components: {
    ShopppingCartList,
  },
  data() {
    return {
      cartItems,
    }
  }
 }
</script>