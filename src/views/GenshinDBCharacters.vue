<script setup lang="ts">
import { useCharactersListStore } from "@/stores/CharactersListStore";

const charactersListStore = useCharactersListStore();
</script>

<template>
  <div v-for="character of charactersListStore.charactersList" :key="character">
    {{ character }}
  </div>
</template>
