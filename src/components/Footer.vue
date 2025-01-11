<template>
    <div data-aos="fade-down" id="contact" class="footer-section flex flex-col">
        <div class="contact">
            <p class="text-xl sm:text-2xl text-black uppercase font-bold">contact me</p>
        </div>

        <div class="social-media mb-4 pb-4 flex flex-col w-full justify-center items-center gap-5 sm:mt-5 mt-3">
            <ul class="flex gap-5 text-3xl sm:text-4xl">
                <li v-for="url in urls" :key="url.url" class="social-media-links">
                    <a :class="url.color" :href="url.url" target="_blank"><i :class="url.icon"></i></a>
                </li>
            </ul>
            <p>thank you for visiting my website 👋</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const urls = ref([{
    url: "https://github.com/VinnNervin",
    icon: "bi bi-github",
    color: "text-gray-950"
},
{
    url: "https://instagram.com/charles.lin12",
    icon: "bi bi-instagram",
    color: "text-red-600"
},
{
    url: "https://wa.me/+6282275370177",
    icon: "bi bi-whatsapp",
    color: "text-green-600"
},
{
    url: "mailto:charleslin437@gmail.com",
    icon: "bi bi-envelope-at",
    color: "text-blue-800"
},

])

</script>