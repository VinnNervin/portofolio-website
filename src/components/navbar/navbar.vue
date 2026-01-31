<script setup lang="ts">
import NavbarItems from './navbar-items.vue';
const url = [
  { to: 'home', name: 'Home' },
  { to: 'about', name: 'About' },
  { to: 'skills', name: 'Skills' },
  { to: 'projects', name: 'Projects' },
  { to: 'contact', name: 'Contact' },
]
</script>

<template>
  <nav
    class="z-10 bg-white absolute top-0 flex justify-end gap-4  border-b-2 border-black  sm:text-xl font-bold w-full  uppercase text-black">
    <navbar-items v-for="(item, index) in url" :key="index" :to="item.to" :name="item.name" />
  </nav>
</template>

<style scoped>
nav {
  padding: 10px 20px;
}
</style>