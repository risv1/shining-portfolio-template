<script setup lang="ts">
import GodRay from '@/components/stunning/GodRay.vue'

const props = defineProps<{
    categories: {
        title: string;
        description: string;
        icon: string;
        skills: {
            name: string;
            icon: string;
            level: string;
        }[];
    }[];
}>();
</script>

<template>
    <div class="mt-16 space-y-16">
        <div v-for="category in categories" :key="category.title" class="space-y-6">
            <div>
                <div class="flex items-center gap-3 relative">
                    <Icon :name="category.icon" class="h-6 w-6 text-emerald-500 dark:text-emerald-400" />
                    <h2 class="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                        {{ category.title }}
                    </h2>
                </div>
                <p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{{ category.description }}</p>
            </div>

            <div class="flex flex-wrap gap-4">
                <div v-for="skill in category.skills" :key="skill.name"
                    class="group relative w-44 overflow-hidden rounded-lg border border-zinc-200 bg-white/80 p-3 transition-all duration-300 hover:border-zinc-300 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-800/50 dark:hover:border-zinc-700">

                    <div class="absolute flex h-full w-full items-center justify-center left-0 top-0">
                        <div class="relative h-full w-full">
                            <GodRay />
                        </div>
                    </div>

                    <div class="relative z-10 flex items-center gap-3">
                        <div
                            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-zinc-100/90 backdrop-blur-sm transition-colors duration-300 group-hover:bg-emerald-500/10 dark:bg-zinc-800/90 dark:group-hover:bg-emerald-400/10">
                            <Icon :name="skill.icon"
                                class="h-5 w-5 text-zinc-600 transition-colors duration-300 group-hover:text-emerald-600 dark:text-zinc-400 dark:group-hover:text-emerald-400" />
                        </div>

                        <div class="min-w-0 flex-1">
                            <h3
                                class="truncate text-sm font-medium text-zinc-800 transition-colors duration-300 group-hover:text-emerald-600 dark:text-zinc-200 dark:group-hover:text-emerald-400">
                                {{ skill.name }}
                            </h3>
                            <span
                                class="mt-1 inline-block rounded-full bg-zinc-100/90 backdrop-blur-sm px-2 py-0.5 text-xs text-zinc-600 transition-colors duration-300 group-hover:bg-emerald-100 group-hover:text-emerald-700 dark:bg-zinc-800/90 dark:text-zinc-400 dark:group-hover:bg-emerald-500/20 dark:group-hover:text-emerald-300">
                                {{ skill.level }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>