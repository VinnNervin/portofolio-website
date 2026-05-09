<script lang="ts">
const circleAccessories: string[] = ['bg-[#FA5252]', 'bg-[#FFD43B]', ' bg-[#A3E635]'];
</script>

<template>
   <div class="relative w-full h-full flex justify-center items-center p-10 bg-[#FFD43B] overflow-hidden">
      <div class="absolute inset-0 opacity-10 pointer-events-none"
         style="background-image: radial-gradient(#000 2px, transparent 2px); background-size: 20px 20px;">
      </div>

      <div
         class="hero-card relative z-10 w-full max-w-sm bg-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform sm:rotate-2 hover:rotate-0 transition-all duration-300">

         <div class="flex gap-2 mb-4 border-b-4 border-black pb-2">
            <div v-for="circleAccessory in circleAccessories"
               :class="['w-4 h-4 rounded-full border-2 border-black', circleAccessory]"></div>
         </div>

         <div class="aspect-square bg-[#74C0FC] border-2 border-black overflow-hidden mb-4 relative group">
            <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
               src="@/assets/img/profile-2.png" alt="Profile" />
         </div>

         <div class="font-black text-center text-xl uppercase tracking-widest bg-black text-white py-2">
            CHARLES LIN
         </div>
      </div>


   </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { animate } from 'animejs';

onMounted(() => {
   animate(
      '.hero-card', {
      translateY: [-20, 20],
      rotate: [5, -2],
      duration: 2500,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine'
   });

});
</script>