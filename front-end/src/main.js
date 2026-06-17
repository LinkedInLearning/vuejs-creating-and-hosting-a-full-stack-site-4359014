import { createApp } from 'vue';
import App from './App.vue';
import './main.css';
import * as VueRouter from 'vue-router';
import ProductsPage from './pages/ProductsPage.vue';
import ProductDetailPage from './pages/ProductDetailPage.vue';
import ShoppingCartPage from './pages/ShoppingCartPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAW7EnbFcGKWqi5SPbvC1fdzxcBVz90LTQ",
  authDomain: "vue-site-5899a.firebaseapp.com",
  projectId: "vue-site-5899a",
  storageBucket: "vue-site-5899a.firebasestorage.app",
  messagingSenderId: "385110728093",
  appId: "1:385110728093:web:130567202c07ea2f9ba374"
};

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
    path:'/',
    redirect: '/products',
  }, {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
  }]
}))
.mount('#app')

