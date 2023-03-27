import { ref, type Ref } from "vue";
import { useCharNamesStore } from "./CharNamesStore";
import { defineStore } from "pinia";

export const useCharDetailsStoreStore = defineStore("CharDetailsStore", () => {
  const chars = useCharNamesStore();
  const charsDetails: Ref = ref([]);

  return {};
});
