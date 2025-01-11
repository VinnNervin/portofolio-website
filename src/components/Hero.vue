<template>
    <div id="home" data-aos="fade-up"
        class="hero bg-[url('@/assets/img/heroPattern.svg')] bg-no-repeat bg-cover bg-center w-full sm:h-[100vh]  h-fit sm:flex-row flex flex-col-reverse">
        <div class="hero-section sm:w-6/12 pr-14 w-full flex flex-col justify-center">
            <div class="hero-content-container pl-12 sm:pl-14 ">
                <div
                    class="main-title pt-8 font-kanit uppercase text-left md:text-5xl sm:text-4xl font-semibold text-black text-4xl">
                    <h1>Hello, I'm Charles</h1>
                    <p>web developer</p>
                </div>
                <div class=" introduction text-left text-lg">
                    I am a student who is passionate about programming development and IT field and major skills in
                    frontend development and web design.
                </div>
                <div class="social-media pb-8 flex gap-5 mt-5">
                    <ul class="flex gap-5 sm:text-4xl text-3xl">
                        <li class="social-media-links"><a class=" text-gray-950" href="https://github.com/VinnNervin"
                                target="_blank"><i class="bi bi-github"></i></a></li>
                        <li class="social-media-links"><a class=" text-red-600"
                                href="https://instagram.com/charles.lin12" target="_blank"><i
                                    class="bi bi-instagram"></i></a></li>
                    </ul>

                </div>
            </div>
        </div>

        <div
            class="img-container relative sm:w-6/12  md:h-[100vh] sm:h-full h-[90vw] flex justify-center sm:items-center items-end">
            <img data-aos="flip-left" class="img z-50 sm:w-[100%] md:w-9/12 w-8/12" src="../assets/img/profile.svg"
                alt="">
            <div class="absolute sm:w-1/2 right-0 bg-dark w-full sm:h-[100vh] h-[50vw]"></div>
        </div>
    </div>
    <div v-for="i in 3" :key="i" class="sm:block hidden w-full h-[1.6px] bg-[rgba(0,0,0,0.3)] mb-2 "></div>

</template>
