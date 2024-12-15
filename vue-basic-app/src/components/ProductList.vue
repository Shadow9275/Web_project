<template>
    <div class="row">
      <div v-for="product in products" :key="product.id" class="col-md-4">
        <div class="card">
          <img :src="product.image" :alt="product.name" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          { id: 1, name: "Product A", price: "$20", image: "/path/to/image1.jpg" },
          { id: 2, name: "Product B", price: "$30", image: "/path/to/image2.jpg" },
          { id: 3, name: "Product C", price: "$40", image: "/path/to/image3.jpg" },
        ],
      };
    },
  };
  </script>
  