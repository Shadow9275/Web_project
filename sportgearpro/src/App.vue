<template>
  <div id="app">
    <!-- Site Header -->
    <SiteHeader />

    <!-- Main Content -->
    <main class="py-4">
      <router-view />
    </main>

    <!-- Site Footer -->
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";

export default {
  name: "App",
  components: {
    SiteHeader,
    SiteFooter,
  },
};
</script>

<style>
/* Import global styles */
@import "@/assets/css/styles.css";
</style>
