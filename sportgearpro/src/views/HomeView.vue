<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section text-white text-center">
      <div class="container py-5">
        <h1 class="display-3 fw-bold mb-4">Welcome to SportGearPro</h1>
        <p class="lead mb-4">
          Discover top-quality sports equipment to reach your goals and perform at your best!
        </p>
        <router-link to="/catalog" class="btn btn-primary btn-lg">Explore Our Catalog</router-link>
      </div>
    </section>

    <!-- Featured Products Section -->
    <section class="featured-products py-5">
      <div class="container">
        <h2 class="text-center text-primary mb-5">Popular Products</h2>
        <div class="row">
          <!-- Product 1 -->
          <div class="col-12 col-md-4 mb-4">
            <div class="card product-card">
              <img
                src="@/assets/images/baskette1.jpg"
                alt="Basketball"
                class="card-img-top"
              />
              <div class="card-body text-center">
                <h5 class="card-title">Basketball</h5>
                <p class="text-success">$29.99</p>
                <router-link to="/catalog" class="btn btn-outline-primary btn-sm">
                  View More
                </router-link>
              </div>
            </div>
          </div>

          <!-- Product 2 -->
          <div class="col-12 col-md-4 mb-4">
            <div class="card product-card">
              <img
                src="@/assets/images/haltere1.jpg"
                alt="Dumbbells"
                class="card-img-top"
              />
              <div class="card-body text-center">
                <h5 class="card-title">Dumbbells</h5>
                <p class="text-success">$19.99</p>
                <router-link to="/catalog" class="btn btn-outline-primary btn-sm">
                  View More
                </router-link>
              </div>
            </div>
          </div>

          <!-- Product 3 -->
          <div class="col-12 col-md-4 mb-4">
            <div class="card product-card">
              <img
                src="@/assets/images/tapis1.jpg"
                alt="Yoga Mat"
                class="card-img-top"
              />
              <div class="card-body text-center">
                <h5 class="card-title">Yoga Mat</h5>
                <p class="text-success">$24.99</p>
                <router-link to="/catalog" class="btn btn-outline-primary btn-sm">
                  View More
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
