<template>
    <div class="col-span-12 xl:w-[80vw] lg:w-[80vw] w-full overflow-scroll text-black dark:text-white bg-white dark:bg-black">
        <div class="rounded p-6 lg:p-8">
            <div class="relative">
                <div class="flex items-center gap-2 mb-12">
                    <Icon name="ri:bookmark-line" class="w-8 h-8" />
                    <h1 class="font-medium text-2xl text-black dark:text-white">Bookmarks</h1>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <StunningProgressiveGradientBorder 
                        v-for="bookmark in bookmarks" 
                        :key="bookmark.url"
                        :style="{
                            '--sui-gb-from-color': '#10B981',
                            '--sui-gb-via-color': '#3B82F6',
                            '--sui-gb-to-color': '#8B5CF6'
                        }"
                        class="p-1"
                    >
                        <div class="rounded p-6 lg:p-8 flex flex-col gap-2 relative">
                            <div class="absolute flex h-full w-full items-center justify-center left-0 top-0 z-0">
                                <GodRay />
                            </div>
                            <div class="relative z-10">
                                <div class="aspect-video mb-4 overflow-hidden rounded-md bg-gray-100 dark:bg-neutral-950 flex items-center justify-center">
                                    <Icon :name="bookmark.icon" class="w-16 h-16 text-gray-400 dark:text-neutral-200" />
                                </div>
                                <h3 class="text-lg font-medium group-hover:text-emerald-500 dark:group-hover:text-emerald-400">
                                    {{ bookmark.title }}
                                </h3>
                                <p class="text-sm text-secondary-foreground/80 dark:text-secondary-foreground/60 mb-2">
                                    {{ bookmark.description }}
                                </p>
                                <a :href="bookmark.url" target="_blank" rel="noopener noreferrer"
                                    class="text-sm text-emerald-500 dark:text-emerald-400 hover:underline">
                                    Visit Site →
                                </a>
                            </div>
                        </div>
                    </StunningProgressiveGradientBorder>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import GodRay from '@/components/stunning/GodRay.vue'

const bookmarks = [
    {
        title: "Vue.js Documentation",
        description: "The Progressive JavaScript Framework - An approachable, performant and versatile framework for building web user interfaces.",
        url: "https://vuejs.org",
        icon: "ri:vuejs-fill"
    },
    {
        title: "Nuxt.js",
        description: "The Intuitive Vue Framework - Build your next Vue.js application with confidence using Nuxt.",
        url: "https://nuxt.com",
        icon: "mdi:nuxt"
    },
    {
        title: "TailwindCSS",
        description: "Rapidly build modern websites without ever leaving your HTML - A utility-first CSS framework.",
        url: "https://tailwindcss.com",
        icon: "ri:css3-fill"
    },
    {
        title: "MDN Web Docs",
        description: "Resources for developers, by developers - The complete guide to web development.",
        url: "https://developer.mozilla.org",
        icon: "ri:firefox-fill"
    },
    {
        title: "GitHub",
        description: "Where the world builds software - GitHub is where over 100 million developers shape the future of software.",
        url: "https://github.com",
        icon: "ri:github-fill"
    },
    {
        title: "Stack Overflow",
        description: "Where Developers Learn, Share, & Build Careers - The largest, most trusted online community for developers.",
        url: "https://stackoverflow.com",
        icon: "ri:stack-overflow-fill"
    }
] as const
</script>