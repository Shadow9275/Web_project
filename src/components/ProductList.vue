<template>
  <div class="container mt-4">
    <h2 class="text-center mb-4 text-primary">Nos Produits</h2>
    <div class="row">
      <div v-for="product in products" :key="product.id" class="col-12 col-sm-6 col-md-4 mb-4">
        <ProductItem :product="product" @add-to-cart="handleAddToCart" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";

export default {
  name: "ProductList",
  components: { ProductItem },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Tapis de Yoga",
          description: "Parfait pour vos séances de yoga.",
          price: 29.99,
          colors: [
            { name: "Bleu", image: require("@/assets/images/tapis1.jpg") },
            { name: "Vert", image: require("@/assets/images/tapis2.jpg") },
          ],
        },
        {
          id: 2,
          name: "Haltères Ajustables",
          description: "Idéal pour la musculation à domicile.",
          price: 79.99,
          colors: [
            { name: "Noir", image: require("@/assets/images/haltere1.jpg") },
            { name: "Gris", image: require("@/assets/images/haltere2.jpg") },
          ],
        },
        {
          id: 3,
          name: "Élastiques de Musculation",
          description: "Renforcez vos muscles où que vous soyez.",
          price: 15.99,
          colors: [
            { name: "Vert", image: require("@/assets/images/bands1.jpg") },
            { name: "Rouge", image: require("@/assets/images/bands2.jpg") },
          ],
        },
      ],
    };
  },
  methods: {
    handleAddToCart(product) {
      this.$emit("add-to-cart", product);
    },
  },
};
</script>

<style scoped>
h2 {
  font-size: 2rem;
}
</style>
