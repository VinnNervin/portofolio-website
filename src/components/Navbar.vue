<template>
  <nav
    class="z-10 absolute top-0 flex justify-end sm:justify-start items-center text-base sm:text-xl font-bold w-full sm:py-5 sm:px-10 px-5 uppercase text-black">
    <router-link :to="'/'"
      class="active:border-2 hover:border-2 hover:border-black border-2 border-transparent transition-all duration-75 ease-in px-3 py-1 rounded-full">Home</router-link>
    <router-link :to="'#about'"
      class="active:border-2 hover:border-2 hover:border-black border-2 border-transparent transition-all duration-75 ease-in px-3 py-1 rounded-full">about</router-link>
    <router-link :to="'#contact'"
      class="active:border-2 hover:border-2 hover:border-black border-2 border-transparent transition-all duration-75 ease-in px-3 py-1 rounded-full">contact</router-link>
  </nav>
</template>
<style></style>