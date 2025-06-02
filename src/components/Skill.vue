<template>
    <div data-aos="fade-up"
        class="skill-section h-fit sm:h-fit sm:py-10 bg-white flex justify-center items-center sm:my-0 my-10 ">
        <div
            class="inner-skill-contianer py-10 lg:py-40 bg-dark h-fit sm:fit px-2 sm:px-20 bg-[url('@/assets/img/skillPattern.svg')] bg-no-repeat bg-right sm:bg-left bg-cover">
            <div class="center-container flex justify-center items-center flex-col h-full">
                <div class="skill-title pb-10">
                    <p class="text-5xl sm:text-6xl uppercase font-bold text-white">
                        skills</p>
                </div>
                <div
                    class="skill-icons text-7xl sm:text-8xl md:text-9xl flex justify-center items-center flex-wrap  gap-4">
                    <SkillIcon />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import SkillIcon from './layout/Skill/SkillIcon.vue';
</script>