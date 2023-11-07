<template>
  <div 
      class="product-container"
      v-for="product in products"
      :key="product.id"
      >
      <img class="product-image" :src="product.imageUrl"/>
      <div class="product-details">
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }}</p>
      </div>
      <button @click="$emit('remove-from-cart',product.id)" class="remove-button">Remove from Cart</button>
      </div>
      <button class="checkout-button">Proceed to Checkout</button>
</template>

<script>
export default {
  name:"ShoppingCartList",
  props:['products']
}
</script>