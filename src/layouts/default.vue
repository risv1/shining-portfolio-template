<template>
    <main class="w-screen h-screen flex flex-row">
        <div class="fixed top-5 right-5 z-10 bg-white dark:bg-black w-fit rounded-full">
            <NavTheme />
        </div>
        <NavSidebar />
        <slot />
    </main>
</template>