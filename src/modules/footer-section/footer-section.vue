<template>
  <footer id="contact" class="bg-[#FA5252] border-t-4 border-black text-black relative overflow-hidden">
    <!-- Decorative Pattern -->
    <div class="absolute inset-0 opacity-10 pointer-events-none"
      style="background-image: radial-gradient(#000 2px, transparent 2px); background-size: 20px 20px;">
    </div>

    <div
      class="max-w-7xl mx-auto px-4 sm:px-10 py-20 flex flex-col md:flex-row gap-10 justify-between items-center relative z-10">

      <!-- Call to Action -->
      <div class="text-center md:text-left">
        <h2 class="text-6xl sm:text-8xl font-black uppercase leading-none mb-6 drop-shadow-[5px_5px_0_#fff]">
          LET'S<br>TALK
        </h2>
        <div
          class="bg-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-2 hover:rotate-0 transition-all inline-block">
          <p class="font-bold text-xl font-mono">
            Have a project in mind? <br> Let's build something cool!
          </p>
        </div>
      </div>

      <!-- Contact Links Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto">
        <NeoButton v-for="contact in contacts" :key="contact.name" :name="contact.name" :url="contact.url"
          padding="px-8 py-4 text-center" className="bg-[#A3E635] w-full min-w-50" hoverType="up" />
      </div>
    </div>

    <!-- Copyright / Bottom Bar -->
    <div
      class="bg-black text-white py-6 border-t-4 border-white flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10 gap-4 text-sm font-bold uppercase relative z-10">
      <span class="flex items-center gap-2">
        © {{ new Date().getFullYear() }} Charles Lin
        <span class="w-2 h-2 bg-[#A3E635] rounded-full inline-block"></span>
      </span>

      <div class="flex gap-4">
        <a href="#" class="hover:text-[#A3E635] transition-colors">Top</a>
        <a href="https://github.com/VinnNervin" target="_blank"
          class="hover:text-[#A3E635] transition-colors">Source</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import NeoButton from '@/components/button/neo-button.vue';

const contacts = [
  { name: 'GITHUB', url: 'https://github.com/VinnNervin' },
  { name: 'INSTAGRAM', url: 'https://instagram.com/charles.lin12' },
  { name: 'WHATSAPP', url: 'https://wa.me/+6282275370177' },
  { name: 'EMAIL ME', url: 'mailto:charleslin437@gmail.com' },
];
</script>