<template>
  <div class="m-auto shadow-md md:shadow-lg rounded-lg bg-white relative w-96 overflow-hidden">
    <c-header />
    <div class="p-4 md:p-5">
      <c-content />
    </div>
    <div class="p-4 md:p-5 bg-gray-100 text-center">
      <c-footer />
    </div>
  </div>
</template>

<script setup>
import CHeader from './components/CHeader.vue'
import CFooter from './components/CFooter.vue'
import CContent from './components/CContent.vue'
</script>
