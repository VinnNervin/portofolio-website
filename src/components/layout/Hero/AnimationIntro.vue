<template>
    <div
        class="main-title pt-8 font-kanit uppercase text-left md:text-5xl sm:text-4xl font-semibold text-black text-3xl">
        <h1 v-if="dynamicText !== ''">{{ dynamicText }}</h1>
        <h1 v-else class="invisible">Hello, I'm Charles</h1>
        <p>web developer</p>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useAnimationTyping } from '@/utils/utils';
const { dynamicText, typing } = useAnimationTyping();

onMounted(() => {
    typing("Hello, I'm Charles");
});


</script>