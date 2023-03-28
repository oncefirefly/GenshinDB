<script setup lang="ts">
import { useCharDetailsStoreStore } from "@/stores/CharDetailsStore";

const charDetailsStore = useCharDetailsStoreStore();

charDetailsStore.getCharDetailsList();
</script>

<template>
  <div v-for="character of charDetailsStore.charsDetails" :key="character">
    {{ character }}
  </div>
</template>
