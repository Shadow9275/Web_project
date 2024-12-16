<template>
    <div class="card product-item h-100">
      <!-- Image du produit -->
      <img
        :src="selectedColor.image"
        :alt="product.name"
        class="card-img-top"
      />
  
      <!-- Contenu du produit -->
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">{{ product.description }}</p>
        <h6 class="text-success mb-3">{{ product.price }} €</h6>
  
        <!-- Sélection des couleurs -->
        <div class="d-flex mb-3">
          <span
            v-for="(color, index) in product.colors"
            :key="index"
            class="color-box"
            :style="{ backgroundColor: color.name.toLowerCase() }"
            @click="selectColor(color)"
            :class="{ active: selectedColor.name === color.name }"
          ></span>
        </div>
  
        <!-- Bouton Ajouter au panier -->
        <button
          class="btn btn-primary mt-auto"
          @click="addToCart"
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProductItem",
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        // Couleur par défaut (première couleur du tableau)
        selectedColor: this.product.colors[0],
      };
    },
    methods: {
      // Mettre à jour l'image en fonction de la couleur sélectionnée
      selectColor(color) {
        this.selectedColor = color;
      },
      // Émettre un événement pour ajouter le produit au panier
      addToCart() {
        this.$emit("add-to-cart", {
          id: this.product.id,
          name: this.product.name,
          price: this.product.price,
          selectedColor: this.selectedColor,
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .product-item {
    border: 1px solid #ddd;
    border-radius: 0.5rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .product-item:hover {
    transform: scale(1.02);
  }
  
  .card-img-top {
    height: 200px;
    object-fit: cover;
  }
  
  .card-title {
    font-size: 1.2rem;
    font-weight: bold;
  }
  
  .card-text {
    font-size: 0.95rem;
    color: #555;
  }
  
  .color-box {
    width: 20px;
    height: 20px;
    border: 1px solid #ccc;
    border-radius: 50%;
    margin-right: 10px;
    cursor: pointer;
    transition: transform 0.3s ease, border 0.3s ease;
  }
  
  .color-box:hover {
    transform: scale(1.2);
  }
  
  .color-box.active {
    border: 2px solid #0d6efd; /* Highlight pour la couleur sélectionnée */
  }
  
  .btn-primary {
    font-size: 1rem;
  }
  </style>
  