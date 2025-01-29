<template>
  <li class="flex flex-col border-2 border-black rounded p-2 gap-2 list-none">
    <img :src="img" :alt="title" class="aspect-square object-contain"/>
    <h2 class="truncate text-lg">{{ title }}</h2>
    <h1 class="font-bold text-xl">Rp {{ numberWithCommas(price*16000) }}</h1>
  </li>
</template>

<script setup lang="ts">
  defineProps(["title","img","price"]);
  const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
</script>