<template>
  <Navbar :cart="cart"/>
  <div v-if="allData == 'loading'" class="p-3">Loading ...</div>
  <div v-else class="grid grid-cols-2 gap-3 p-3">
    <a v-for="data in allData" :href="'/item/'+data.id"><List :title="data?.title" :img="data?.image" :price="data?.price"/></a>
  </div>
</template>

<script setup lang="ts">    
  import { ref, onMounted } from "vue"
  import axios from "axios"
  import Navbar from "../components/Navbar.vue"
  import List from "../components/List.vue"
  
  let allData = ref("loading");
  let cart = ref(0);
  
  onMounted(() => {
    axios.get("https://fakestoreapi.com/products")
    .then(res => {
      allData.value = res.data; 
      cart.value = JSON.parse(localStorage.getItem("data")).data.length
    })
    .catch(err => console.log(err)) 
  })
  
</script>