<template>
  <div>
    <div class="flex mx-auto w-full gap-4">
      <div class="w-3/4">
        <div v-if="video">
          <video
            :src="video.videoUrl"
            controls
            class="w-full"
          />
          <h2>{{ video.title }}</h2>
          <p>{{ video.description }}</p>
        </div>
        <div v-else>
          <h2>Video not found</h2>
        </div>
      </div>
      <div class="w-1/4">
        <div
          class="flex w-full h-10 fixed place-items-center gap-2 backdrop-blur-xs top-15 z-3 overflow-x-auto scrollbar-hide"
        >
          <UButton
            color="neutral"
            variant="soft"
            size="md"
            class="font-bold whitespace-nowrap"
          >
            All
          </UButton>
          <UButton
            color="neutral"
            variant="soft"
            size="md"
            class="font-bold whitespace-nowrap"
          >
            Games
          </UButton>
          <UButton
            color="neutral"
            variant="soft"
            size="md"
            class="font-bold whitespace-nowrap"
          >
            Podcasts
          </UButton>
          <UButton
            color="neutral"
            variant="soft"
            size="md"
            class="font-bold whitespace-nowrap"
          >
            Musics
          </UButton>
          <UButton
            color="neutral"
            variant="soft"
            size="md"
            class="font-bold whitespace-nowrap"
          >
            Mix
          </UButton>
          <UButton
            color="neutral"
            variant="soft"
            size="md"
            class="font-bold whitespace-nowrap"
          >
            Computers
          </UButton>
          <UButton
            color="neutral"
            variant="soft"
            size="md"
            class="font-bold whitespace-nowrap"
          >
            History
          </UButton>
          <UButton
            color="neutral"
            variant="soft"
            size="md"
            class="font-bold whitespace-nowrap"
          >
            Car
          </UButton>
          <UButton
            color="neutral"
            variant="soft"
            size="md"
            class="font-bold whitespace-nowrap"
          >
            Musics
          </UButton>
        </div>
        <!-- Related videos -->
      </div>
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
