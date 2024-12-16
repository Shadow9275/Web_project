<template>
  <div class="container mt-4">
    <h2 class="text-center text-primary mb-4">Your Cart</h2>

    <ShoppingCart :cart="cart" @update-cart="updateCart" />

    <div v-if="cart.length > 0" class="text-center mt-4">
      <button class="btn btn-warning me-2" @click="clearCart">Clear Cart</button>
      <button class="btn btn-success" @click="newOrder">New Order</button>
    </div>
    <div v-else class="text-center mt-4">
      <p>Your cart is empty. <router-link to="/catalog" class="btn btn-primary">Go to Catalog</router-link></p>
    </div>
  </div>
</template>

<script>
import ShoppingCart from "@/components/ShoppingCart.vue";

export default {
  name: "ShoppingCartView",
  components: { ShoppingCart },
  data() {
    return {
      cart: JSON.parse(localStorage.getItem("cart")) || [],
    };
  },
  methods: {
    updateCart(updatedCart) {
      this.cart = updatedCart;
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    clearCart() {
      this.cart = [];
      localStorage.removeItem("cart");
    },
    newOrder() {
      this.cart.forEach((item) => (item.quantity = 0));
      this.updateCart(this.cart);
    },
  },
};
</script>
