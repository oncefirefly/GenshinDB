<script setup lang="ts">
import GenshinDBHeader from "./components/GenshinDBHeader.vue";
</script>

<template>
  <GenshinDBHeader />
  <main class="bg-[#404258] min-h-screen pt-10">
    <router-view></router-view>
  </main>
</template>

<style scoped></style>
