<template>
    <div data-aos="fade-down" id="contact" class="footer-section flex flex-col">
        <div class="contact">
            <p class="text-xl sm:text-2xl text-black uppercase font-bold">contact me</p>
        </div>

        <div class="social-media mb-4 pb-4 flex flex-col w-full justify-center items-center gap-5 sm:mt-5 mt-3">
            <ContactList />
            <p>thank you for visiting my website 👋</p>
        </div>
    </div>
</template>

<script setup>
import ContactList from './layout/Footer/ContactList.vue';
</script>