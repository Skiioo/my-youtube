<template>
  <div>
    <h1>Video : {{ $route.params.id }}</h1>

    <div v-if="video">
      <h2>{{ video.title }}</h2>
      <p>{{ video.description }}</p>
    </div>
    <div v-else>
      <h2>Video not found</h2>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()

const { data: videoData } = await useFetch('/data/video.json', {
  lazy: true
})

const video = computed(() => {
  return videoData.value?.videos?.find(v => v.id === route.params.id)
})

useSeoMeta({
  title: () => video.value?.title
})

console.log(video.value?.title)
</script>
