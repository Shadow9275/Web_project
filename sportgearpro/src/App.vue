<template>
  <div id="app">
    <!-- Composant Header -->
    <SiteHeader />
    <p>hello</p>
    <!-- Section principale : Liste des produits -->
    <main class="py-4">
      <ProductList />
      
    </main>

    <!-- Composant Footer -->
    <SiteFooter />
  </div>
</template>

<script>
// Importation des composants
import SiteHeader from "./components/SiteHeader.vue";
import ProductList from "./components/ProductList.vue";
import SiteFooter from "./components/SiteFooter.vue";

export default {
  name: "App",
  components: {
    SiteHeader,
    ProductList,
    SiteFooter,
  },
};
</script>

<style>
/* Styles globaux pour l'application */
body {
  margin: 0;
  font-family: "Arial", sans-serif;
  background-color: #f8f9fa; /* Fond clair */
}

main {
  padding: 0 1rem;
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
