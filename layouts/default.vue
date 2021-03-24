<template>
  <div class="min-h-full">
    <Navigation />
    <Nuxt />
    <div class="container max-w-6xl w-full mx-auto p-6 mt-6 flex items-center justify-between">
      <div class="w-full flex items-center justify-between">
        <p class="text-gray-500 text-opacity-70">
            © en-zo.dev
        </p>
        <div>
            <div class="flex items-center justify-end">
                <p class="text-gray-500 text-opacity-70">
                  Developed with <span class="text-pink-500 text-xs">♥</span> by
                </p>
                <a href="https://en-zo.dev" target="_blank" class="text-gray-500 ml-1">en-zo.dev</a>
            </div>
            <div class="flex items-center justify-end text-xs mt-1">
                <p class="text-gray-500 text-opacity-70">
                  Inspired by
                </p>
                <a href="https://dribbble.com/oguzyagiz" target="_blank" class="text-gray-500 ml-1">Oğuz Yağız Kara</a>
            </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation'

export default {
  components: { Navigation }
}
</script>
