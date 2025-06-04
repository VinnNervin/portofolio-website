<template>
    <div data-aos="fade-down" id="contact" class="footer-section flex flex-col">
        <div class="contact">
            <p class="text-xl sm:text-2xl text-black uppercase font-bold">contact me</p>
        </div>

        <div class="social-media mb-4 pb-4 flex flex-col w-full justify-center items-center gap-5 sm:mt-5 mt-3">
            <ContactList />
            <div class="outro-text capitalize">
                <p>thank you for visiting my website 👋</p>
                <p v-if="dynamicText !== ''">{{ dynamicText }}</p>
                <p v-else class="invisible">|</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import ContactList from './layout/Footer/ContactList.vue';
import { onMounted } from 'vue';
import { useAnimationTyping } from '@/utils/utils';
const { dynamicText, typing } = useAnimationTyping();

onMounted(() => {
    typing("this website made by Vue.js");
});

</script>