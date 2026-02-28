<template>
  <section id="about"
    class="min-h-screen bg-[#74C0FC] border-b-4 border-t-4 border-black relative overflow-hidden py-20 px-4 sm:px-10 flex items-center">

    <div class="absolute inset-0 z-0 opacity-20"
      style="background-image: linear-gradient(#000 2px, transparent 2px), linear-gradient(90deg, #000 2px, transparent 2px); background-size: 40px 40px;">
    </div>

    <!-- Container -->
    <div class="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

      <!-- Left Side: Title & Visual -->
      <div class="lg:col-span-5 flex flex-col gap-8">
        <neo-button name="Who am i?" class-name="rotate-[-6deg] h- bg-white uppercase text-2x " padding="px-8 py-2" />

        <div class="relative group">
          <h1 class="text-8xl sm:text-9xl font-black text-white drop-shadow-[6px_6px_0_#000] leading-[0.8]">
            ABOUT<br>ME.
          </h1>

        </div>

      </div>

      <!-- Right Side: Content Cards -->
      <div class="lg:col-span-7">
        <AboutBio />
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import AboutBio from './components/about-bio.vue';
import { createTimeline, stagger } from 'animejs';
import NeoButton from '@/components/button/neo-button.vue';

onMounted(() => {
  createTimeline({
    defaults: { ease: 'outExpo', duration: 1000 }
  })
    .add('#about h1', {
      translateX: [-100, 0],
      opacity: [0, 1],
      delay: 200
    })
    .add('.neo-card', {
      translateY: [100, 0],
      opacity: [0, 1],
      delay: stagger(200)
    }, '-=800')
    .init();
});
</script>

<style scoped>
.animate-bounce-horizontal {
  animation: bounce-h 2s infinite;
}

@keyframes bounce-h {

  0%,
  100% {
    transform: translateX(0);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }

  50% {
    transform: translateX(25%);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>
