<template>
    <header>
      <nav>
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">Catalogue</a></li>
          <li><a href="#">Panier</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "Header",
  };
  </script>
  
  <style>
  /* Style de base pour le Header */
  header {
    background-color: #333;
    color: white;
    padding: 1rem;
  }
  nav ul {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
  nav ul li a {
    color: white;
    text-decoration: none;
  }
  </style>
  