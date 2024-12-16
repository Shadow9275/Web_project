<template>
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <!-- Logo ou nom du site -->
          <a class="navbar-brand" href="#">SportGearPro</a>
  
          <!-- Bouton pour le menu mobile -->
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
  
          <!-- Liens de navigation -->
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Accueil</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Catalogue</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Panier</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "SiteHeader",
  };
  </script>
  
  <style scoped>
  /* Style personnalisé pour le Header */
  .navbar {
    padding: 1rem;
  }
  
  .navbar-brand {
    font-weight: bold;
    font-size: 1.5rem;
  }
  
  .nav-link {
    font-size: 1.1rem;
    transition: color 0.3s ease;
  }
  
  .nav-link:hover {
    color: #0d6efd; /* Bleu Bootstrap */
  }
  </style>
  