<script setup lang="ts">
const props = defineProps<{
    socials: { name: string; icon: string; url: string }[]
}>()
</script>

<template>
    <div class="mt-16 sm:mt-20 lg:mt-28 w-full px-4 sm:px-8 pb-10 lg:pb-20">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-12 lg:gap-8">
            <StunningProgressiveGradientBorder class="col-span-12 sm:col-span-8 border-gray-400 border">
                <div class="rounded p-4 sm:p-6 lg:p-8 flex flex-col gap-2">
                    <Icon name="ri:user-heart-line" class="w-6 h-6 sm:w-8 sm:h-8" />
                    <h1 class="font-medium text-xl sm:text-2xl">About Me</h1>
                    <p class="text-secondary-foreground text-sm sm:text-base">
                        A passionate storyteller and creative soul, I find joy in exploring the world around me and
                        sharing
                        those experiences with others. Whether I'm capturing moments through my camera lens or crafting
                        new
                        recipes in my kitchen, I believe in living life with curiosity and authenticity.
                    </p>
                </div>
            </StunningProgressiveGradientBorder>
            <StunningProgressiveGradientBorder class="col-span-12 sm:col-span-4 border-gray-400 border">
                <div class="rounded p-4 sm:p-6 lg:p-8 flex flex-col gap-2">
                    <Icon name="ri:heart-line" class="w-6 h-6 sm:w-8 sm:h-8" />
                    <h1 class="font-medium text-xl sm:text-2xl">Interests</h1>
                    <div class="flex flex-wrap gap-2">
                        <span v-for="interest in ['Photography', 'Travel', 'Cooking', 'Reading', 'Nature']"
                            :key="interest" class="rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-500">
                            {{ interest }}
                        </span>
                    </div>
                </div>
            </StunningProgressiveGradientBorder>
            <StunningProgressiveGradientBorder class="col-span-12 sm:col-span-4 border-gray-400 border" :style="{
                '--sui-gb-from-color': '#5f00ff',
                '--sui-gb-via-color': '#8250df',
                '--sui-gb-to-color': '#f4e162'
            }">
                <div class="rounded p-4 sm:p-6 lg:p-8 flex flex-col gap-2">
                    <Icon name="ri:contacts-line" class="w-6 h-6 sm:w-8 sm:h-8" />
                    <h1 class="font-medium text-xl sm:text-2xl">Let's Connect</h1>
                    <div class="flex flex-wrap gap-2 sm:gap-4">
                        <a v-for="social in socials" :key="social.name" :href="social.url"
                            class="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1 text-sm sm:px-4 sm:py-2 transition-colors hover:bg-white/10">
                            <Icon :name="social.icon" class="w-4 h-4" />
                            {{ social.name }}
                        </a>
                    </div>
                </div>
            </StunningProgressiveGradientBorder>
            <StunningProgressiveGradientBorder class="col-span-12 sm:col-span-8 border-gray-400 border" :style="{
                '--sui-gb-from-color': '#4fa',
                '--sui-gb-via-color': '#4af',
                '--sui-gb-to-color': '#f4a'
            }">
                <div class="rounded p-4 sm:p-6 lg:p-8 flex flex-col gap-2">
                    <Icon name="ri:map-pin-line" class="w-6 h-6 sm:w-8 sm:h-8" />
                    <h1 class="font-medium text-xl sm:text-2xl">My Journey</h1>
                    <p class="text-secondary-foreground text-sm sm:text-base">
                        Born and raised in the scenic Pacific Northwest, my love for nature and adventure has taken me
                        across
                        three continents. Each place I've visited has shaped who I am today and fueled my passion for
                        storytelling
                        through various creative mediums.
                    </p>
                </div>
            </StunningProgressiveGradientBorder>
        </div>
    </div>
</template>
