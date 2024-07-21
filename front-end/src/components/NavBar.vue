<template>
  <div class="nav-bar">
    <router-link to="/products" class="products-link">
      <div class="logo-wrap">
        <img :src="logo" />
      </div>
    </router-link>
    <router-link to="/cart" class="cart-link">
      <button>Shopping Cart</button>
    </router-link>
  </div>
</template>

<script>
import logo from '@/assets/logo-hexagon.svg';

export default {
  name: "NavBar",
  data() {
    return {
      logo,
    }
  }
}
</script>