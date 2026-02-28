<script setup lang="ts">
import NeoCard from '@/components/card/neo-card.vue';

</script>

<template>
  <div class="h-full flex flex-col gap-6">

    <neo-card class-name="bg-[#A3E635]">
      <h2 class="text-4xl sm:text-6xl font-black uppercase mb-2">
        Hello <span class="inline-block animate-waving-hand cursor-cell">👋</span>
      </h2>
      <p class="font-bold text-xl font-mono mt-2 border-l-4 border-black pl-4">
        Let me introduce myself.
      </p>
    </neo-card>

    <!-- Card 2: Main Bio -->
    <neo-card class-name="bg-white p-6 sm:p-8 flex-1 flex flex-col justify-center relative">
      <div class="space-y-6 text-lg sm:text-xl font-medium leading-relaxed font-sans">
        <p>
          My name is <span class="bg-[#FFD43B] px-1 border border-black font-bold">Charles Lin</span>, a faculty of
          informatics student with a strong interest in
          <span class="font-black underline decoration-4 decoration-[#74C0FC]">web development</span> and the IT field.
          I started being active in the world of programming because of my deep interest and love for computer programs.
        </p>
        <p>
          I have skills in <span class="font-black">frontend development</span> and web design.
          In the future, I want to develop my skills and mastery in <span
            class="italic bg-black text-white px-1">fullstack development</span>.
          I have an interest in learning new things to produce innovative and relevant solutions.
        </p>
      </div>

      <!-- Footer of card -->
      <div class="mt-8 pt-6 border-t-4 border-black flex flex-wrap gap-3">
        <span v-for="value in ['openToWork', 'vue', 'javascript', 'fullstack',]" :key="value"
          class="px-3 py-1 bg-gray-200 border-2 border-black font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">#{{
            value }}</span>
      </div>
    </neo-card>
  </div>
</template>

<style scoped>
.neo-card {
  border: 4px solid black;
  box-shadow: 8px 8px 0px 0px rgba(0, 0, 0, 1);
  transition: all 0.2s ease;
}

.neo-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 1);
}

@keyframes wave {
  0% {
    transform: rotate(0.0deg)
  }

  10% {
    transform: rotate(14deg)
  }

  20% {
    transform: rotate(-8deg)
  }

  30% {
    transform: rotate(14deg)
  }

  40% {
    transform: rotate(-4deg)
  }

  50% {
    transform: rotate(10.0deg)
  }

  60% {
    transform: rotate(0.0deg)
  }

  100% {
    transform: rotate(0.0deg)
  }
}

.animate-waving-hand:hover {
  animation-name: wave;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
}
</style>