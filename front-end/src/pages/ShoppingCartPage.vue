<template>
  <h1>Shopping Cart</h1>
  <div v-if="cartItems.length > 0">
    <ShoppingCartList :products="cartItems" />
    <button class="checkout-button">Proceed to Checkout</button>
  </div>
  <div v-if="cartItems.length === 0">
    You current have no items in your cart!
  </div>
</template>

<script>
import ShoppingCartList from '@/components/ShoppingCartList.vue';
import { cartItems } from '../temp-data';

export default {
  name: "ShoppingCartPage",
  components: {
    ShoppingCartList,
  },
  data() {
    return {
      cartItems,
    }
  }
}
</script>