<template>
  <div>
    <div class="container max-w-6xl w-full mx-auto px-6 pt-10 py-10 text-center relative pointer-events-none" style="z-index: 2">
      <div class="bg-gradient-to-r from-blue-200 to-purple-200 rounded-full w-32 h-32 flex items-center justify-center mx-auto pointer-events-auto" @mouseover="hover = true" @mouseleave="hover = false">
        <img width="64" height="64px" :src="require(`~/assets/images/avatar/${random}.svg`)" class="w-16" alt="Memoji Enzo">
      </div>
      <p class="text-2xl font-medium mt-10 mb-5">Hi, I'm Enzo&nbsp;👋</p>
      <!-- <p class="text-medium text-gray-600">Site under construction...</p> -->
      <div id="heading" class="inline-block">
        <h1 class="text-4xl md:text-6xl font-bold md:leading-tight">
          <span id="heading__dev" class="cut__text">
            Front-End
            <span class="bg-clip-text	bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 text-fill-transparent">Developer</span>
          </span>
        </h1>
         <h1 class="text-4xl md:text-6xl font-bold md:leading-tight">
          <span id="heading__design" class="cut__text">
            and
            <span class="bg-clip-text	bg-gradient-to-r from-yellow-300 via-red-400 to-yellow-300 text-fill-transparent">UI Designer</span>
          </span>
        </h1>
      </div>
      <div class="flex items-center justify-center mt-8 pointer-events-auto">
        <a href="https://github.com/enzostvs" target="_blank" class="w-10 h-10 flex items-center justify-center roboto transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl rounded-full bg-gray-900 hover:bg-gray-800 text-white text-base font-medium mr-4 tracking-wide">
          <i class="fab fa-github text-lg" />
        </a>
        <a href="https://www.linkedin.com/in/e-esteves/" target="_blank" class="w-10 h-10 flex items-center justify-center roboto transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl rounded-full bg-blue-500 hover:bg-blue-400 text-white text-base font-medium mr-4 tracking-wide">
          <i class="fab fa-linkedin text-lg" />
        </a>
        <a href="https://discord.com/users/452475691410128906" target="_blank" class="w-10 h-10 flex items-center justify-center roboto transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl rounded-full bg-indigo-500 hover:bg-indigo-400 text-white text-base font-medium mr-4 tracking-wide">
          <i class="fab fa-discord text-lg" />
        </a>
      </div>
    </div>
    <canvas id="canvas3d" class="hidden sm:block absolute top-0 left-0 mx-auto mt-10" style="z-index: 1" />
    <div class="mt-0 md:mt-5 mb-2 md:mb-6 px-6 py-6 md:py-10 text-center container mx-auto relative z-10">
      <h2 class="text-3xl md:text-4xl mb-1 md:mb-2 font-semibold tracking-widest">
        Work experience
      </h2>
      <p class="text-gray-500 text-lg">
        All my professional experience in development w/ the used stack.
      </p>
    </div>
    <div class="work__at">
      <div class="container mx-auto px-6 max-w-6xl w-full">
        <div class="grid md:grid-rows-1 gap-10 grid-cols-1 md:grid-cols-2 mb-16">
          <div v-for="(experience, e) in experiences" :key="e" class="bg-white rounded-2xl py-7 card__custom md:flex md:flex-col justify-between">
            <div>
              <header class="flex-col md:flex-row md:text-left text-center flex items-center px-8 mb-4">
                <div :class="`${experience.company === 'Uptoo' ? 'bg-blue-600' : 'bg-red-600'} rounded-2xl p-2 shadow-lg mb-2 md:mb-0 md:mr-5`">
                  <img :src="require(`~/assets/images/${experience.company.toLowerCase()}.svg`)" alt="logo company" :class="`${experience.company === 'Uptoo' ? 'transform translate-y-0.5' : ''} w-9 h-9`">
                </div>
                <div>
                  <p class="text-base text-gray-500 leading-6">{{ experience.date }}</p>
                  <p class="text-2xl font-semibold">{{ experience.job }}</p>
                </div>
              </header>
              <main class="pb-6 px-8">
                <p class="text-base text-gray-500 font-normal leading-7 text-center md:text-left md:whitespace-pre tracking-wide" v-html="experience.description" />
              </main>
            </div>
            <footer class="md:flex-row flex-col border-t border-gray-200 px-8 flex items-center justify-between pt-4 md:pt-6">
              <p class="font-medium text-lg text-gray-700 mb-3 md:mb-0">
                Used stack
              </p>
              <div class="flex items-center justify-between w-full md:w-auto">
                <img v-for="(stack, s) in experience.stacks" :key="s" :src="require(`~/assets/images/stacks/${stack}.svg`)" :alt="stack" class="ml-0 md:ml-5 w-8 h-8">
              </div>
            </footer>
          </div>
        </div>
        <div class="text-center">
          <p class="text-4xl mb-2 font-semibold tracking-widest text-white">
            And soon...
          </p>
          <p class="text-white text-lg opacity-70">
            Maybe soon with you&nbsp;? I am open to all types of projects.
          </p>
        </div>
      </div>
    </div>
    <div id="tchat" class="bg-indigo-500 pt-9 md:pt-14">
      <div class="container mx-auto px-6 max-w-7xl w-full relative z-10 flex items-end justify-between">
        <img id="man" class="hidden md:block" src="~/assets/images/tchat/character_man.svg" alt="">
        <div class="px-0 md:px-8 pb-12 md:pb-6 w-full h-full self-start">
          <div class="message float bg-white shadow-xl rounded-xl bg-gradient-to-b from-white to-indigo-100 relative pt-4 pb-5 pr-6 pl-9 w-full md:w-10/12">
            <div class="absolute w-10 h-10 bg-white border-4 p-1 border-indigo-500 -top-3 rounded-full -left-3">
              <img class="w-full" src="~/assets/images/tchat/head_character_man.svg" alt="">
            </div>
            <p class="font-medium text-gray-700">@Enzo</p>
            <p class="text-sm tracking-wider text-gray-500">Hello, I can design application interfaces for you <img class="w-4 inline-block" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Sketch_Logo.svg/1133px-Sketch_Logo.svg.png" alt="">, and even develop them behind by speaking Javascript <img class="w-4 inline-block" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt=""></p>
          </div>
          <div class="message float delay-1 bg-white shadow-xl text-right rounded-xl bg-gradient-to-b from-white to-indigo-100 relative pt-4 pb-5 pl-6 pr-9 w-full md:w-10/12 mt-6 float-right">
            <div class="absolute w-10 h-10 bg-white border-4 border-indigo-500 -top-3 rounded-full -right-3">
              <img class="w-full" src="~/assets/images/tchat/head_character_woman.svg" alt="">
            </div>
            <p class="font-medium text-gray-700">@Chloé</p>
            <p class="text-sm tracking-wider text-gray-500">Great&nbsp;! We are looking for someone with a front-end profile and strong UI appetence&nbsp;!</p>
          </div>
        </div>
        <img id="woman" class="hidden md:block" src="~/assets/images/tchat/character_woman.svg" alt="">
      </div>
    </div>
    <div class="mt-10 mb-2 px-6 py-6 md:py-10 text-center container mx-auto relative z-10">
      <h2 class="text-3xl md:text-4xl mb-1 md:mb-2 font-semibold tracking-widest">
        Personal project
      </h2>
      <p class="text-gray-500 text-lg">
        In my free time I take part in projects (website, library & others).
      </p>
      <div class="mt-12 text-center">
        <img class="max-w-2xl w-full mx-auto" src="~/assets/images/wip.png" alt="Under construction">
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  data () {
    return {
      random: Math.floor(Math.random() * 4) + 1,
      hover: false,
      experiences: [{
        company: 'Uptoo',
        date: 'December 2016 to Now',
        job: 'Front End Developer',
        description: 'Creation of emails templates<br />Design of user interfaces, development of client<br/>candidates and internal applications',
        stacks: ['nuxt', 'nodejs', 'react', 'sass', 'git']
      }, {
        company: 'Simplon',
        date: 'From June 2016 to Dec. 2016',
        job: 'Lead Formator',
        description: 'Discovery of web integration and vanilla javascript<br />Use and creation of wordpress themes (showcase)',
        stacks: ['css3', 'bootstrap', 'git', 'js', 'wordpress']
      }]
    }
  },
  watch: {
    hover: 'resetRandom'
  },
  mounted () {
    this.startAnimations()
    const man = this.$scrollmagic.scene({
      triggerElement: '#tchat',
      triggerHook: 1,
      duration: '80%'
    })
    .setTween('#man', { 
      css: { 
        opacity: 1, 
        transform: 'translateX(0)'
      }
    })
    const woman = this.$scrollmagic.scene({
      triggerElement: '#tchat',
      triggerHook: 1,
      duration: '80%',
      delay: 3
    }).setTween('#woman', { 
      css: { 
        opacity: 1, 
        transform: 'translateX(0)'
      }
    })
    this.$scrollmagic.addScene(man)
    this.$scrollmagic.addScene(woman)
  },
  methods: {
    startAnimations () {
      const tl = gsap.timeline({ defaults: { ease: 'SlowMo.easeOut' } })
      tl.to('#heading__dev', { y: '0%', duration: .7, stagger: .2 })
      tl.to('#heading__design', { y: '0%', duration: .7, stagger: .4 })
      tl.to('#canvas3d', { opacity: 1, duration: .7, stagger: .6 })
      // gsap.to('#title', { duration: 1, color: 'red' })
    },
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
