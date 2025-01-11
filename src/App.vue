<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>


  <Navbar />
  <router-view />
</template>

<style>
#app {
  font-family: "Poppins", serif;
  font-weight: 400;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
