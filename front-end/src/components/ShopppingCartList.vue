<template>
  <div 
          class="product-container"
          v-for="product in cartItems"
          :key="product.id">
          <img class="product-image" :src="product.imageName"/>
          <div class="details-wrap">
            <h3>{{ product.name }}</h3>
            <p>{{ product.price }}</p>
          </div>
          <button class="remove-button">Remove from cart</button>
        </div>
</template>

<script>
export default {
  name: "ShoppingCartList",
  props: ['cartItems'],
}
</script>