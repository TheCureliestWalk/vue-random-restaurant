<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import Modal from './components/Modal.vue'
</script>

<template>
  <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
  </nav> -->
  <div class="flex flex-row">
    <div class="p-8 flex flex-col mx-auto">
      <RouterView />
    </div>
    
  </div>
</template>



<style scoped>

/* nav {
  @apply p-2.5 flex gap-2 w-full bg-gradient-to-tr from-red-400 to-amber-300
}

nav a.router-link-exact-active {
  @apply text-gray-700 no-underline
}

nav a.router-link-exact-active:hover {
  @apply text-gray-700
}

nav a { 
  @apply pl-4 text-white hover:text-gray-700
}

nav a:first-of-type {
  border: 0;
} */

</style>
