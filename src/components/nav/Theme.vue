<script setup lang="ts">
import { Icon } from '@iconify/vue'

type Theme = "light" | "dark"

const route = useRoute()

const colorMode = useColorMode()

const toggleTheme = () => {
    colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light'
}

</script>

<template>
    <button @click="toggleTheme"
        class="flex items-center rounded-full p-2 text-gray-600 hover:bg-gray-100 dark:text-zinc-400 dark:hover:bg-zinc-800">
        <Icon icon="lucide:sun" class="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Icon icon="lucide:moon"
            class="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
</template>