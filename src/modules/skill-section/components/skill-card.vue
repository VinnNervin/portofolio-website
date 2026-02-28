<template>
  <div
    class="neo-skill-card h-full min-h-[180px] bg-white border-4 border-black p-5 flex flex-col items-center justify-between gap-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all cursor-crosshair group relative overflow-hidden">

    <!-- Main Content -->
    <div :class="`text-6xl ${color} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 mt-2`">
      <i :class="`devicon-${icon}`"></i>
    </div>

    <div class="text-center z-10 w-full">
      <h3 class="font-black text-2xl uppercase tracking-tighter mb-2">{{ name }}</h3>
      <!-- Label "Stamp" -->
      <div
        class="inline-block px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-widest border border-black transform -rotate-1 group-hover:rotate-0 transition-transform">
        {{ label }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  icon: string
  color: string
  label: string
}>()
</script>