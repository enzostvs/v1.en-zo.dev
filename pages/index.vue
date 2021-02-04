<template>
  <div class="relative">
    <div class="container mx-auto px-6 pt-10 py-10 text-center relative" style="z-index: 1">
      <div class="bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full w-32 h-32 flex items-center justify-center mx-auto">
        <img :src="require(`~/assets/images/avatar_${random}.svg`)" class="w-16" alt="Memoji Enzo">
      </div>
      <p class="text-2xl font-medium mt-10 mb-5">Hi, I'm Enzo&nbsp;👋</p>
      <p class="text-medium text-gray-600">Work In Progress</p>
      <h1 class="text-6xl font-bold leading-tight">
        Front-End
        <span class="bg-clip-text	bg-gradient-to-r from-indigo-500 via-purple-400 to-indigo-500 text-fill-transparent">Developer</span>
        <br />
        and
        <span class="bg-clip-text	bg-gradient-to-r from-yellow-500 via-red-400 to-yellow-500 text-fill-transparent">UI Designer</span>
      </h1>
      <div class="max-w-lg mx-auto text-lg font-normal text-gray-700 roboto text-center tracking-wide mt-3 tracking-wider">
        You can find my work on <a href="#" class="inline-block cursor-pointer text-gray-800 font-medium ml-1 transition duration-200 hover:text-indigo-600"><i class="fab fa-github mr-1" />GitHub</a> or see my profesional profile on <a href="#" class="cursor-pointer inline-block text-gray-800 font-medium mx-1 transition duration-200 hover:text-red-500"><i class="fab fa-linkedin mr-1" />LinkedIn</a>
      </div>
    </div>
    <!-- <canvas id="canvas3d" class="absolute top-0 left-0 mx-auto" style="z-index: -1"></canvas> -->
    <div class="container px-6 mx-auto">
      <div class="h-64"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      random: Math.floor(Math.random() * 3) + 1
    }
  }
}
</script>
