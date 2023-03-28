import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import { useCharNamesStore } from "./CharNamesStore";

export const useCharDetailsStoreStore = defineStore("CharDetailsStore", () => {
  const charsDetails: Ref<string[]> = ref([]);

  //TODO: get details for each character
  const getCharDetailsList = async (): Promise<string[]> => {
    const chars = useCharNamesStore();

    await chars.getCharList();
    console.log("getting character details...");

    chars.charNames.forEach((charName) => {
      charsDetails.value.push(charName);
    });

    return charsDetails.value;
  };

  return { charsDetails, getCharDetailsList };
});
