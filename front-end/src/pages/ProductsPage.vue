<template>
  <h1>Products</h1>
  <div class="grid-wrap">
    <div v-for="product in products">
        <img src="" alt="" class="src">
    </div>
  </div>
</template>

<script>
  import products from '../temp-data';
  export default {
    name:'ProductsPage',
  }
</script>