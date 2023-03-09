import GenshinDBHome from "@/views/GenshinDBHome.vue";
import GenshinDBCharacters from "@/views/GenshinDBCharacters.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: GenshinDBHome,
    },
    {
      path: "/characters",
      name: "characters",
      component: GenshinDBCharacters,
    },
  ],
});

export default router;
