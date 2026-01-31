<template>
  <section id="home" class="min-h-screen bg-[#FEFAE0] flex flex-col font-sans relative overflow-hidden">
    <!-- Main Content Grid -->
    <div class="flex-1 flex flex-col sm:flex-row">
      <!-- Left Text Area -->
      <div
        class="flex-1 flex flex-col justify-center px-8 sm:px-16 py-12 relative border-r-0 sm:border-r-4 border-black">
        <!-- Decorative Background Text -->
        <div
          class="absolute top-0 left-0 w-full h-full overflow-hidden opacity-[0.1] pointer-events-none flex flex-col justify-center items-center z-0">
          <div class="text-[20vw] font-black leading-none whitespace-nowrap">
            HELLO
          </div>
        </div>

        <div class="relative z-10">
          <p
            class="inline-block test bg-black text-white font-bold px-4 py-2 mb-6 -rotate-6 shadow-[4px_4px_0px_0px_#FA5252]">
            Fullstack Developer
          </p>

          <h1
            class="text-6xl sm:text-7xl lg:text-8xl font-black text-black mb-6 leading-[0.9] drop-shadow-[5px_5px_0_rgba(163,230,53,1)]">
            CREATIVE<br />
            <span
              class="text-transparent bg-clip-text bg-linear-to-r from-[#FA5252] to-[#da77f2] [-webkit-text-stroke:2px_black]">DESIGN</span>
          </h1>

          <p
            class="text-xl font-bold border-l-8 border-black pl-6 mb-10 max-w-2xl bg-white/60 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
            I am a student who is passionate about programming development and
            IT field and major skills in frontend development and web design.
          </p>
        </div>
        <div class="flex gap-4">
          <neo-button v-for="(item, index) in socialMediaUrl" :key="index" :url="item.url" :name="item.name"
            :className="item.className" />
        </div>
      </div>

      <!-- Right Image Area -->
      <div class="sm:w-5/12 w-full h-125 sm:h-auto border-t-4 sm:border-t-0 border-black relative">
        <ImgHero />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ImgHero from "./components/img-hero.vue";
import NeoButton from "@/components/button/neo-button.vue";
import { socialMediaUrl } from "./utils";
import { createTimeline, stagger, splitText } from "animejs";
import { onMounted } from "vue";

onMounted(() => {
  const { words, chars } = splitText(".test", {
    words: { wrap: "clip" },
    chars: true,
  });

  createTimeline({
    loop: true,
    defaults: { ease: "inOut(3)", duration: 900 },
  })
    .add(
      words,
      {
        y: [(e: any) => (+e.dataset.line % 2 ? "100%" : "-100%"), "0%"],
      },
      stagger(125),
    )
    .add(
      chars,
      {
        y: (e: any) => (+e.dataset.line % 2 ? "100%" : "-100%"),
      },
      stagger(10, { from: "random" }),
    )
    .init();

  createTimeline({
    defaults: { ease: 'outExpo', duration: 1500 }
  })
    .add('h1', {
      translateY: [100, 0],
      opacity: [0, 1],
      rotate: [5, 0],
      delay: 500
    })
    .add('p.text-xl', {
      translateX: [-50, 0],
      opacity: [0, 1],
    }, '-=1200')
    .add('.flex.gap-4 > *', {
      translateY: [20, 0],
      opacity: [0, 1],
      delay: stagger(100)
    }, '-=1200')
    .add('.sm\\:w-5\\/12', {
      translateX: [100, 0],
      opacity: [0, 1],
    }, '-=1400')
    .init();
});
</script>
