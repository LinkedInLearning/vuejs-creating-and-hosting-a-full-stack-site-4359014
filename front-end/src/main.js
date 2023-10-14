import { createApp } from 'vue'
import App from './App.vue'
import './main.css';
import * as VueRouter from 'vue-router'
import ShoppingCartPage from './pages/ShoppingCartPage.vue'
import ProductsPage from './pages/ProductsPage.vue'
import ProductDetailPage from './pages/ProductDetailPage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGD_LCIbzt9MwwUnZG-_2hB4aPNihCZcw",
  authDomain: "vue-site---linkedinlearning.firebaseapp.com",
  projectId: "vue-site---linkedinlearning",
  storageBucket: "vue-site---linkedinlearning.appspot.com",
  messagingSenderId: "905248069545",
  appId: "1:905248069545:web:7a79cf35410b0705c6d6b8",
  measurementId: "G-DW4FHBZHEM"
};

initializeApp(firebaseConfig);

// Initialize Firebase

createApp(App)
.use(VueRouter.createRouter({
  history: VueRouter.createWebHistory(process.env.BASE_URL),
  routes: [{
    path: '/cart',
    component: ShoppingCartPage,
  },{
    path:'/products',
    component:ProductsPage
  },{
    path:'/products/:productId',
    component:ProductDetailPage
  },{
    path:'/:pathMatch(.*)*',
    component:NotFoundPage
  }]
}))
.mount('#app')
