<template>
  <div>
    <nav class="relative z-40">
      <div class="container max-w-6xl w-full mx-auto px-6 flex justify-between items-center w-full">
        <div id="navigation-logo" class="flex items-center py-5">
          <!-- <div class="bg-gradient-to-r from-indigo-500 to-purple-400 w-4 h-4 mr-5 rounded-md" /> -->
          <p class="m-0 text-lg font-medium text-gray-900">
            <span id="navigation-logo__1" class="inverse__cut__text">
              hello@en-zo
            </span>
            <span id="navigation-logo__2" class="hidden cut__text">
              navigation.
            </span>
          </p>
        </div>
        <ul class="md:flex items-center py-5 hidden sm:hidden">
          <li class="mx-5">
            <a href="#realizations" class="font-normal text-gray-700 hover:text-indigo-500 transition duration-200 cursor-not-allowed opacity-50">
              Realizations
            </a>
          </li>
          <li class="mx-5 font-normal text-gray-700 hover:text-indigo-500 transition duration-200 cursor-pointer" @click="resume">
            Resume
          </li>
          <li class="mx-5">
            <a href="#services" class="font-normal text-gray-700 hover:text-indigo-500 transition duration-200 cursor-not-allowed opacity-50">
              Services
            </a>
          </li>
          <li class="ml-5">
            <a href="#contact" class="font-normal text-gray-700 hover:text-indigo-500 transition duration-200 cursor-not-allowed opacity-50">
              Contact
            </a>
          </li>
        </ul>
        <svg id="burgermenu" width="22px" height="31px" viewBox="0 0 52 31" version="1.1" class="sm:block block md:hidden" @click="toggle">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="burger-menu" transform="translate(0.000000, 3.000074)" stroke="#4A5568" stroke-linejoin="bevel" stroke-width="6">
              <line x1="0.0362187183" y1="0.5" x2="51.4617097" y2="0.5" id="top"></line>
              <line x1="8" y1="12.9999257" x2="51.425491" y2="12.9999257" id="middle"></line>
              <line x1="5.68434189e-14" y1="24.9999257" x2="51.425491" y2="24.9999257" id="bottom"></line>
            </g>
          </g>
        </svg>
      </div>
    </nav>
    <div :class="{ 'translate-x-0': menu, 'translate-x-full': !menu }" class="h-screen w-screen transition duration-500 bg-red-500 transform absolute z-30 top-0"></div>
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  data () {
    return {
      menu: false
    }
  },
  methods: {
    resume () {
      window.open('images/en-zo-resume.pdf', '_blank')
    },
    toggle () {
      const svg = document.getElementById('burgermenu')
      svg.classList.toggle('active')
      this.menu = !this.menu
      if (this.menu) {
        const tl = gsap.timeline({ defaults: { ease: 'SlowMo.easeOut' } })
        tl.to('#navigation-logo__1', { y: '100%', duration: .7 })
        tl.to('#navigation-logo__1', { display: 'none' })
        tl.to('#navigation-logo__2', { display: 'inline-block' })
        tl.to('#navigation-logo__2', { y: '0%', duration: .7 })
      } else {
        const tl = gsap.timeline({ defaults: { ease: 'SlowMo.easeOut' } })
        tl.to('#navigation-logo__2', { y: '100%', duration: .7 })
        tl.to('#navigation-logo__2', { display: 'none' })
        tl.to('#navigation-logo__1', { display: 'inline-block' })
        tl.to('#navigation-logo__1', { y: '0%', duration: .7 })
      }
    }
  }
}
</script>