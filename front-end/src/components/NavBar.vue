<template>
  <div class="nav-bar">
    <RouterLink to="/products" class="products-links">
      <div class="logo-wrap">
        <img :src="logo"/>
      </div>
    </RouterLink>
    <div class="nav-buttons-wrap">
      <button @click="signOut" v-if="user">Sign Out</button>
      <RouterLink to="/cart">
        <button>Shopping Cart</button>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { getAuth, signOut } from 'firebase/auth'
import logo from '@/assets/logo-hexagon.svg';

export default{
  name: "NavBar",
  props: ['user'],
  data(){
    return{
      logo,
    }
  },
  methods: {
    signOut() {
      const auth = getAuth();
      signOut(auth);
    }
  }
}
</script>