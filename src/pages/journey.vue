<template>
    <div class="col-span-12 w-[80vw] overflow-scroll text-black dark:text-white bg-white dark:bg-black">
        <div class="rounded p-6 lg:p-8">
            <div class="relative p-5">
                <div class="absolute flex h-full w-full items-center justify-center left-0 top-0">
                    <GodRay />
                </div>
                <div
                    class="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-emerald-500/50 via-purple-500/50 to-blue-500/50 dark:from-emerald-400/30 dark:via-purple-400/30 dark:to-blue-400/30">
                </div>
                <div class="flex items-center gap-2 mb-12">
                    <Icon name="ri:time-line" class="w-8 h-8" />
                    <h1 class="font-medium text-2xl text-black dark:text-white z-10">My Journey</h1>
                </div>
                <div class="flex flex-col gap-16">
                    <div v-for="(event, index) in journeyEvents" :key="event.year"
                        class="relative grid grid-cols-[1fr,auto,1fr] items-center gap-4 md:gap-8"
                        :class="{ 'opacity-60 hover:opacity-100 transition-opacity': !event.highlight }">

                        <div :class="[
                            'space-y-2 transition-all duration-300 group',
                            index % 2 === 0 ? 'text-right' : 'md:col-start-3'
                        ]">
                            <div class="inline-flex items-center gap-2"
                                :class="index % 2 === 0 ? 'flex-row-reverse' : ''">
                                <Icon :name="event.icon"
                                    class="h-5 w-5 text-secondary-foreground/70 dark:text-secondary-foreground/50 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors" />
                                <span class="text-lg font-medium text-emerald-500 dark:text-emerald-400">
                                    {{ event.year }}
                                </span>
                            </div>
                            <h3
                                class="text-lg font-medium group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                                {{ event.title }}
                            </h3>
                            <p
                                class="text-secondary-foreground/80 dark:text-secondary-foreground/60 group-hover:text-secondary-foreground dark:group-hover:text-secondary-foreground/80 transition-colors">
                                {{ event.description }}
                            </p>
                        </div>

                        <div class="relative z-10 flex h-6 w-6 items-center justify-center">
                            <div
                                class="h-3 w-3 rounded-full border-2 border-emerald-500 bg-background dark:border-emerald-400 
                                      group-hover:scale-150 group-hover:border-emerald-400 dark:group-hover:border-emerald-300 transition-all">
                            </div>
                            <div
                                class="absolute h-6 w-6 rounded-full border-2 border-emerald-500/20 dark:border-emerald-400/20 
                                      group-hover:border-emerald-500/40 dark:group-hover:border-emerald-400/40 transition-all">
                            </div>
                        </div>

                        <div :class="[
                            'space-y-2',
                            index % 2 === 0 ? 'md:col-start-3' : ''
                        ]"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import GodRay from '@/components/stunning/GodRay.vue'

const journeyEvents = [
    {
        year: 2005,
        title: "The Beginning",
        description: "First steps into the creative world. Discovered my passion for visual storytelling through a vintage camera found in my grandfather's attic.",
        icon: "ri:camera-line",
        highlight: false
    },
    {
        year: 2008,
        title: "School of Arts",
        description: "Enrolled in the School of Visual Arts. Experimented with different mediums and found my unique style.",
        icon: "ri:palette-line",
        highlight: false
    },
    {
        year: 2012,
        title: "Urban Explorer",
        description: "Moved to the heart of New York City. The urban landscape became my canvas, capturing stories of city life.",
        icon: "ri:building-line",
        highlight: false
    },
    {
        year: 2015,
        title: "Global Perspectives",
        description: "Embarked on a world tour, documenting diverse cultures and traditions across 20 countries.",
        icon: "ri:earth-line",
        highlight: false
    },
    {
        year: 2018,
        title: "Studio Foundation",
        description: "Established my first professional studio, blending traditional techniques with modern innovation.",
        icon: "ri:store-2-line",
        highlight: false
    },
    {
        year: 2020,
        title: "Digital Revolution",
        description: "Embraced the digital transformation. Pioneered virtual exhibitions and remote collaborative projects.",
        icon: "ri:computer-line",
        highlight: false
    },
    {
        year: 2022,
        title: "Published Works",
        description: "Released my first collection of works, 'Through The Lens of Time', showcasing a decade of visual storytelling.",
        icon: "ri:book-open-line",
        highlight: false
    },
    {
        year: 2024,
        title: "Future Forward",
        description: "Exploring the intersection of AI and traditional art. Leading workshops and mentoring the next generation.",
        icon: "ri:rocket-line",
        highlight: false
    }
] as const

type JourneyEvent = {
    year: number
    title: string
    description: string
    icon: string
    highlight: boolean
}
</script>