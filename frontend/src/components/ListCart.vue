<template>
  <div class="border-2 border-black rounded p-2 flex items-center gap-3" >
    <div class="w-1/4">
      <img :src="img" :alt="title" class="aspect-square object-contain"/>
    </div>
    <div class="w-3/4">
      <h1 class="text-lg">{{ title }}</h1>
      <div>
        <p>{{ count }} x Rp {{ price }}</p>
        <h1 class="text-lg font-bold">Rp {{ totalPrice }}</h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps(["title","price","img","totalPrice","count"]);
</script>