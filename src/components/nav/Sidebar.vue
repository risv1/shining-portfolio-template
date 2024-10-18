<script setup lang="ts">
import { Icon } from '@iconify/vue'

const route = useRoute()

const navigation = [
    { name: 'Home', path: '/', icon: 'lucide:home' },
    { name: 'Journey', path: '/journey', icon: 'lucide:map' },
    { name: 'Tech Stack', path: '/tech-stack', icon: 'lucide:layers' },
    { name: 'Workspace', path: '/workspace', icon: 'lucide:laptop' },
    { name: 'Bookmarks', path: '/bookmarks', icon: 'lucide:bookmark' },
]
const isActive = (path: string) => route.path === path
</script>

<template>
    <aside
        class="flex h-screen w-[20vw] flex-col border-r border-gray-200 bg-white shadow-lg transition-colors dark:border-neutral-900 dark:bg-black">
        <div class="relative flex flex-col items-center px-6 py-8 bg-gray-50/50 dark:bg-zinc-800/50">
            <div class="relative">
                <img src="/favicon.ico" alt="Profile"
                    class="h-24 w-24 rounded-full border-4 border-white object-cover shadow-lg ring-4 ring-gray-100/50 dark:border-zinc-700 dark:ring-zinc-800/50" />
                <div
                    class="absolute bottom-1 right-1 h-4 w-4 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-neutral-800">
                </div>
            </div>
            <h2 class="mt-6 text-xl font-bold text-gray-900 dark:text-zinc-100">John Doe</h2>
            <p class="text-sm font-medium text-gray-600 dark:text-zinc-400">Full Stack Developer</p>
            <div
                class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-zinc-700">
            </div>
        </div>
        <nav class="flex-1 space-y-1 p-4">
            <NuxtLink v-for="item in navigation" :key="item.name" :to="item.path" :class="[
                'group flex items-center rounded-lg px-4 py-3 text-sm font-medium transition-all duration-150',
                isActive(item.path)
                    ? 'bg-gray-100 text-gray-900 shadow-sm dark:bg-zinc-800/80 dark:text-zinc-100'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-100'
            ]">
                <Icon :icon="item.icon" :class="[
                    'mr-3 h-5 w-5 transition-transform duration-200',
                    isActive(item.path)
                        ? 'text-gray-900 dark:text-zinc-100'
                        : 'text-gray-500 group-hover:text-gray-900 dark:text-zinc-500 dark:group-hover:text-zinc-300',
                    'group-hover:scale-110'
                ]" />
                {{ item.name }}
            </NuxtLink>
        </nav>
        <div class="border-t border-gray-200 bg-gray-50/50 p-6 dark:border-zinc-800/50 dark:bg-zinc-900/50">
            <div class="flex items-center justify-between">
                <p class="text-sm text-gray-600 dark:text-zinc-500">
                    © 2024 John Doe
                </p>
                <div class="flex flex-row gap-5">
                    <a href="#"
                        class="text-gray-500 transition-colors hover:text-gray-900 dark:text-zinc-500 dark:hover:text-zinc-300">
                        <Icon icon="lucide:github" class="h-5 w-5" />
                    </a>
                    <a href="#"
                        class="text-gray-500 transition-colors hover:text-gray-900 dark:text-zinc-500 dark:hover:text-zinc-300">
                        <Icon icon="lucide:linkedin" class="h-5 w-5" />
                    </a>
                </div>
            </div>
        </div>
    </aside>
</template>