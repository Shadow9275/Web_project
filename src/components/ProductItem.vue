<template>
  <div class="card product-item h-100">
    <img :src="selectedColor.image" :alt="product.name" class="card-img-top" />

    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">{{ product.description }}</p>
      <h6 class="text-success mb-3">{{ product.price }} €</h6>

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

      <div class="d-flex align-items-center">
        <input
          type="number"
          v-model.number="quantity"
          min="1"
          class="form-control quantity-input me-2"
          style="width: 80px;"
        />
        <button class="btn btn-primary mt-auto" @click="addToCart">
          Ajouter au panier
        </button>
      </div>
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
      selectedColor: this.product.colors[0],
      quantity: 1,
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
        quantity: this.quantity,
      });
    },
  },
};
</script>

<style scoped>
.color-box {
  width: 20px;
  height: 20px;
  border: 1px solid #ddd;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
}
.color-box.active {
  border: 2px solid #0d6efd;
}
.card-img-top {
  height: 200px;
  object-fit: cover;
}
.quantity-input {
  text-align: center;
}
</style>

