<template>
  <div class="card h-100 product-item">
    <img :src="selectedColor.image" class="card-img-top" :alt="product.name" />
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">{{ product.description }}</p>
      <p class="text-success">{{ product.price.toFixed(2) }} $</p>
      <div class="d-flex mb-2">
        <span
          v-for="(color, index) in product.colors"
          :key="index"
          class="color-box me-2"
          :style="{ backgroundColor: color.name.toLowerCase() }"
          @click="selectColor(color)"
          :class="{ active: selectedColor.name === color.name }"
        ></span>
      </div>
      <button class="btn btn-primary w-100" @click="addToCart">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    product: Object,
  },
  data() {
    return {
      selectedColor: this.product.colors[0],
    };
  },
  methods: {
    selectColor(color) {
      this.selectedColor = color;
    },
    addToCart() {
      this.$emit("add-to-cart", {
        ...this.product,
        selectedColor: this.selectedColor,
      });
    },
  },
};
</script>
