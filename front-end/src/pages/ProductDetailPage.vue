<template>
  <div v-if="product">
    <div class="img-wrap">
      <img :src="product.imageUrl" />
    </div>
    <div class="product-details">
      <h1>{{ product.name }}</h1>
      <h3 class="price">{{ product.price }}</h3>
      <button
        @click="addToCart"
        class="add-to-cart"
        v-if="user && !itemIsInCart"
      >
        Add to cart
      </button>
      <button class="grey-button" v-if="user && itemIsInCart">
        Item is already in cart
      </button>
      <button class="sign-in" @click="signIn" v-if="!user">
        Sign in to add to cart
      </button>
    </div>
  </div>
  <div v-else>
    <NotFoundPage />
  </div>
</template>

<script>
import {
  getAuth,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";
import axios from "axios";
import NotFoundPage from "./NotFoundPage.vue";

export default {
  name: "ProductDetailPage",
  props: ["user"],
  data() {
    return {
      product: {},
      cartItems: [],
    };
  },
  computed: {
    itemIsInCart() {
      return this.cartItems.some(
        (item) => item.id === this.$route.params.productId
      );
    },
  },
  watch: {
    async user(newUserValue) {
      if (newUserValue) {
        const cartResponse = await axios.get(
          `/api/users/${newUserValue.uid}/cart`
        );
        const cartItems = cartResponse.data;
        this.cartItems = cartItems;
      }
    },
  },
  methods: {
    async addToCart() {
      await axios.post(`/api/users/${this.user.uid}/cart`, {
        id: this.$route.params.productId,
      });
      alert("Successfully added item to cart!");
    },
    async signIn() {
      const email = prompt("Please enter your email to sign in:");
      const auth = getAuth();
      const actionCodeSettings = {
        url: `<THE URL OF THE APPLICATION YOU CREATED IN THE RENDER DASHBOARD>`,
        handleCodeInApp: true,
      };
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      alert("A login link was sent to the email you provided");
      window.localStorage.setItem("emailForSignIn", email);
    },
  },
  components: {
    NotFoundPage,
  },
  async created() {
    const auth = getAuth();
    if (isSignInWithEmailLink(auth, window.location.href)) {
      const email = window.localStorage.getItem("emailForSignIn");
      await signInWithEmailLink(auth, email, window.location.href);
      alert("Successfully signed in!");
      window.localStorage.removeItem("emailForSignIn");
    }

    const response = await axios.get(
      `/api/products/${this.$route.params.productId}`
    );
    const product = response.data;
    this.product = product;

    if (this.user) {
      const cartResponse = await axios.get(`/api/users/${this.user.uid}/cart`);
      const cartItems = cartResponse.data;
      this.cartItems = cartItems;
    }
  },
};
</script>
