import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ProductListView from "@/views/ProductListView.vue";
import ShoppingCartView from "@/views/ShoppingCartView.vue";
import AboutView from "@/views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/catalog",
    name: "Catalog",
    component: ProductListView,
  },
  {
    path: "/cart",
    name: "Cart",
    component: ShoppingCartView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
