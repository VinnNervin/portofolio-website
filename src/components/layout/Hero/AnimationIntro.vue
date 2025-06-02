<template>
    <div
        class="main-title pt-8 font-kanit uppercase text-left md:text-5xl sm:text-4xl font-semibold text-black text-4xl">
        <h1 v-if="text !== ''">{{ text }}</h1>
        <h1 v-else class="invisible">|</h1>
        <p>web developer</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

let intro = ref("Hello, I'm Charles");
// typing animation 
let text = ref("");
let index = 0;
let speed = 0;

const typing = () => {
    if (index < intro.value.length) {
        text.value += intro.value.charAt(index);
        index++;
        // set random 
        speed = Math.floor(Math.random() * (50 - 30 + 1)) + 30;
        setTimeout(typing, speed);
    } else {
        setTimeout(() => {
            index = intro.value.length - 1;
            text.value = "";
            reverseTyping();
        }, 2000);
    }
};


const reverseTyping = () => {
    if (index >= 0) {
        text.value = intro.value.slice(0, index);
        index--;
        // set random
        speed = Math.floor(Math.random() * (80 - 50 + 1)) + 50;
        setTimeout(reverseTyping, speed);
    } else {
        index = 0; // reset
        setTimeout(typing, 2000); // tunggu 2detik
    }
}


onMounted(() => {
    typing();
});


</script>