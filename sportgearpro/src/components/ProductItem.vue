<template>
  <div class="product-card card mb-3">
    <!-- Product image based on selected color -->
    <img :src="selectedImage" class="card-img-top" :alt="product.name" />

    <!-- Product details -->
    <div class="card-body text-center">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">{{ product.price }} $</p>

      <!-- Color selection -->
      <div class="colors mb-2">
        <span
          v-for="(color, index) in product.colors"
          :key="index"
          class="color-box"
          :style="{ backgroundColor: color.name }"
          @click="selectColor(color)"
        ></span>
      </div>

      <!-- Add to cart button -->
      <button class="btn btn-primary" @click="addToCart">Add to Cart</button>

      <!-- Confirmation message -->
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
      selectedColor: this.product.colors[0], // Default color
      showMessage: false,
    };
  },
  computed: {
    selectedImage() {
      // Returns the image corresponding to the selected color
      return this.selectedColor.image;
    },
  },
  methods: {
    selectColor(color) {
      this.selectedColor = color; // Updates the selected color
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
