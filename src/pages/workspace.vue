<script setup lang="ts">
import GodRay from '@/components/stunning/GodRay.vue'

</script>

<template>
    <Head>
        <Title>Portfolio | Workspace</Title>
    </Head>
    <main
        class="col-span-12 xl:w-[80vw] lg:w-[80vw] w-full overflow-scroll text-black dark:text-white bg-white dark:bg-black">
        <div class="rounded p-6 lg:p-8">
            <div class="relative p-5">
                <div class="absolute flex h-full w-full items-center justify-center left-0 top-0">
                    <GodRay />
                </div>
                <div class="flex items-center gap-2 mb-12 z-10">
                    <Icon name="ri:workspace-line" class="w-8 h-8" />
                    <h1 class="font-medium text-2xl text-black dark:text-white z-10">Workspace</h1>
                </div>

                <div class="flex justify-center items-center min-h-[400px]">
                    <div class="text-center space-y-4 z-10">
                        <Icon name="ri:inbox-line" class="w-16 h-16 mx-auto text-gray-400" />
                        <h2 class="text-xl font-medium ">Nothing Here Yet</h2>
                        <p class="text-secondary-foreground/80 dark:text-secondary-foreground/60">
                            Start adding content to your workspace to see it appear here.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>