<template>
  <template v-for="(skill, idx) in skills" :key="idx">
    <i v-if="skill.type === 'icon'" :class="skill.class"></i>
    <img v-else :src="skill.src" class="sm:w-28 w-16 hover:scale-110" :alt="skill.alt" />
  </template>
</template>

<script setup>
const skills = [
  { type: 'icon', class: 'hover:scale-110 devicon-html5-plain-wordmark colored' },
  { type: 'icon', class: 'hover:scale-110 devicon-css3-plain-wordmark colored' },
  { type: 'icon', class: 'hover:scale-110 devicon-bootstrap-plain-wordmark colored' },
  { type: 'icon', class: 'hover:scale-110 devicon-tailwindcss-original colored' },
  { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
  { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg', alt: 'Vue.js' },
  { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg', alt: 'PHP' },
  { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg', alt: 'Python' },
  { type: 'icon', class: 'hover:scale-110 devicon-mysql-plain-wordmark colored' },
  { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg', alt: 'MongoDB' },
  { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg', alt: 'PostgreSQL' },
  { type: 'icon', class: 'hover:scale-110 devicon-git-plain colored' },
  { type: 'icon', class: 'hover:scale-110 text-white devicon-wordpress-plain' },
  { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', alt: 'Figma' },
  { type: 'icon', class: 'hover:scale-110 bg-white rounded-full devicon-canva-original colored' },
  { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg', alt: 'Vite' },
  { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg', alt: 'C++' },
];
</script>