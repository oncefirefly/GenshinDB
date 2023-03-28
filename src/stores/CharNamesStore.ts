import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
import { getCharNames } from "@/api/characters/getCharNames";

export const useCharNamesStore = defineStore("CharNamesStore", () => {
  const storedCharNames: string = localStorage.getItem("charNames") || "";
  const charNames: Ref<string[]> = ref(
    storedCharNames.length ? JSON.parse(storedCharNames) : []
  );

  const getCharList = async (): Promise<string[]> => {
    charNames.value = await getCharNames();

    localStorage.setItem("charNames", JSON.stringify(charNames.value));
    return charNames.value;
  };

  return { charNames, getCharList };
});
