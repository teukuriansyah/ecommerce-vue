<template>
  <nav class="sticky top-0 w-full bg-black p-2 flex justify-between items-center">
    <a href="/" class="text-2xl text-white font-bold">Ecommerce</a>
    <a href="/cart" class="text-white flex items-center">Cart {{ cart }}</a>
  </nav>
</template>

<script setup lang="ts">
  defineProps(["cart"]);
</script>