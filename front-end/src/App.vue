<template>
  <NavBar :user="user" />
  <div class="page-wrap">
      <router-view :user="user"></router-view>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import NavBar from '@/components/NavBar.vue'

export default {
  name: "App",
  data() {
    return {
      user: getAuth().currentUser,
    }
  },
  components: {
    NavBar,
  },
  created() {
    onAuthStateChanged(getAuth(), user => {
      this.user = user;
    })
  }
};
</script>
