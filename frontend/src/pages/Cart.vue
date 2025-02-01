<template>
  <Navbar :cart="dataItem.length"/>
  <div class="p-2 flex flex-col gap-3">
    <ListCart v-for="data in dataItem" :title="data?.title" :price="numberWithCommas(data?.price * 16000)" :img="data.img" :totalPrice="numberWithCommas(data.price * 16000 * data.count)" :count="data.count"/>
  </div>
  <div v-if="dataItem.length > 0" class="shadow-2xl shadow-black fixed bottom-0 border-t-2 w-full p-3 flex flex-col gap-3 h-[18%]">
    <p class="text-xl font-bold">Rp {{ numberWithCommas(total) }}</p>
    <button class="bg-black font-bold text-white rounded w-full px-2 py-1" @click="payment">Checkout</button>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from "vue"
  import axios from "axios"
  import Navbar from "../components/Navbar.vue"
  import ListCart from "../components/ListCart.vue"
  
  let dataItem = ref([]);
  let total = ref(0);
  
  onMounted(() => {
    let dataStorage = JSON.parse(localStorage.getItem("data")).data
    dataItem.value = dataStorage
    for(let i = 0;i<dataStorage.length;i++) {
      total.value += dataStorage[i].count * dataStorage[i].price * 16000
    }
  })
  
  function payment() {
    let id = Math.round(Math.random()*100000000);
    axios.post("http://localhost:3000/payment",{id,amount:total.value})
    .then(res => {
      window.location.assign(res.data.data.redirect_url);
      localStorage.removeItem("data")
    })
  }
  
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
</script>