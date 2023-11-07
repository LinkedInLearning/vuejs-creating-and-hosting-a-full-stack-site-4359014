<template>
  <div v-if="product">
    <div class="img-wrap">
      <img :src="product.imageUrl"/>
      <div class="product-details">
        <h1>{{ product.name }}</h1>
        <h3 class="price">{{ product.price }}</h3>
        <button @click="addToCart" class="add-to-cart" v-if="user && !itemIsInCart">Add to Cart</button>
        <button class="grey-button" v-if="user && itemIsInCart">Item is already in cart</button>
        <button @click="signIn" class="sign-in" v-if="!user" >Sign in to add to Cart</button>
      </div>
    </div>
  </div>

  <div v-else>
    <NotFoundPage/>
  </div>
</template>

<script>
import {getAuth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink} from 'firebase/auth';
import axios from 'axios'
import NotFoundPage from './NotFoundPage.vue';

  export default {
      name: "ProductDetailPage",
      props:['user'],
      data(){
        return {
          product: {},
          cartItems: []

        }
      },
      computed: {
        itemIsInCart(){
          return this.cartItems.some(item => item.id === this.product.id);
        }
      },
      watch: {
        async user(newUserValue){
          if (newUserValue) {
            const cartResponse = await axios.get(`/api/users/${newUserValue.uid}/cart`);
            const cartItems = cartResponse.data;
            this.cartItems = cartItems;
          }
        }
      },
      methods: {
        async addToCart() {
          await axios.post(`/api/users/${this.user.uid}/cart`, {id: this.$route.params.productId});
          alert('Successfully added item to cart!');
        },
        async signIn(){
          const email = prompt('Please enter your email address');
          const auth = getAuth();
          const actionCodeSettings = {
            url: `https://full-stack-vue-hminagawa.onrender.com/products/${this.$route.params.productId}`,
            handleCodeInApp: true
          }
          await sendSignInLinkToEmail(auth, email, actionCodeSettings);
          alert(`An email has been sent to ${email}. Please click the link in the email to sign in.`);
          window.localStorage.setItem('emailForSignIn', email);
        }
      },
      components:{
        NotFoundPage
      },
      async created() {
        const auth = getAuth();
        if(isSignInWithEmailLink(auth,window.location.href)){
          const email = window.localStorage.getItem('emailForSignIn');
          await signInWithEmailLink(auth, email, window.location.href);
          alert('Successfully signed in!')
          window.localStorage.removeItem('emailForSignIn');
        }

        const response = await axios.get(`/api/products/${this.$route.params.productId}`);
        const product = response.data;
        this.product = product;


        if(this.user){
          const cartResponse = await axios.get(`/api/users/${this.user.uid}/cart`);
        const cartItems = cartResponse.data;
        this.cartItems = cartItems;
        }
        
      }
  }
</script>