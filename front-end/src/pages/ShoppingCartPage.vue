<template>
  <h1>Shopping Cart</h1>
  <div v-if="cartItems.length>0">
    <ShoppingCartList @remove-from-cart="removeFromCart($event)" :products="cartItems" />
  </div>
  <div v-if="cartItems.length ===0">
    You currently have no items in your cart!
  </div>
  
</template>


<script>
import axios from 'axios';
import ShoppingCartList from '@/components/ShoppingCartList.vue';

export default {
  name: "ShoppingCartPage",
  props:['user'],
  data(){
    return{
      cartItems:[]
    }
  },
  components:{
    ShoppingCartList
  },
  watch: {
    async user(newUserValue) {
      if (newUserValue) {
        const cartResponse = await axios.get(`/api/users/${newUserValue.uid}/cart`);
        const cartItems = cartResponse.data;
        this.cartItems = cartItems;
      }
    }
  },
  methods: {
    async removeFromCart(productId){
      const response = await axios.delete(`/api/users/${this.user.uid}/cart/${productId}`);
      const updatedCart = response.data;
      this.cartItems = updatedCart;
    }
  },
  async created(){
    if(this.user){
      const response = await axios.get(`/api/users/${this.user.uid}/cart`);
      const cartItems = response.data
      this.cartItems = cartItems;
    }

  }
}
</script>