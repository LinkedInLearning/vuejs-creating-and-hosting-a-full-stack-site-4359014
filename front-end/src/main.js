import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";
import * as VueRouter from "vue-router";
import ShoppingCartPage from "./pages/ShoppingCartPage.vue";
import ProductsPage from "./pages/ProductsPage.vue";
import ProductDetailPage from "./pages/ProductDetailPage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOvXSAx8DyHwyqkJhGTiPBKDfMjcaNDdk",
  authDomain: "vue-site-87721.firebaseapp.com",
  projectId: "vue-site-87721",
  storageBucket: "vue-site-87721.appspot.com",
  messagingSenderId: "34208536826",
  appId: "1:34208536826:web:c96d67e1e297657c315143",
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App)
  .use(
    VueRouter.createRouter({
      history: VueRouter.createWebHistory(process.env.BASE_URL),
      routes: [
        {
          path: "/cart",
          component: ShoppingCartPage,
        },
        {
          path: "/products",
          component: ProductsPage,
        },
        {
          path: "/products/:productId",
          component: ProductDetailPage,
        },
        {
          path: "/:pathMatch(.*)*",
          component: NotFoundPage,
        },
      ],
    })
  )
  .mount("#app");
