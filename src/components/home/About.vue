<script setup lang="ts">
const props = defineProps<{
    socials: { name: string; icon: string; url: string }[]
}>()
</script>

<template>
    <div class="mt-28 w-full px-8 pb-20">
        <div class="grid grid-cols-12 gap-4">
            <StunningProgressiveGradientBorder class="col-span-12 border-gray-400 border lg:col-span-8">
                <div class="rounded p-6 lg:p-8 flex flex-col gap-2">
                    <Icon name="ri:user-heart-line" class="w-8 h-8" />
                    <h1 class="font-medium text-2xl">About Me</h1>
                    <p class="text-secondary-foreground">
                        A passionate storyteller and creative soul, I find joy in exploring the world around me and sharing 
                        those experiences with others. Whether I'm capturing moments through my camera lens or crafting new 
                        recipes in my kitchen, I believe in living life with curiosity and authenticity.
                    </p>
                </div>
            </StunningProgressiveGradientBorder>

            <StunningProgressiveGradientBorder class="col-span-12 border-gray-400 border lg:col-span-4">
                <div class="rounded p-6 lg:p-8 flex flex-col gap-2">
                    <Icon name="ri:heart-line" class="w-8 h-8" />
                    <h1 class="font-medium text-2xl">Interests</h1>
                    <div class="flex flex-wrap gap-2">
                        <span v-for="interest in ['Photography', 'Travel', 'Cooking', 'Reading', 'Nature']" :key="interest"
                            class="rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-500">
                            {{ interest }}
                        </span>
                    </div>
                </div>
            </StunningProgressiveGradientBorder>

            <StunningProgressiveGradientBorder class="col-span-12 border-gray-400 border lg:col-span-4" :style="{
                '--sui-gb-from-color': '#5f00ff',
                '--sui-gb-via-color': '#8250df',
                '--sui-gb-to-color': '#f4e162'
            }">
                <div class="rounded p-6 lg:p-8 flex flex-col gap-2">
                    <Icon name="ri:map-pin-line" class="w-8 h-8" />
                    <h1 class="font-medium text-2xl">My Journey</h1>
                    <div class="flex flex-col gap-3">
                        <p class="text-sm text-secondary-foreground">
                            Born and raised in the scenic Pacific Northwest, my love for nature and adventure has taken me 
                            across three continents. Each place I've visited has shaped who I am today and fueled my 
                            passion for storytelling through various creative mediums.
                        </p>
                    </div>
                </div>
            </StunningProgressiveGradientBorder>

            <StunningProgressiveGradientBorder class="col-span-12 border-gray-400 border lg:col-span-8" :style="{
                '--sui-gb-from-color': '#4fa',
                '--sui-gb-via-color': '#4af',
                '--sui-gb-to-color': '#f4a'
            }">
                <div class="rounded p-6 lg:p-8 flex flex-col gap-2">
                    <Icon name="ri:contacts-line" class="w-8 h-8" />
                    <h1 class="font-medium text-2xl">Let's Connect</h1>
                    <div class="flex flex-wrap gap-4">
                        <a v-for="social in socials" :key="social.name" :href="social.url"
                            class="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-sm transition-colors hover:bg-white/10">
                            <Icon :name="social.icon" class="w-4 h-4" />
                            {{ social.name }}
                        </a>
                    </div>
                </div>
            </StunningProgressiveGradientBorder>
        </div>
    </div>
</template>