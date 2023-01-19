import { createApp } from 'vue'
import App from './App.vue'
import './main.css';
import * as VueRouter from 'vue-router'
import ShoppingCartPage from './pages/ShoppingCartPage.vue';
import ProductsPage from './pages/ProductsPage.vue';
import ProductDetailPage from './pages/ProductDetailPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArTZyYQXG5-7hZbKvdu4cUqXTpsjGaIj8",
  authDomain: "vue-site-bcbc6.firebaseapp.com",
  projectId: "vue-site-bcbc6",
  storageBucket: "vue-site-bcbc6.appspot.com",
  messagingSenderId: "93205065646",
  appId: "1:93205065646:web:1f86c5e8cef2ac804da23f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App)
.use(VueRouter.createRouter({
  history: VueRouter.createWebHistory(process.env.BASE_URL),
  routes: [{
    path: '/cart',
    component: ShoppingCartPage,
  }, {
    path: '/products',
    component: ProductsPage,
  }, {
    path: '/products/:productId',
    component: ProductDetailPage,
  }, {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
  }]
}))
.mount('#app')
