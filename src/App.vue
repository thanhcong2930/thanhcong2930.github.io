<template>
  <div class="m-auto shadow-md md:shadow-lg rounded-lg bg-white dark:bg-gray-500 relative w-96 overflow-hidden">
    <c-header />
    <div class="p-4 md:p-5">
      <c-content />
    </div>
    <div class="p-4 md:p-5 bg-gray-100 dark:bg-gray-600 text-center">
      <c-footer />
    </div>
    <div class="absolute top-0 left-0 pt-2 md:pt-3 px-3 md:px-4 w-full flex">
      <a
        v-if="isDarkMode"
        href="javascript:void(0)"
        class="text-white ml-auto opacity-75 hover:opacity-100 focus:opacity-100"
        title="Light"
        @click.prevent="toggleMode"
      >
        <sun-fill-icon class="inline h-5 w-auto fill-current" />
      </a>
      <a
        v-else
        href="javascript:void(0)"
        class="text-white mr-auto opacity-75 hover:opacity-100 focus:opacity-100"
        title="Dark"
        @click.prevent="toggleMode"
      >
        <moon-fill-icon class="inline h-4 w-auto fill-current" />
      </a>
    </div>
  </div>
</template>

<script setup>
import CHeader from './components/CHeader.vue'
import CFooter from './components/CFooter.vue'
import CContent from './components/CContent.vue'

import SunFillIcon from './assets/sun-fill.svg'
import MoonFillIcon from './assets/moon-fill.svg'

import { onMounted, ref } from 'vue'

let isDarkMode = ref(false)

onMounted (() => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    isDarkMode.value = true
  } else {
    document.documentElement.classList.remove('dark')
  }
})

const toggleMode = () => {
  if (localStorage.theme === 'dark') {
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
  } else {
    localStorage.theme = 'dark'
    document.documentElement.classList.add('dark')
  }

  isDarkMode.value = !isDarkMode.value
}

</script>
