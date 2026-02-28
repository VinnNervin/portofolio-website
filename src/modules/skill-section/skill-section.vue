<template>
  <h1>kkekek</h1>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import SkillCard from './components/skill-card.vue';
import { createTimeline } from 'animejs';
import NeoButton from '@/components/button/neo-button.vue';

const activeTab = ref('core');

const categories = [
  { id: 'core', name: 'Core' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'mobile', name: 'Mobile' },
  { id: 'tools', name: 'Tools & Others' },
];

const skillsData = {
  core: [
    { name: "JavaScript", icon: "javascript-plain", color: "text-[#F7DF1E]", label: "CORE" },
    { name: "Python", icon: "python-plain", color: "text-[#3776AB]", label: "CORE" },
    { name: "PHP", icon: "php-plain", color: "text-[#777BB4]", label: "CORE" },

  ],
  frontend: [
    { name: "Vue.js", icon: "vuejs-plain-wordmark", color: "text-[#41B883]", label: "FRAMEWORK" },
    { name: "React", icon: "react-original", color: "text-[#61DAFB]", label: "LIBRARY" },
    { name: "Tailwind", icon: "tailwindcss-plain", color: "text-[#38BDF8]", label: "STYLING" },
    { name: "Bootstrap", icon: "bootstrap-plain", color: "text-[#7952B3]", label: "STYLING" },
    { name: "TypeScript", icon: "typescript-plain", color: "text-[#3178C6]", label: "LANGUAGE" },
  ],
  backend: [
    { name: "Node.js", icon: "nodejs-plain", color: "text-[#339933]", label: "RUNTIME" },
    { name: "Express", icon: "express-original", color: "text-gray-600", label: "FRAMEWORK" },
    { name: "PostgreSQL", icon: "postgresql-plain", color: "text-[#336791]", label: "DATABASE" },
    { name: "Laravel", icon: "laravel-plain", color: "text-[#FF2D20]", label: "FRAMEWORK" },
    { name: "MySql", icon: "mysql-plain", color: "text-[#4479A1]", label: "DATABASE" },
    { name: "MongoDB", icon: "mongodb-plain", color: "text-[#47A248]", label: "DATABASE" },
  ],
  mobile: [
    { name: "React Native", icon: "reactnative-original", color: "text-[#4479A1]", label: "FRAMEWORK" },

  ],
  tools: [
    { name: "Git", icon: "git-plain", color: "text-[#F05032]", label: "VCS" },
    { name: "Vite", icon: "vitejs-plain", color: "text-[#646CFF]", label: "BUILD TOOL" },
    { name: "Figma", icon: "figma-plain", color: "text-[#F24E1E]", label: "DESIGN" },
    { name: "Postman", icon: "postman-plain", color: "text-[#FF6C37]", label: "TESTING" },
    { name: "Canva", icon: "canva-plain", color: "text-[#00C4CC]", label: "DESIGN" },
  ]
};

const activeSkills = computed(() => {
  return skillsData[activeTab.value as keyof typeof skillsData] || [];
});

onMounted(() => {
  createTimeline({
    defaults: { ease: 'outExpo', duration: 1000 }
  })
    .add('#skill h2', {
      translateX: [-50, 0],
      opacity: [0, 1]
    })
    .add('.bg-white.border-4', { // Main container entrance
      scale: [0.95, 1],
      opacity: [0, 1]
    }, '-=800')
    .init();
});
</script>

<style scoped>
.animate-pop-in {
  animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  opacity: 0;
  transform: scale(0.8);
}

@keyframes popIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}


.neo-skill-card:nth-child(1) {
  animation-delay: 0.05s;
}

.neo-skill-card:nth-child(2) {
  animation-delay: 0.1s;
}

.neo-skill-card:nth-child(3) {
  animation-delay: 0.15s;
}

.neo-skill-card:nth-child(4) {
  animation-delay: 0.2s;
}

.neo-skill-card:nth-child(5) {
  animation-delay: 0.25s;
}

.neo-skill-card:nth-child(6) {
  animation-delay: 0.3s;
}

.neo-skill-card:nth-child(7) {
  animation-delay: 0.35s;
}

.neo-skill-card:nth-child(8) {
  animation-delay: 0.4s;
}
</style>