<template>
  <div class="container mt-4">
    <h2 class="text-center text-primary mb-4">Our Catalog</h2>
    <div class="row">
      <div
        v-for="product in products"
        :key="product.id"
        class="col-12 col-sm-6 col-md-4 mb-4"
      >
        <ProductItem :product="product" @add-to-cart="addToCart" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";

export default {
  name: "ProductListView",
  components: {
    ProductItem,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Basketball",
          description: "High-quality basketball.",
          price: 29.99,
          colors: [
            { name: "Purple", image: require('@/assets/images/baskette1.jpg') },
            { name: "Yellow", image: require('@/assets/images/baskette2.jpg') },
            { name: "Green", image: require('@/assets/images/baskette3.jpg') },
          ],
        },
        {
          id: 2,
          name: "Motorcycle Helmet",
          description: "Durable and stylish helmet.",
          price: 89.99,
          colors: [
            { name: "Red", image: require('@/assets/images/casque1.jpg') },
            { name: "Black", image: require('@/assets/images/casque2.jpg') },
            { name: "Gray", image: require('@/assets/images/casque3.jpg') },
          ],
        },
        {
          id: 3,
          name: "Dumbbells",
          description: "Lightweight and durable dumbbells.",
          price: 19.99,
          colors: [
            { name: "Purple", image: require('@/assets/images/haltere1.jpg') },
            { name: "Black", image: require('@/assets/images/haltere2.jpg') },
            { name: "Blue", image: require('@/assets/images/haltere3.jpg') },
          ],
        },
        {
          id: 4,
          name: "Yoga Mat",
          description: "Comfortable and non-slip yoga mat.",
          price: 24.99,
          colors: [
            { name: "Pink", image: require('@/assets/images/tapis1.jpg') },
            { name: "Black", image: require('@/assets/images/tapis2.jpg') },
            { name: "Green", image: require('@/assets/images/tapis3.jpg') },
          ],
        },
      ],
    };
  },
  methods: {
    addToCart(product) {
      this.$emit("add-to-cart", product);
    },
  },
};
</script>
