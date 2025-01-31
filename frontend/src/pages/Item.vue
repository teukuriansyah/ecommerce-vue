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
  <div class="flex flex-col gap-3 p-3 shadow-lg shadow-black sticky bottom-0 bg-white w-full">
    <div class="flex justify-between p-2">
      <button @click="decrementCount" class="border-2 border-black rounded font-bold px-2">-</button>
      <p>{{ count }}</p>
      <button @click="incrementCount" class="border-2 border-black rounded font-bold px-2">+</button>
    </div>
    <div class="flex justify-evenly">
      <button @click="payment" class="border-2 border-black rounded px-3 py-2 font-bold">Buy Now</button>
      <button class="bg-black text-white rounded font-bold px-3" @click="addToCart">Add to cart</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from "vue"
  import axios from "axios"
  import { useRoute } from "vue-router"
  import Navbar from "../components/Navbar.vue"
  
  let data = ref("");
  let route = useRoute();
  let id = route.path.split("/")[2];
  let count = ref("");
  let dataCarts = ref([]);
  
  onMounted(() => {
    axios.get("https://fakestoreapi.com/products"+"/"+id)
    .then(res => {
      data.value = res.data;
      if(localStorage.getItem("data")) {
        let localStorageData = JSON.parse(localStorage.getItem("data")).data
        dataCarts.value = localStorageData
        let item = dataCarts.value.find(x => x.id == id)
        if(item) {
          count.value = item.count
        }
        else {
          count.value = 1
        }
      }
      else {
        localStorage.setItem("data",JSON.stringify({data:[]}))
        dataCarts.value = {
          data:[]
        }
      }
    });
  });
  
  setTimeout(() => {
    console.log(dataCarts.value)
    console.log(dataCarts.value.find(x => x.id == id))
  },8000)
  
  function addToCart() {
    let dataItem = {
      id: data.value.id,
      count: count.value
    };
  
    // Cek apakah item sudah ada di keranjang
    const existingItem = dataCarts.value.find(dataCart => dataCart.id === dataItem.id);
  
    if (existingItem) {
      // Jika item sudah ada, tambahkan jumlahnya
      existingItem.count = dataItem.count;
    } else {
      // Jika item belum ada, tambahkan item baru ke keranjang
      dataCarts.value.push(dataItem);
    }
  
    // Simpan dataCarts ke localStorage
    localStorage.setItem("data", JSON.stringify({ data: dataCarts.value }));
  }
  
  function incrementCount() {
    count.value+=1
  }
  
  function decrementCount() {
    if(count.value == 1) {
      count.value = 1
    }
    else {
      count.value-=1
    }
  }
  
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