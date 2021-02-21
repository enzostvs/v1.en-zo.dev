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
            <a href="#projects" class="font-normal text-gray-700 hover:text-indigo-500 transition duration-200 cursor-pointer">
              Projects
            </a>
          </li>
          <li class="mx-5 font-normal text-gray-700 hover:text-indigo-500 transition duration-200 cursor-pointer" @click="resume">
            Resume
          </li>
          <li class="ml-5">
            <a href="#contact" class="font-normal text-gray-700 transition duration-200 cursor-not-allowed opacity-50">
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
    <div :class="{ 'opacity-100 pointer-events-auto': menu, 'opacity-0 pointer-events-none': !menu }" class="h-screen w-screen transition duration-500 bg-white absolute z-30 right-0 top-0">
      <div class="px-6 py-20">
        <div class="w-full relative text-white overflow-hidden rounded-3xl shadow-lg bg-gradient-to-br from-purple-500 to-indigo-500 p-6 mb-6" @click="resume">
          <h2 class="text-xl font-semibold mb-1 text-shadow">Resume</h2>
          <p class="font-light text-violet-100 text-shadow mb-3">Download now to keep it close to you ;-)</p>
          <a class="mt-auto bg-indigo-800 bg-opacity-50 relative z-10 hover:bg-opacity-75 transition-colors duration-200 rounded-xl font-semibold py-2 px-4 inline-flex">View resume</a>
          <img src="~/assets/images/menus/resume.svg" alt="Resume icon" class="w-44 absolute -bottom-12 -right-12 md:static overflow-visible">
          <div class="absolute bottom-0 left-0 right-0 h-20" style="background: linear-gradient(to top, rgb(135, 94, 245), rgba(135, 94, 245, 0));" />
        </div>
        <div class="w-full relative text-white overflow-hidden rounded-3xl shadow-lg bg-gradient-to-br from-gray-300 to-gray-500 p-6 mb-6">
          <h2 class="text-xl font-semibold mb-1 text-shadow">Projects</h2>
          <p class="font-light text-violet-100 text-shadow mb-3">Coming soon :o !</p>
          <a class="mt-auto bg-gray-600 bg-opacity-50 relative z-10 transition-colors duration-200 rounded-xl font-semibold py-2 px-4 inline-flex">View realizations</a>
          <img src="~/assets/images/menus/projects.svg" alt="Resume icon" class="w-36 absolute -bottom-12 -right-8 md:static overflow-visible" style="filter: grayscale(1);">
          <div class="absolute bottom-0 left-0 right-0 h-20" style="background: linear-gradient(to top, rgb(116 126 136), rgba(135, 94, 245, 0));" />
        </div>
        <div class="w-full relative text-white overflow-hidden rounded-3xl shadow-lg bg-gradient-to-br from-gray-300 to-gray-500 p-6">
          <h2 class="text-xl font-semibold mb-1 text-shadow">Contact</h2>
          <p class="font-light text-violet-100 text-shadow mb-3">Coming soon :o !</p>
          <a class="mt-auto bg-gray-600 bg-opacity-50 relative z-10 transition-colors duration-200 rounded-xl font-semibold py-2 px-4 inline-flex">View realizations</a>
          <img src="~/assets/images/menus/contact.svg" alt="Resume icon" class="w-16 absolute -bottom-12 right-6 md:static overflow-visible" style="filter: grayscale(1);">
          <div class="absolute bottom-0 left-0 right-0 h-20" style="background: linear-gradient(to top, rgb(116 126 136), rgba(135, 94, 245, 0));" />
        </div>
      </div>
    </div>
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
        tl.to('#navigation-logo__1', { y: '100%', duration: .7, stagger: 0  })
        tl.to('#navigation-logo__1', { display: 'none', stagger: 0 })
        tl.to('#navigation-logo__2', { display: 'inline-block', stagger: 0 })
        tl.to('#navigation-logo__2', { y: '0%', duration: .7, stagger: 0  })
      } else {
        const tl = gsap.timeline({ defaults: { ease: 'SlowMo.easeOut' } })
        tl.to('#navigation-logo__2', { y: '100%', duration: .7, stagger: 0  })
        tl.to('#navigation-logo__2', { display: 'none', stagger: 0  })
        tl.to('#navigation-logo__1', { display: 'inline-block', stagger: 0  })
        tl.to('#navigation-logo__1', { y: '0%', duration: .7, stagger: 0  })
      }
    }
  }
}
</script>