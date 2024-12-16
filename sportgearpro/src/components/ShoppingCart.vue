<template>
  <div class="container mt-4">
    <h2 class="text-center text-primary mb-4"></h2>

    <!-- Check if the cart is empty -->
    <div v-if="localCart.length > 0">
      <!-- Table of cart items -->
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Product</th>
            <th>Color</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in localCart" :key="index">
            <td>{{ item.name }}</td>
            <td>
              <span
                class="color-box"
                :style="{ backgroundColor: item.selectedColor.name.toLowerCase() }"
              ></span>
              {{ item.selectedColor.name }}
            </td>
            <td>{{ item.price.toFixed(2) }} $</td>
            <td>
              <input
                type="number"
                v-model.number="item.quantity"
                min="0"
                class="form-control quantity-input"
                @change="validateQuantity(item)"
              />
            </td>
            <td>{{ (item.price * item.quantity).toFixed(2) }} $</td>
            <td>
              <button class="btn btn-danger btn-sm" @click="removeFromCart(index)">
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Total cart price -->
      <div class="text-end">
        <h4>Cart Total: {{ cartTotal }} $</h4>
      </div>

      <!-- Additional buttons -->
      <div class="d-flex justify-content-between mt-4">
        <button class="btn btn-warning" @click="clearCart">Clear Cart</button>
        <button class="btn btn-success" @click="resetQuantities">New Order</button>
      </div>
    </div>

    <!-- Message if the cart is empty -->
    <div v-else>
      <p class="text-center">Your cart is empty.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  props: {
    cart: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      localCart: JSON.parse(JSON.stringify(this.cart)), // Local copy to manage updates
    };
  },
  watch: {
    // Synchronize prop `cart` with `localCart`
    cart: {
      handler(newCart) {
        this.localCart = JSON.parse(JSON.stringify(newCart));
      },
      immediate: true,
      deep: true,
    },
  },
  computed: {
    // Calculate total cart price
    cartTotal() {
      return this.localCart
        .reduce((total, item) => total + item.price * item.quantity, 0)
        .toFixed(2);
    },
  },
  methods: {
    // Validate and correct the quantity
    validateQuantity(item) {
      if (item.quantity < 1) {
        item.quantity = 1;
      }
      this.updateCart();
    },
    // Remove an item from the cart
    removeFromCart(index) {
      this.localCart.splice(index, 1);
      this.updateCart();
    },
    // Clear the entire cart
    clearCart() {
      this.localCart = [];
      this.updateCart();
    },
    // Reset all item quantities to zero
    resetQuantities() {
      this.localCart.forEach((item) => {
        item.quantity = 0;
      });
      this.updateCart();
    },
    // Emit the updated cart to the parent
    updateCart() {
      this.$emit("update-cart", JSON.parse(JSON.stringify(this.localCart)));
    },
  },
};
</script>
