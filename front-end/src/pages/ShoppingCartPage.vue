<template>
  <h1>Shopping Cart</h1>
  <div v-if="cartItems.length>0">
    <div 
    class="product-container"
    v-for="product in cartItems"
    :key="product.id"
    >
    <img class="product-image" :src="product.imageName"/>
    <div class="product-details">
      <h3>{{ product.name }}</h3>
      <p>{{ product.price }}</p>
    </div>
    <button class="remove-button">Remove from Cart</button>
    </div>
    <button class="checkout-button">Proceed to Checkout</button>
  </div>
  <div v-if="cartItems.length ===0">
    You currently have no items in your cart!
  </div>
  
</template>


<script>
import { cartItems } from '@/temp-data';
export default {
  name: "ShoppingCartPage",
  data(){
    return{
      cartItems:[]
    }
  }
}
</script>