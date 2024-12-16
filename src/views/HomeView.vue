<template>
  <div class="home">
    <!-- En-tête -->
    <SiteHeader />

    <!-- Contenu principal -->
    <main class="py-4">
      <div class="container">
        <h1 class="text-center text-primary mb-4">Bienvenue sur SportGearPro</h1>
        <p class="text-center lead">
          Découvrez notre sélection de matériel sportif de haute qualité pour vos entraînements.
        </p>

        <!-- Liste des produits -->
        <ProductList @add-to-cart="addToCart" />

        <!-- Panier d'achat -->
        <ShoppingCart :cart="cart" />
      </div>
    </main>

    <!-- Pied de page -->
    <SiteFooter />
  </div>
</template>

<script>
// Importation des composants
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import ProductList from "@/components/ProductList.vue";
import ShoppingCart from "@/components/ShoppingCart.vue";

export default {
  name: "HomeView",
  components: {
    SiteHeader,
    SiteFooter,
    ProductList,
    ShoppingCart,
  },
  data() {
    return {
      cart: [], // Tableau pour stocker les produits ajoutés au panier
    };
  },
  methods: {
    // Ajouter un produit au panier
    addToCart(product) {
      // Vérifie si le produit avec la même couleur existe déjà
      const existingProduct = this.cart.find(
        (item) =>
          item.id === product.id && item.selectedColor.name === product.selectedColor.name
      );

      if (existingProduct) {
        // Incrémente la quantité si le produit existe
        existingProduct.quantity += 1;
      } else {
        // Ajoute un nouveau produit au panier avec une quantité de 1
        this.cart.push({ ...product, quantity: 1 });
      }
    },
  },
};
</script>

<style scoped>
/* Style pour la vue principale */
main {
  background-color: #f8f9fa; /* Fond clair */
  padding: 2rem 0;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
}

p.lead {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 2rem;
}
</style>
