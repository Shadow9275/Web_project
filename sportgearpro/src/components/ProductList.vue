<template>
    <div class="container mt-4">
      <h2 class="text-center mb-4 text-primary">Nos Produits</h2>
      <div class="row">
        <!-- Boucle pour afficher chaque produit -->
        <div
          v-for="product in products"
          :key="product.id"
          class="col-12 col-sm-6 col-md-4 mb-4"
        >
          <!-- Utilisation du composant ProductItem -->
          <ProductItem
            :product="product"
            @add-to-cart="handleAddToCart"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // Importation du composant ProductItem
  import ProductItem from "./ProductItem.vue";
  
  export default {
    name: "ProductList",
    components: {
      ProductItem, // Déclaration du composant enfant
    },
    data() {
      return {
        // Liste des produits avec plusieurs couleurs/images
        products: [
          {
            id: 1,
            name: "Tapis de Yoga",
            description: "Parfait pour vos séances de yoga.",
            price: 29.99,
            colors: [
              { name: "Bleu", image: require("@/assets/images/tapis1.jpg") },
              { name: "Vert", image: require("@/assets/images/tapis2.jpg") },
              { name: "Rose", image: require("@/assets/images/tapis3.jpg") },
              { name: "Noir", image: require("@/assets/images/tapis4.jpg") },
            ],
          },
          {
            id: 2,
            name: "Haltères Ajustables",
            description: "Idéal pour la musculation à domicile.",
            price: 79.99,
            colors: [
              { name: "Noir", image: require("@/assets/images/altère.jpg") },
              { name: "Gris", image: require("@/assets/images/altère2.jpg") },
              { name: "Argent", image: require("@/assets/images/altère3.jpg") },
            ],
          },
          {
            id: 3,
            name: "Élastiques de Musculation",
            description: "Renforcez vos muscles où que vous soyez.",
            price: 15.99,
            colors: [
              { name: "Vert", image: require("@/assets/images/band1.jpg") },
              { name: "Rouge", image: require("@/assets/images/band1.jpg") },
            ],
          },
        ],
      };
    },
    methods: {
      // Méthode pour gérer l'ajout au panier
      handleAddToCart(product) {
        alert(`Produit ajouté au panier : ${product.name} (${product.selectedColor.name})`);
      },
    },
  };
  </script>
  
  <style scoped>
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }
  
  .row {
    margin: 0 -15px;
  }
  
  .col-12 {
    padding: 0 15px;
  }
  </style>
  