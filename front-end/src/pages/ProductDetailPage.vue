<template>
  <div v-if="product">
    <div class="img-wrap">
      <img :src="product.imageUrl" />
    </div>
  
    <div class="product-details">
      <h1>{{ product.name }}</h1>
      <h3 class="price">{{ product.price }}</h3>
      <button @click="addToCart" class="add-to-cart" v-if="user && !itemIsInCart">Add to Cart</button>
      <button class="grey-button" v-if="user && itemIsInCart">Item is already in cart</button>
      <button @click="signIn" class="sign-in" v-if="!user">Sign in to add to cart</button>
      <button @click="register" class="sign-in" v-if="!user">Create account</button>
    </div>
  </div>

  <div v-else>
    <NotFoundPage />
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'; 
import axios from 'axios';
import NotFoundPage from './NotFoundPage.vue';

  export default {
    name: "ProductDetailPage",
    props:['user'],
    data() {
      return {
        product: {},
        cartItems: [],
      }
    },
    computed: {
      itemIsInCart() {
        return this.cartItems.some(item => item.id === this.$route.params.productId);
      }
    },
    watch: {
      async user(newUserValue) {
        if(newUserValue) {
          const cartResponse = await axios.get(`/api/users/${newUserValue.uid}/cart`);
          const cartItems = cartResponse.data;
          this.cartItems = cartItems;
        }
      }
    },  
    methods: {
      async addToCart() {
        await axios.post(`/api/users/${this.user.uid}/cart`, { id: this.$route.params.productId })
        alert('Successfully added item to cart!');
      },
      async signIn() {
        const auth = getAuth();
        const email = prompt('Please enter your email:');
        const password = prompt('Please enter your password:');

        if(!email || !password) return;

        try {
          await signInWithEmailAndPassword(auth, email, password);
          alert('Successfully signed in!');
        } catch(e) {
          console.error(e.code, e.message);
          alert(e.message);
        }
      },
      async register() {
        const auth = getAuth();
        const email = prompt('Please enter your email:');
        const password = prompt('Please enter your password:');

        if(!email || !password) return;

        try {
          await createUserWithEmailAndPassword(auth, email, password);
          alert('Account created and signed in');
        } catch(e) {
            console.error(e.code, e.message);
            alert(e.message);
        }
      }
    },
    components: {
      NotFoundPage
    },
    async created() {
      const response = await axios.get(`/api/products/${this.$route.params.productId}`);
      const product = response.data;
      this.product = product;

      if(this.user) {
        const cartResponse = await axios.get(`/api/users/${this.user.uid}/cart`);
        const cartItems = cartResponse.data;
        this.cartItems = cartItems;
      }
    }
  }

</script>