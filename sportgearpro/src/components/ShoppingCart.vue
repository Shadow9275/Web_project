<template>
  <div class="container">
    <h2 class="text-center my-4">Your Cart</h2>

    <table v-if="cart.length > 0" class="table table-striped">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cart" :key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.price }} $</td>
          <td>
            <input
              type="number"
              v-model.number="item.quantity"
              min="1"
              @change="updateCart"
              class="form-control"
              style="width: 70px;"
            />
          </td>
          <td>{{ (item.price * item.quantity).toFixed(2) }} $</td>
          <td>
            <button class="btn btn-danger btn-sm" @click="removeItem(index)">
              Remove
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Affichage si le panier est vide -->
    <p v-else class="text-center">Your cart is empty.</p>

    <!-- Total global du panier -->
    <div v-if="cart.length > 0" class="text-end mt-3">
      <h4>Total: {{ cartTotal }} $</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  data() {
    return {
      cart: [], // Contient les produits du panier
    };
  },
  created() {
    this.loadCart();
  },
  computed: {
    cartTotal() {
      return this.cart
        .reduce((total, item) => total + item.price * item.quantity, 0)
        .toFixed(2);
    },
  },
  methods: {
    // Charger le panier depuis localStorage
    loadCart() {
      this.cart = JSON.parse(localStorage.getItem("cart")) || [];
    },
    // Mettre à jour localStorage après un changement de quantité
    updateCart() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    // Supprimer un produit du panier
    removeItem(index) {
      this.cart.splice(index, 1);
      this.updateCart();
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}

.table {
  margin-top: 20px;
}

.table th, .table td {
  text-align: center;
  vertical-align: middle;
}

.btn-danger {
  background-color: red;
  border: none;
}

.btn-danger:hover {
  background-color: darkred;
}

.text-end {
  font-weight: bold;
  font-size: 1.2rem;
  color: #333;
}
</style>
