<script>
import SiteHeader from './components/Header.vue'; // Ou SiteHeader.vue si tu as renommé le fichier
import SiteFooter from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    SiteHeader,
    SiteFooter
  },
};
</script>

<template>
  <div>
    <SiteHeader /> <!-- Utilise le nouveau nom -->
    <div class="container">
      <h1 class="text-center mt-4">Bienvenue sur SportGearPro</h1>
      <p class="text-center">Découvrez le meilleur du matériel sportif.</p><br>
    </div>
    <SiteFooter />
  </div>
</template>
