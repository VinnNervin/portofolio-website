<template>
  <div class="relative w-full h-full flex justify-center items-center p-10 bg-[#FFD43B] overflow-hidden">
    <div class="absolute inset-0 opacity-10 pointer-events-none"
      style="background-image: radial-gradient(#000 2px, transparent 2px); background-size: 20px 20px;">
    </div>

    <div
      class="relative z-10 w-full max-w-sm bg-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform sm:rotate-2 hover:rotate-0 transition-all duration-300">

      <div class="flex gap-2 mb-4 border-b-4 border-black pb-2">
        <div class="w-4 h-4 rounded-full bg-[#FA5252] border-2 border-black"></div>
        <div class="w-4 h-4 rounded-full bg-[#FFD43B] border-2 border-black"></div>
        <div class="w-4 h-4 rounded-full bg-[#A3E635] border-2 border-black"></div>
      </div>

      <div class="aspect-square bg-[#74C0FC] border-2 border-black overflow-hidden mb-4 relative group">
        <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          src="../../../assets/img/profile.svg" alt="Profile" />
      </div>

      <div class="font-black text-center text-xl uppercase tracking-widest bg-black text-white py-2">
        STUDENT.EXT
      </div>
    </div>

    <!-- Decorative floating elements -->

  </div>
</template>