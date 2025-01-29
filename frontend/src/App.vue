<template>
  <Navbar/>
  <div v-if="allData == 'loading'" class="p-3">Loading ...</div>
  <div v-else class="grid grid-cols-2 gap-3 p-3">
    <List v-for="data in allData" :title="data?.title" :img="data?.image" :price="data?.price"/>
  </div>
</template>

<script setup lang="ts">    
  import { ref, onMounted } from "vue"
  import axios from "axios"
  import Navbar from "./components/Navbar.vue"
  import List from "./components/List.vue"
  
  let allData = ref("loading");
  
  onMounted(() => {
    axios.get("https://fakestoreapi.com/products")
    .then(res => allData.value = res.data)
    .catch(err => console.log(err)) 
  })
  
</script>