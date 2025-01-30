<template>
  <Navbar />
  <div class="p-3">
    <img :src="data?.image" :alt="data?.title" class="object-contain aspect-square"/>
  </div>
  <div class="p-3">
    <h1 class='text-2xl'>{{ data?.title }}</h1>
  </div>
  <div class="p-3">
    <h1 class="text-2xl font-bold">Rp {{ numberWithCommas(data?.price*16000) }}</h1>
  </div>
  <div class="p-3">
    <h1 class="text-2xl font-bold">Description</h1>
    <p>{{ data?.description }}</p>
  </div>
  <div class="flex justify-center gap-3 p-3 shadow-lg shadow-black sticky bottom-0 bg-white w-full">
    <button @click="payment" class="border-2 border-black rounded px-3 py-2 font-bold">Buy Now</button>
    <button class="bg-black text-white rounded font-bold px-3">Add to cart</button>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from "vue"
  import axios from "axios"
  import { useRoute } from "vue-router"
  import Navbar from "../components/Navbar.vue"
  
  let data = ref("");
  let route = useRoute();
  let id = route.path.split("/")[2]
  
  onMounted(() => {
    axios.get("https://fakestoreapi.com/products"+"/"+id)
    .then(res => data.value = res.data) 
  })
  
  function payment() {
    axios.post("http://localhost:3000/payment",{
      id:Math.round(Math.random()*100000000),
      amount:data.value.price*16000 
    })
    .then(res => window.location.assign(res.data.data.redirect_url))
  }
  
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
</script>