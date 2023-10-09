<template>
  <h1>Shopping Cart</h1>
  <div v-if="cartItems.length>0">
    <ShoppingCartList :products="cartItems" />
  </div>
  <div v-if="cartItems.length ===0">
    You currently have no items in your cart!
  </div>
  
</template>


<script>
import ShoppingCartList from '@/components/ShoppingCartList.vue';
import { cartItems } from '@/temp-data';

export default {
  name: "ShoppingCartPage",
  data(){
    return{
      cartItems
    }
  },
  components:{
    ShoppingCartList
  }
}
</script>