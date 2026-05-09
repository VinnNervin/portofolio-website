<script setup>
import { ref } from 'vue';
import { contactUrls } from '../data/contact';

const urls = ref(contactUrls)

</script>

<template>
   <ul class="flex gap-5 text-3xl sm:text-4xl">
      <li v-for="url in urls" :key="url.url" class="hover:scale-125 transition-all duration-75 ease-in-out">
         <a :class="url.color" :href="url.url" target="_blank"><i :class="url.icon"></i></a>
      </li>
   </ul>
</template>
