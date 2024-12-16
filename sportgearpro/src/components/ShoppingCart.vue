<template>
  <div class="container mt-4">
    <h2 class="text-center text-primary mb-4">Votre Panier</h2>

    <!-- Vérification si le panier est vide -->
    <div v-if="localCart.length > 0">
      <!-- Tableau des produits dans le panier -->
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Produit</th>
            <th>Couleur</th>
            <th>Prix</th>
            <th>Quantité</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in localCart" :key="item.id + '-' + item.selectedColor.name">
            <td>{{ item.name }}</td>
            <td>
              <span
                class="color-box"
                :style="{ backgroundColor: item.selectedColor.name.toLowerCase() }"
              ></span>
              {{ item.selectedColor.name }}
            </td>
            <td>{{ item.price.toFixed(2) }} €</td>
            <td>
              <input
                type="number"
                v-model.number="item.quantity"
                min="0"
                class="form-control quantity-input"
                @change="validateQuantity(index)"
              />
            </td>
            <td>{{ (item.price * item.quantity).toFixed(2) }} €</td>
            <td>
              <button class="btn btn-danger btn-sm" @click="removeFromCart(index)">
                Supprimer
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Total global du panier -->
      <div class="text-end">
        <h4>Total du panier : {{ cartTotal }} €</h4>
      </div>

      <!-- Boutons pour vider le panier ou réinitialiser -->
      <div class="d-flex justify-content-between mt-4">
        <button class="btn btn-warning" @click="clearCart">Vider le panier</button>
        <button class="btn btn-success" @click="resetQuantities">Nouvelle commande</button>
      </div>
    </div>

    <!-- Message si le panier est vide -->
    <div v-else>
      <p class="text-center">Votre panier est vide.</p>
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
      localCart: JSON.parse(JSON.stringify(this.cart)), // Copie locale
    };
  },
  watch: {
    // Synchroniser les changements de la prop `cart` avec `localCart`
    cart: {
      handler(newCart) {
        this.localCart = JSON.parse(JSON.stringify(newCart));
      },
      immediate: true,
      deep: true,
    },
  },
  computed: {
    // Calcul du total du panier
    cartTotal() {
      return this.localCart.reduce((total, item) => total + (item.quantity > 0 ? item.price * item.quantity : 0), 0).toFixed(2);
    },
  },
  methods: {
    // Valider la quantité
    validateQuantity(index) {
      const item = this.localCart[index];
      if (item.quantity < 0) {
        item.quantity = 0; // Réinitialise à 0 si une valeur négative est saisie
      }
      this.updateCart();
    },
    // Supprimer un produit du panier
    removeFromCart(index) {
      this.localCart.splice(index, 1); // Supprimer de la copie locale
      this.updateCart(); // Synchroniser avec le parent
    },
    // Vider complètement le panier
    clearCart() {
      this.localCart = [];
      this.updateCart();
    },
    // Réinitialiser toutes les quantités à zéro
    resetQuantities() {
      this.localCart.forEach((item) => {
        item.quantity = 0;
      });
      this.updateCart();
    },
    // Synchroniser `localCart` avec le parent via l'événement `update-cart`
    updateCart() {
      this.$emit("update-cart", JSON.parse(JSON.stringify(this.localCart)));
    },
  },
};
</script>

<style scoped>
.color-box {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 8px;
  border: 1px solid #ddd;
}

.quantity-input {
  width: 60px;
  text-align: center;
}

.table {
  margin-top: 20px;
}

.text-end h4 {
  font-weight: bold;
  color: #0d6efd;
}

button {
  min-width: 150px;
}
</style>
