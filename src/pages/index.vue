<script setup lang="ts">

const projects = [
  {
    name: 'E-commerce Platform',
    description: 'Full-stack solution with Vue 3 and Node.js'
  },
  {
    name: 'Analytics Dashboard',
    description: 'Real-time data visualization platform'
  }
]

const socials = [
  { name: 'GitHub', icon: 'ri:github-fill', url: '#' },
  { name: 'LinkedIn', icon: 'ri:linkedin-fill', url: '#' },
  { name: 'Twitter', icon: 'ri:twitter-fill', url: '#' },
  { name: 'Email', icon: 'ri:mail-fill', url: '#' }
]
</script>

<template>
  <Head>
    <Title>Portfolio | Home</Title>
  </Head>
  <main class="overflow-scroll xl:w-[80vw] lg:w-[80vw] w-full bg-white dark:bg-black text-black dark:text-white">
    <HomeHero />
    <HomeAbout :projects="projects" :socials="socials" />
  </main>
</template>