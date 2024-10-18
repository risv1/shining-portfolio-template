<script setup lang="ts">
const isSidebarOpen = ref(false)
</script>


<template>
    <main class="w-screen h-screen flex flex-row">
        <div class="fixed top-5 right-5 z-10 bg-white dark:bg-black w-fit rounded-full">
            <NavTheme />
        </div>
        <button 
            @click="isSidebarOpen = !isSidebarOpen"
            class="lg:hidden fixed top-5 left-5 z-20 p-2 rounded-lg bg-white dark:bg-black shadow-lg"
        >
            <Icon 
                :name="isSidebarOpen ? 'lucide:x' : 'lucide:menu'" 
                class="h-6 w-6 text-gray-900 dark:text-white"
            />
        </button>
        <NavSidebar :is-open="isSidebarOpen" @close="isSidebarOpen = false" />
        <slot />
    </main>
</template>