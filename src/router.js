import { createRouter, createWebHashHistory } from "vue-router";
import NotFound from "./views/NotFound/NotFound.vue";

const routes = [
  { path: "/:pathMatch(.*)*", component: NotFound },
  { path: "/", component: () => import("./views/Highlights/highlights.vue") },
  { path: "/burgers", component: () => import("./views/Burgers/burgers.vue") },
  { path: "/pizzas", component: () => import("./views/Pizzas/pizzas.vue") },
  { path: "/softDrinks", component: () => import("./views/SoftDrinks/softDrinks.vue") },
  { path: "/drinks", component: () => import("./views/Drinks/drinks.vue") },
  { path: "/callWaiter", component: () => import("./views/CallWaiter/callWaiter.vue") },
  { path: "/wallet", component: () => import("./views/Wallet/wallet.vue") },
  { path: "/cart", component: () => import("./views/Cart/Cart.vue") },
  { path: "/about", component: () => import("./views/About/about.vue") },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});