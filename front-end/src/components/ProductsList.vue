<template>
  <div class="grid-wrap">
      <div 
        class="product-item"
        v-for="product in products"
        :key="product.id"
        >
        <img :src="product.imageUrl" />
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-price">{{ product.price }}</p>
        <RouterLink :to="'/products/' + product.id">
          <button>View Details</button>
        </RouterLink>
      </div>
    </div>
</template>

<script>
export default {
  name: "ProductsList",
  props:['products']
}
</script>