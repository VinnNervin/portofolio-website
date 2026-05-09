<script setup lang="ts">
import { ref, computed } from 'vue';
import SkillCard from './components/skill-card.vue';
import NeoButton from '@/components/button/neo-button.vue';
import { categories } from './data/categories';
import { skillIcon } from './data/icon';

const activeTab = ref<keyof typeof skillIcon>('core');

const activeSkills = computed(() => {
   return skillIcon[activeTab.value];
});
</script>

<template>
   <section id="skills" class="py-20 border-b-4 border-black">
      <div class="max-w-7xl mx-auto px-4 sm:px-10 relative z-10 w-full flex flex-col md:flex-row gap-10">

         <div class="md:w-1/4 flex flex-col gap-6">
            <div>
               <span class="bg-black text-white px-3 py-1 font-bold text-sm uppercase">My Arsenal</span>
               <h2 class="text-6xl sm:text-7xl font-black uppercase leading-none mt-2 ">
                  Tech<br>Stack
               </h2>
            </div>

            <div class="flex flex-col gap-2">
               <NeoButton v-for="category in categories" :key="category.id" :name="category.name" :className="[
                  activeTab === category.id ? 'bg-[#FA5252] text-white' : 'bg-white text-black',
                  'text-left w-full font-black text-xl uppercase border-4 border-black transition-all px-4 py-3 '
               ]" @click="activeTab = category.id" :hover-type="'down'" />
            </div>
         </div>

         <!-- Right Content (Grid) -->
         <div class="md:w-3/4">
            <!-- Main Card Container -->
            <div class="bg-white border-4 border-black p-2 sm:p-6 min-h-125">
               <!-- Window Header -->
               <div class="flex items-center justify-between border-b-4 border-black pb-4 mb-4">
                  <div
                     class="font-mono font-bold text-xl uppercase bg-yellow-300 px-2 border-2 border-black inline-block">
                     Directory: ./{{ activeTab }}
                  </div>
                  <div class="flex gap-2">
                     <div class="w-4 h-4 rounded-full bg-red-500 border-2 border-black"></div>
                     <div class="w-4 h-4 rounded-full bg-yellow-500 border-2 border-black"></div>
                  </div>
               </div>

               <!-- Content Grid -->
               <div class="grid grid-cols-2 lg:grid-cols-3 gap-4" v-if="activeSkills.length">
                  <SkillCard v-for="skill in activeSkills" :key="skill.name" :name="skill.name" :icon="skill.icon"
                     :color="skill.color" :label="skill.label" class="neo-skill-card animate-pop-in" />
               </div>

               <div v-else class="h-64 flex items-center justify-center font-black text-2xl uppercase opacity-20">
                  No Data Found
               </div>
            </div>
         </div>

      </div>
   </section>
</template>


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

section {
   background-color: #1cca46;
   opacity: 1;
   background-image: radial-gradient(#ffffff 2px, #1cca46 2px);
   background-size: 40px 40px;
}
</style>
