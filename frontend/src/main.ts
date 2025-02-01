import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Home from "./pages/Home.vue"
import Item from "./pages/Item.vue"
import Cart from "./pages/Cart.vue"
import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history:createWebHistory(),
  routes:[{
    path:"/",
    component:Home
  },
  {
    path:"/item/:id",
    component:Item
  },
  {
    path:"/cart",
    component:Cart
  }]
});

const app = createApp(App)
app.use(router)
app.mount('#app')