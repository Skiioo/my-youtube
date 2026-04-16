<template>
  <div class="min-h-screen pr-2 pb-2 overflow-y-auto pt-4">
    <div class="flex w-full justify-between h-10 top-15 items-center">
      <span class="text-xl font-bold">Latest</span>
      <NuxtLink to="/allSubscription">
        <UButton
          color="neutral"
          variant="soft"
          size="md"
          class="font-bold rounded-full px-4 py-2"
        >
          All subscriptions
        </UButton>
      </NuxtLink>
    </div>

    <div
      v-if="enrichedVideos?.length"
      class="mt-15 mb-15"
    >
      <div class="grid grid-cols-3">
        <NuxtLink
          v-for="video in enrichedVideos"
          :key="video.id"
          :to="`/${video.id}`"
          class="relative p-2 w-full rounded-2xl transition-all duration-300 ease-out hover:bg-gray-200 dark:hover:bg-[#2A2A2E] hover:shadow-lg cursor-pointer"
        >
          <!-- Conteneur image qui prend toute la place disponible -->
          <div
            class="relative w-full rounded-xl"
            :style="{
              height: sidebarCollapsed ? '400px' : '300px'
            }"
          >
            <img
              :src="video.thumbnail"
              :alt="video.title"
              class="absolute inset-0 w-full h-full object-cover rounded-xl"
            >
          </div>

          <!-- Texte et nom du channel -->
          <div class="mt-2">
            <span class="text-sm font-medium line-clamp-2">{{
              video.title
            }}</span>
            <span class="text-xs text-gray-500 mt-1">{{
              video.channelName
            }}</span>
          </div>
        </NuxtLink>
      </div>
    </div>

    <div
      v-else
      class="p-4"
    >
      Chargement ...
    </div>
  </div>
</template>

<script setup>
const route = useRoute()

const pageTitle = computed(() => {
  const segments = route.path.split('/').filter(Boolean)
  if (!segments.length) return 'Home'
  return segments
    .at(-1)
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
})

useSeoMeta({ title: pageTitle.value })

// État pour suivre si la sidebar est collapsée
const sidebarCollapsed = useState('sidebar-collapsed', () => false)

// Charger les données
const { data: videos } = await useFetch('/data/video.json', { server: false })
const { data: channels } = await useFetch('/data/channels.json', {
  server: false
})

// Fonction pour trouver le nom du channel par ID
const getChannelName = (channelId) => {
  const channel = channels.value?.channels?.find(ch => ch.id === channelId)
  return channel?.name || 'Unknown Channel'
}

// Fonction pour enrichir les vidéos avec les infos du channel
const enrichedVideos = computed(() => {
  return videos.value?.videos?.map(video => ({
    ...video,
    channelName: getChannelName(video.channelId)
  }))
})

console.log('Videos:', enrichedVideos.value)
console.log('Channels:', channels.value)
</script>
