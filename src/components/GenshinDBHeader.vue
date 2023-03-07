<script setup lang="ts">
import GenshinDBNav from "./GenshinDBNav.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";
import type { Ref } from "vue";

const headerRef: Ref = ref();
const headerWidth: Ref<number> = ref<number>(0);

onMounted(() => {
  headerWidth.value = headerRef.value.clientWidth;
  window.addEventListener("resize", resizeHandler);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", resizeHandler);
});

function resizeHandler(): void {
  headerWidth.value = headerRef.value.clientWidth;
}
</script>

<template>
  <header ref="headerRef" class="bg-slate-800 h-24 flex items-center">
    <div
      class="h-full mx-4 sm:mx-auto sm:w-10/12 w-full flex flex-row items-center"
    >
      <router-link
        to="/"
        class="mr-auto w-max text-neutral-200 font-bold lg:text-7xl md:text-6xl text-2xl leading-none justify-self-start whitespace-nowrap h-full flex items-center"
        >GenshinDB</router-link
      >
    </div>
    <GenshinDBNav v-if="headerWidth >= 768" />
  </header>
</template>
