<template>
  <div>
    <div class="container mx-auto px-6 pt-10 py-10 text-center relative pointer-events-none" style="z-index: 2">
      <div class="bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full w-32 h-32 flex items-center justify-center mx-auto pointer-events-auto" @mouseover="hover = true" @mouseleave="hover = false">
        <img :src="require(`~/assets/images/avatar/${random}.svg`)" class="w-16" alt="Memoji Enzo">
      </div>
      <p class="text-2xl font-medium mt-10 mb-5">Hi, I'm Enzo&nbsp;👋</p>
      <!-- <p class="text-medium text-gray-600">Site under construction...</p> -->
      <h1 class="text-6xl font-bold leading-tight">
        Front-End
        <span class="bg-clip-text	bg-gradient-to-r from-indigo-500 via-purple-400 to-indigo-500 text-fill-transparent">Developer</span>
        <br />
        and
        <span class="bg-clip-text	bg-gradient-to-r from-yellow-500 via-red-400 to-yellow-500 text-fill-transparent">UI Designer</span>
      </h1>
      <div class="flex items-center justify-center mt-6 pointer-events-auto">
        <a href="https://github.com/enzostvs" target="_blank" class="w-10 h-10 flex items-center justify-center roboto transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl rounded-full bg-gray-900 hover:bg-gray-800 text-white text-base font-medium mr-4 tracking-wide">
          <i class="fab fa-github text-lg" />
        </a>
        <a href="https://www.linkedin.com/in/e-esteves/" target="_blank" class="w-10 h-10 flex items-center justify-center roboto transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl rounded-full bg-blue-700 hover:bg-blue-600 text-white text-base font-medium mr-4 tracking-wide">
          <i class="fab fa-linkedin text-lg" />
        </a>
        <a href="https://discord.com/users/452475691410128906" target="_blank" class="w-10 h-10 flex items-center justify-center roboto transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl rounded-full bg-indigo-400 hover:bg-indigo-500 text-white text-base font-medium mr-4 tracking-wide">
          <i class="fab fa-discord text-lg" />
        </a>
      </div>
    </div>
    <!-- <canvas id="canvas3d" class="absolute top-0 left-0 mx-auto mt-10" style="z-index: 1;width: 100vw !important; height: 100vh !important"></canvas> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      random: Math.floor(Math.random() * 4) + 1,
      hover: false
    }
  },
  watch: {
    hover: 'resetRandom'
  },
  methods: {
    resetRandom (oldValue, newValue) {
      if (!newValue) {
        let number = Math.floor(Math.random() * 4) + 1
        while (number === this.random) {
          number = Math.floor(Math.random() * 4) + 1
        }
        this.random = number
      }
    }
  }
}
</script>
