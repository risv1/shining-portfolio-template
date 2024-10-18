<template>
    <div class="overflow-scroll min-h-screen w-[80vw] bg-white px-6 py-16 dark:bg-black">
      <div class="mx-auto max-w-7xl">
        <h1 class="bg-gradient-to-r from-black dark:from-white to-emerald-500 dark:to-emerald-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
          Tech Stack
        </h1>
        <p class="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Tools and technologies I use to bring ideas to life
        </p>
   
        <LazyStackCards :categories="categories" />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
type Skill = {
  name: string;
  icon: string;
  level: string;
};

type Category = {
  title: string;
  description: string;
  icon: string;
  skills: Skill[];
};

  const categories = [
    {
      title: "Development",
      description: "Core technologies for web applications",
      icon: "ri:code-line",
      skills: [
        { name: "Vue.js", icon: "ri:vuejs-fill", level: "Advanced" },
        { name: "React", icon: "ri:reactjs-fill", level: "Advanced" },
        { name: "Node.js", icon: "ri:nodejs-fill", level: "Advanced" },
        { name: "TypeScript", icon: "lineicons:typescript", level: "Advanced" },
        { name: "Nuxt", icon: "mdi:nuxt", level: "Advanced" },
        { name: "Next.js", icon: "ri:nextjs-fill", level: "Intermediate" }
      ]
    },
    {
      title: "AI & Machine Learning",
      description: "Tools and frameworks for AI development",
      icon: "ri:brain-line",
      skills: [
        { name: "TensorFlow", icon: "simple-icons:tensorflow", level: "Intermediate" },
        { name: "PyTorch", icon: "simple-icons:pytorch", level: "Intermediate" },
        { name: "Scikit-learn", icon: "ri:database-2-line", level: "Advanced" },
        { name: "OpenAI", icon: "ri:openai-fill", level: "Advanced" }
      ]
    },
    {
      title: "Cloud & DevOps",
      description: "Cloud infrastructure and deployment",
      icon: "ri:cloud-line",
      skills: [
        { name: "Docker", icon: "mdi:docker", level: "Advanced" },
        { name: "AWS", icon: "mdi:aws", level: "Advanced" },
        { name: "GitHub", icon: "ri:github-fill", level: "Advanced" },
        { name: "Kubernetes", icon: "carbon:kubernetes", level: "Intermediate" }
      ]
    },
    {
      title: "Databases",
      description: "Database systems and query languages",
      icon: "ri:database-2-line",
      skills: [
        { name: "PostgreSQL", icon: "ri:database-fill", level: "Advanced" },
        { name: "MongoDB", icon: "ri:database-fill", level: "Advanced" },
        { name: "Redis", icon: "devicon-plain:redis", level: "Intermediate" },
        { name: "MySQL", icon: "ri:database-fill", level: "Advanced" }
      ]
    },
    {
      title: "Languages",
      description: "Programming and scripting languages",
      icon: "ri:terminal-box-line",
      skills: [
        { name: "JavaScript", icon: "ri:javascript-fill", level: "Advanced" },
        { name: "Python", icon: "akar-icons:python-fill", level: "Advanced" },
        { name: "Go", icon: "fa6-brands:golang", level: "Intermediate" },
        { name: "Rust", icon: "simple-icons:rust", level: "Beginner" }
      ]
    }
  ]
  
  </script>