<template>
    <nav
        class="navbar z-10  flex absolute justify-end sm:justify-start items-center text-base sm:text-xl font-bold selection:gap-10 w-full sm:py-5 sm:px-10 px-5 font-montserrat uppercase my-2  text-black">

        <router-link :to="'/'">Home</router-link>
        <router-link :to="'#about'">about</router-link>
        <router-link :to="'#contact'">contact</router-link>
    </nav>
</template>
