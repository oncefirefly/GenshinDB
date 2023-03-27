import { defineStore } from "pinia";
import { ref, onMounted } from "vue";
import type { Ref } from "vue";
import { getCharNames } from "@/api/characters/getCharNames";

export const useCharNamesStore = defineStore("charNamesStore", () => {
  const storedCharNames: string = localStorage.getItem("charNames") || "";
  const charNames: Ref<string[]> = ref(
    storedCharNames.length ? JSON.parse(storedCharNames) : []
  );

  const getCharList = async () => {
    charNames.value = await getCharNames();

    localStorage.setItem("charNames", JSON.stringify(charNames.value));
  };

  onMounted(() => {
    if (!charNames.value.length) {
      getCharList();
    }
  });

  return { charNames, getCharList };
});
