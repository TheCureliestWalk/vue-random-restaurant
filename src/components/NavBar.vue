<template>
        <aside class="flex flex-col sticky top-0 shadow-md items-center w-16 h-screen py-6 space-y-6 bg-white dark:bg-gray-900 dark:border-gray-700">
            <a href="#">
                <h2 class="w-auto h-6">GE</h2>
            </a>

            <a href="#" class="p-1.5 text-blue-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100">
                <HomeIcon class="w-6 h-6"/>
            </a>

            <a href="#" class="p-1.5 text-gray-500 transition-colors duration-200rounded-lg dark:text-blue-400 dark:bg-gray-800">
                <ArrowPathIcon class="w-6 h-6"/>
            </a>

        </aside>
</template>

<script setup>
import { ArrowPathIcon, HomeIcon } from '@heroicons/vue/24/outline'
</script>