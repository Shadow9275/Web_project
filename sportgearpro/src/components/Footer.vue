<template>
    <footer class="bg-dark text-light py-3">
      <div class="container text-center">
        <p>&copy; {{ currentYear }} SportGearPro. Tous droits réservés.</p>
        <ul class="list-inline mt-2">
          <li class="list-inline-item">
            <a href="#" class="text-light">Mentions légales</a>
          </li>
          <li class="list-inline-item">
            <a href="#" class="text-light">Politique de confidentialité</a>
          </li>
          <li class="list-inline-item">
            <a href="#" class="text-light">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "SiteFooter", // Nom du composant
    data() {
      return {
        currentYear: new Date().getFullYear(), // Année dynamique
      };
    },
  };
  </script>
  
  <style scoped>
  footer {
    font-size: 0.9rem;
  }
  
  footer a {
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  footer a:hover {
    color: #0d6efd; /* Bleu Bootstrap */
  }
  </style>
  