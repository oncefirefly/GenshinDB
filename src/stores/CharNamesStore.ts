import { defineStore } from "pinia";
import { ref, onMounted, type Ref } from "vue";
import { getCharNames } from "@/api/characters/getCharNames";

export const useCharNamesStore = defineStore("CharNamesStore", () => {
  const storedCharNames: string = localStorage.getItem("charNames") || "";
  const charNames: Ref<string[]> = ref(
    storedCharNames.length ? JSON.parse(storedCharNames) : []
  );

  const getCharList = async (): Promise<void> => {
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
