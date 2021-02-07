<template>
  <nav class="relative z-40">
    <div class="container mx-auto px-6 flex justify-between items-center w-full">
      <div class="flex items-center transform hover:-translate-y-2 transition duration-75 py-5 cursor-pointer">
        <!-- <div class="bg-gradient-to-r from-indigo-500 to-purple-400 w-4 h-4 mr-5 rounded-md" /> -->
        <p class="m-0 text-lg font-medium text-gray-900">hello@en-zo</p>
      </div>
      <ul class="flex items-center py-5">
        <li class="mx-5">
          <a href="#realizations" class="font-normal text-gray-700 hover:text-indigo-500 transition duration-200">
            Realizations
          </a>
        </li>
        <li class="mx-5 font-normal text-gray-700 hover:text-indigo-500 transition duration-200 cursor-pointer" @click="resume">
          Resume
        </li>
        <li class="mx-5">
          <a href="#services" class="font-normal text-gray-700 hover:text-indigo-500 transition duration-200">
            Services
          </a>
        </li>
        <li class="ml-5">
          <a href="#contact" class="font-normal text-gray-700 hover:text-indigo-500 transition duration-200">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    resume () {
      window.open('images/en-zo-resume.pdf', '_blank')
    }
  }
}
</script>