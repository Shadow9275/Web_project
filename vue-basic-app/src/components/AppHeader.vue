<template>
    <header class="bg-primary text-white p-3">
      <nav class="container d-flex justify-content-between">
        <h1>My Vue App</h1>
        <ul class="nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link text-white">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link text-white">About</router-link>
          </li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'AppHeader',
  };
  </script>
  
  <style scoped>
  header {
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  </style>
  