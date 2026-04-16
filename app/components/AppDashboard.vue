<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[][] = [
  [
    {
      label: 'Home',
      icon: 'i-lucide-house',
      to: '/'
    },
    {
      label: 'Subs',
      icon: 'i-lucide-circle-user-round',
      badge: '4',
      to: '/subscription'
    }
  ],

  [
    {
      label: 'Historical',
      icon: 'i-lucide-history',
      to: '/historical'
    },
    {
      label: 'Playlists',
      icon: 'i-lucide-list-video'
    },
    {
      label: 'Watch later',
      icon: 'i-lucide-clock'
    },
    {
      label: 'Video \'Like\'',
      icon: 'i-lucide-thumbs-up'
    },
    {
      label: 'Your video',
      icon: 'i-lucide-square-play'
    },
    {
      label: 'Download',
      icon: 'i-lucide-arrow-down-to-line'
    }
  ],
  [
    {
      label: 'Music',
      icon: 'i-lucide-music-2'
    },
    {
      label: 'Movies and TV shows',
      icon: 'i-lucide-clapperboard'
    },
    {
      label: 'Live',
      icon: 'i-lucide-radio'
    },
    {
      label: 'Games',
      icon: 'i-lucide-gamepad-2'
    },
    {
      label: 'News',
      icon: 'i-lucide-newspaper'
    },
    {
      label: 'Sports',
      icon: 'i-lucide-trophy'
    },
    {
      label: 'Knowledge & Culture ',
      icon: 'i-lucide-lightbulb'
    },
    { label: 'Fashion', icon: 'i-lucide-handbag' },
    {
      label: 'Podcasts',
      icon: 'i-lucide-podcast'
    }
  ]
]
</script>

<template>
  <UDashboardGroup class="flex gap-2 mt-16 w-content">
    <UDashboardSidebar
      id="main-sidebar"
      collapsible
      class="h-full overflow-y-auto pb-16"
    >
      <template #header>
        <UDashboardSidebarCollapse
          variant="subtle"
          class="z-2"
        />
      </template>

      <template #default="{ collapsed }">
        <UNavigationMenu
          :key="'menu1-' + collapsed"
          :collapsed="collapsed"
          :items="items[0]"
          orientation="vertical"
        />

        <USeparator />
        <div
          v-if="!collapsed"
          class="px-4 text-white text-slate-500"
          :collapsed="collapsed"
        >
          You
        </div>

        <UNavigationMenu
          :key="'menu2-' + collapsed"
          :collapsed="collapsed"
          :items="items[1]"
          orientation="vertical"
        />
        <USeparator />
        <div
          v-if="!collapsed"
          class="px-4 text-white text-slate-500"
          :collapsed="collapsed"
        >
          Explorer
        </div>

        <UNavigationMenu
          :key="'menu3-' + collapsed"
          :collapsed="collapsed"
          :items="items[2]"
          orientation="vertical"
        />
        <USeparator />
        <div
          v-if="!collapsed"
          class="px-4 text-white text-slate-500"
          :collapsed="collapsed"
        >
          Explorer
        </div>

        <UNavigationMenu
          :key="'menu3-' + collapsed"
          :collapsed="collapsed"
          :items="items[2]"
          orientation="vertical"
        />
      </template>
    </UDashboardSidebar>

    <UDashboardPanel class="h-full overflow-y-auto">
      <NuxtPage />
    </UDashboardPanel>
  </UDashboardGroup>
</template>
