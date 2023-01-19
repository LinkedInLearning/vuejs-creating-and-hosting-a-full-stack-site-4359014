<template>
  <div v-if="product">
      <div class="img-wrap">
        <img :src="product.imageUrl" />
      </div>
      <div class="product-details">
        <h1>{{ product.name }}</h1>
        <h3 class="price">{{ product.price }}</h3>
        <button @click="addToCart" class="add-to-cart" v-if="user && !itemIsInCart">Add to cart</button>
        <button class="grey-button" v-if="user && itemIsInCart">Item is already in cart</button>
        <button v-if="!user" @click="signIn">Sign in to add to cart</button>
      </div>
  </div>
  <div v-else>
    <NotFoundPage />
  </div>
</template>

<script>
import axios from 'axios';
import { getAuth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import NotFoundPage from './NotFoundPage.vue';

export default {
  name: "ProductDetailPage",
  props: ['user'],
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
  methods: {
    async addToCart() {
      await axios.post(`/api/users/${this.user.uid}/cart`, { id: this.$route.params.productId });
      alert('Successfully added item to cart!');
    },
    signIn() {
      const email = prompt('Please enter your email to sign in:');
      const auth = getAuth();
      const actionCodeSettings = {
        url: `https://shaunwa-cautious-space-happiness-5v76p774rw63j6w-8080.preview.app.github.dev/products/${this.$route.params.productId}`,
        handleCodeInApp: true,
      };
      sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
          window.localStorage.setItem('emailForSignIn', email);
          alert('A login link was sent to the email you provided');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  components: {
    NotFoundPage
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
  async created() {
    const auth = getAuth();
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem('emailForSignIn');
      if (!email) {
        email = window.prompt('Please provide your email for confirmation');
      }
      signInWithEmailLink(auth, email, window.location.href)
        .then(() => {
          window.localStorage.removeItem('emailForSignIn');
          alert('Successfully signed in!');
        })
        .catch((error) => {
          console.log(error);
        });
    }

    const response = await axios.get(`/api/products/${this.$route.params.productId}`);
    const product = response.data;
    this.product = product;

    if (this.user) {
      const response = await axios.get(`/api/users/${this.user.uid}/cart`);
      const cartItems = response.data;
      this.cartItems = cartItems;
    }
  }
}
</script>