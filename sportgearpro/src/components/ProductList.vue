<template>
  <div class="container">
    <h2 class="text-center my-4">Product List</h2>
    <div class="row">
      <div v-for="product in products" :key="product.id" class="col-md-4 mb-4">
        <ProductItem :product="product" @update-cart="refreshCart" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";

export default {
  name: "ProductList",
  components: {
    ProductItem,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Basketball",
          price: 20,
          colors: [
            { name: "purple", image: "/assets/images/baskette1.jpg" },
            { name: "yellow", image: "/assets/images/baskette2.jpg" },
            { name: "green", image: "/assets/images/baskette3.jpg" },
          ],
        },
        {
          id: 2,
          name: "Helmet",
          price: 50,
          colors: [
            { name: "red", image: "/assets/images/casque1.jpg" },
            { name: "black", image: "/assets/images/casque2.jpg" },
            { name: "gray", image: "/assets/images/casque3.jpg" },
          ],
        },
        {
          id: 3,
          name: "Dumbbells",
          price: 30,
          colors: [
            { name: "purple", image: "/assets/images/haltere1.jpg" },
            { name: "black", image: "/assets/images/haltere2.jpg" },
            { name: "blue", image: "/assets/images/haltere3.jpg" },
          ],
        },
      ],
    };
  },
  methods: {
    refreshCart() {
      this.$emit("update-cart");
    },
  },
};
</script>

<style scoped>
h2 {
  font-weight: bold;
  color: #333;
}
</style>
