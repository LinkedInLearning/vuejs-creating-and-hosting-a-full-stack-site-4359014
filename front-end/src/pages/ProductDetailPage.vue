<template>
  <div v-if="product">
    <div class="image-wrap">
      <img :src="product.imageUrl"/>
    </div>
    <div class="product-details">
      <h1>{{ product.name }}</h1>
      <h3 class="price">{{ product.price }}</h3>
      <button @click="addToCart" class="add-to-cart" v-if="!itemIsInCart">Add to cart</button>
      <button class="grey-button" v-if="itemIsInCart">Item is already in cart</button>
    </div>
  </div>
  <div v-else>
    <NotFoundPage />
  </div>
</template>

<script>
import axios from 'axios';
import NotFoundPage from '@/pages/NotFoundPage.vue';

export default{
  name: "ProductDetailPage",
  data() {
    return{
      product: {},
      cartItems: [],
    }
  },
  computed: {
    itemIsInCart() {
      return this.cartItems.some(items => items.id === this.$route.params.productId);
    }
  },
  methods: {
    async addToCart() {
      await axios.post('/api/users/12345/cart', { id: this.$route.params.productId });
      alert('Successfully added item to cart!');
    }
  },
  components: {
    NotFoundPage,
  },
  async created() {
    const response = await axios.get(`/api/products/${this.$route.params.productId}`);
    const product = response.data;
    this.product = product;

    const cartItemsResponse = await axios.get('/api/users/12345/cart');
    const cartItems = cartItemsResponse.data;
    this.cartItems = cartItems;
  }
}
</script>