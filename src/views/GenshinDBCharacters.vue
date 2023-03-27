<script setup lang="ts">
import { useCharNamesStore } from "@/stores/CharNamesStore";

const charNamesStore = useCharNamesStore();
</script>

<template>
  <div v-for="character of charNamesStore.charNames" :key="character">
    {{ character }}
  </div>
</template>
