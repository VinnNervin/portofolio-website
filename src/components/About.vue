<template>
  <div id="about"
    class="about-section bg-black bg-[url('@/assets/img/aboutPattern.svg')] bg-no-repeat bg-cover bg-center w-screen overflow-x-hidden md:h-[100vh] h-fit flex flex-col-reverse md:flex-row sm:bg-right md:bg-right xl:bg-center">
    <div data-aos="fade-up" class="main-about md:w-8/12 w-full h-full flex justify-center items-center">
      <div
        class="paragraph-about sm:pl-16 md:pl-5 p-5 bg-dark h-4/6 text-left text-white hover:rounded-none rounded-r-3xl transform-cpu transition-all duration-75 ease-in">
        <p class="first-part text-4xl sm:text-6xl uppercase font-bold pb-2">Hello<span>👋</span></p>
        <p class="last-part text-justify text-base sm:text-xl">
          My name is charles lin a faculty of informatics student with a strong interest
          in web development and the IT field. started Active in the world of progsramming
          because it has an interest and love for computer programs.
          <br />
          <br />
          I have skills in frontend development and web design. in the future I want to
          develop my skills and mastery in fullstack development. I have an interest in
          learning new things to produce innovative and relevant solutions in the world of
          technology and technical skills.
        </p>
      </div>
    </div>
    <div data-aos="fade-left"
      class="side-about-content w-full md:w-4/12 flex justify-start items-start pt-20 md:pt-40 md:pl-5 sm:pl-16 pl-6 h-full text-left text-4xl sm:text-6xl uppercase font-bold text-black">
      <p class="hover:scale-110 transform-cpu transition-all duration-75 ease-in">
        about <br />me
      </p>
    </div>
  </div>
</template>

<style scoped>
span {
  animation-name: wave;
  animation-duration: 2.1s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
}

@keyframes wave {
  0% {
    transform: rotate(0.0deg)
  }

  10% {
    transform: rotate(14deg)
  }

  20% {
    transform: rotate(-8deg)
  }

  30% {
    transform: rotate(14deg)
  }

  40% {
    transform: rotate(-4deg)
  }

  50% {
    transform: rotate(10.0deg)
  }

  60% {
    transform: rotate(0.0deg)
  }

  100% {
    transform: rotate(0.0deg)
  }

}
</style>
