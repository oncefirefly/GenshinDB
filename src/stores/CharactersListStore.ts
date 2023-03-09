import { defineStore } from "pinia";
import { ref, computed, onMounted } from "vue";
import type { Ref, ComputedRef } from "vue";

const url =
  "https://genshin-db-api.vercel.app/api/characters?query=names&matchCategories=true";

export const useCharactersListStore = defineStore("charactersListStore", () => {
  const charactersList: Ref<string[]> = ref([]);

  const getCharList = async () =>
    await fetch(url)
      .then((res) => res.json())
      .then((charList) => {
        charactersList.value = charList;
      })
      .catch((err) => console.log(err));

  const length: ComputedRef<number> = computed(() => {
    return charactersList.value.length;
  });

  onMounted(getCharList);

  return { charactersList, getCharList, length };
});
