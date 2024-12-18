<template>
  <div class="product-card card mb-3">
    <!-- Image du produit en fonction de la couleur sélectionnée -->
    <img :src="selectedImage" class="card-img-top" :alt="product.name" />

    <!-- Détails du produit -->
    <div class="card-body text-center">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">{{ product.price }} $</p>

      <!-- Sélection des couleurs -->
      <div class="colors mb-2">
        <span
          v-for="(color, index) in product.colors"
          :key="index"
          class="color-box"
          :style="{ backgroundColor: color.name }"
          @click="selectColor(color)"
        ></span>
      </div>

      <!-- Bouton pour ajouter au panier -->
      <button class="btn btn-primary" @click="addToCart">Add to Cart</button>

      <!-- Message de confirmation -->
      <p v-if="showMessage" class="text-success mt-2">Product added to cart!</p>
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
      selectedColor: this.product.colors[0], // Couleur par défaut
      showMessage: false,
    };
  },
  computed: {
    selectedImage() {
      // Retourne l'image correspondant à la couleur sélectionnée
      return this.selectedColor.image;
    },
  },
  methods: {
    selectColor(color) {
      this.selectedColor = color; // Met à jour la couleur sélectionnée
    },
    addToCart() {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingProduct = cart.find(
        (item) => item.id === this.product.id && item.color === this.selectedColor.name
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cart.push({
          ...this.product,
          color: this.selectedColor.name,
          image: this.selectedColor.image,
          quantity: 1,
        });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      this.$emit("update-cart");
      this.showMessage = true;
      setTimeout(() => (this.showMessage = false), 2000);
    },
  },
};
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
}

.card-img-top {
  max-height: 200px;
  object-fit: contain;
}

.color-box {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 5px;
  cursor: pointer;
  border: 1px solid #ccc;
}

.color-box:hover {
  border: 2px solid #000;
}
</style>
