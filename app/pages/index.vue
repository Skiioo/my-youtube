<template>
  <div class="min-h-screen pr-4 pl-2 pt-2 pb-2 overflow-y-auto">
    <div
      class="flex w-full h-10 fixed place-items-center gap-2 backdrop-blur-xs top-15 z-3"
    >
      <UButton
        color="neutral"
        variant="soft"
        size="md"
        class="font-bold"
      >
        Button
      </UButton>
      <UButton
        color="neutral"
        variant="soft"
        size="md"
        class="font-bold"
      >
        Button
      </UButton>
      <UButton
        color="neutral"
        variant="soft"
        size="md"
        class="font-bold"
      >
        Button
      </UButton>
    </div>

    <div
      v-if="error"
      class=""
    >
      <p>Erreur: {{ error?.message || error }}</p>
    </div>

    <div v-else-if="enrichedVideos?.length">
      <div class="grid grid-cols-3 gap-4">
        <div
          v-for="video in enrichedVideos"
          :key="video.id"
          class="relative w-full"
        >
          <!-- Conteneur image qui prend toute la place disponible -->
          <div
            class="relative w-full rounded-xl transition-transform duration-300 hover:scale-102 bg-gray-200 rounded-xl"
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
            <span class="text-sm font-medium line-clamp-2">{{ video.title }}</span>
            <span class="text-xs text-gray-500 mt-1">{{ video.channelName }}</span>
          </div>
        </div>
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
// État pour suivre si la sidebar est collapsée
const sidebarCollapsed = useState('sidebar-collapsed', () => false)

// Charger les données
const { data: videos } = await useFetch('/data/video.json', { server: false })
const { data: channels } = await useFetch('/data/channels.json', { server: false })

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
