<template>
  <div id="home" data-aos="fade-up"
    class="bg-[url('@/assets/img/heroPattern.svg')] bg-no-repeat bg-cover bg-center w-full sm:h-[100vh] h-fit sm:flex-row flex flex-col-reverse">
    <div class="sm:w-6/12 pr-14 w-full flex flex-col justify-center">
      <div class="hero-content-container pl-12 sm:pl-14">
        <AnimationIntro />
        <div class="introduction text-left text-lg">
          I am a student who is passionate about programming development and IT
          field and major skills in frontend development and web design.
        </div>
        <SocialMedia />
      </div>
    </div>
    <ImgHero />
  </div>
  <div v-for="i in 3" :key="i" class="sm:block hidden w-full h-[1.6px] bg-[rgba(0,0,0,0.3)] mb-2"></div>
</template>


<script setup>
import AnimationIntro from './layout/Hero/AnimationIntro.vue';
import ImgHero from './layout/Hero/ImgHero.vue';
import SocialMedia from './layout/Hero/SocialMedia.vue';

</script>