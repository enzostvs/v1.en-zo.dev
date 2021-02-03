<template>
  <div>
    <div class="container mx-auto px-6 pt-10 text-center">
      <div class="bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full w-32 h-32 flex items-center justify-center mx-auto">
        <img :src="require(`~/assets/images/avatar_${random}.svg`)" class="w-16" alt="Memoji Enzo">
      </div>
      <p class="text-2xl font-medium mt-10 mb-5">Hi, I'm Enzo&nbsp;👋</p>
      <h1 class="text-6xl font-bold leading-tight">
        Front-End
        <span class="bg-clip-text	bg-gradient-to-r from-indigo-500 via-purple-400 to-indigo-500 text-fill-transparent">Developer</span>
        <br />
        and
        <span class="bg-clip-text	bg-gradient-to-r from-yellow-500 via-red-400 to-yellow-500 text-fill-transparent">UI Designer</span>
      </h1>
      <!-- <canvas id="canvas3d" class="mx-auto w-full mt-6"></canvas> -->
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
