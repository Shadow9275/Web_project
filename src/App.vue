<template>
  <div id="app">
    <SiteHeader />
    <main class="py-4">
      <ProductList @add-to-cart="addToCart" />
      <ShoppingCart :cart="cart" />
    </main>
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";
import ProductList from "./components/ProductList.vue";
import ShoppingCart from "./components/ShoppingCart.vue";

export default {
  name: "App",
  components: {
    SiteHeader,
    SiteFooter,
    ProductList,
    ShoppingCart,
  },
  data() {
    return {
      cart: [], // Tableau du panier
    };
  },
  methods: {
    addToCart(product) {
      const existingProduct = this.cart.find(
        (item) =>
          item.id === product.id && item.selectedColor.name === product.selectedColor.name
      );

      if (existingProduct) {
        existingProduct.quantity += product.quantity || 1;
      } else {
        this.cart.push({ ...product, quantity: product.quantity || 1 });
      }
    },
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: "Arial", sans-serif;
  background-color: #f8f9fa;
}
main {
  padding: 1rem;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
footer {
  margin-top: auto;
}
</style>
