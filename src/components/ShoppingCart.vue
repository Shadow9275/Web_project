<template>
  <div class="container mt-4">
    <h2 class="text-center text-primary mb-4">Votre Panier</h2>
    <div v-if="localCart.length > 0">
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
          <tr v-for="(item, index) in localCart" :key="index">
            <td>{{ item.name }}</td>
            <td>
              <span
                class="color-box"
                :style="{ backgroundColor: item.selectedColor.name.toLowerCase() }"
              ></span>
              {{ item.selectedColor.name }}
            </td>
            <td>{{ item.price }} €</td>
            <td>
              <input
                type="number"
                v-model.number="item.quantity"
                min="1"
                class="form-control quantity-input"
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
      <div class="text-end">
        <h4>Total : {{ cartTotal }} €</h4>
      </div>
    </div>
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
      localCart: JSON.parse(JSON.stringify(this.cart)),
    };
  },
  computed: {
    cartTotal() {
      return this.localCart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    },
  },
  methods: {
    removeFromCart(index) {
      this.localCart.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.color-box {
  width: 20px;
  height: 20px;
}
.quantity-input {
  width: 60px;
  text-align: center;
}
</style>
