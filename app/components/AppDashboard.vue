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
      label: 'Subscription',
      icon: 'i-lucide-inbox',
      badge: '4',
      to: '/subscription'
    },
    {
      label: 'You',
      icon: 'i-lucide-youtube',
      defaultOpen: true,
      children: [
        {
          label: 'Historical',
          to: '/historical'
        },
        {
          label: 'Members'
        },
        {
          label: 'Notifications'
        }
      ]
    }
  ]
]
</script>

<template>
  <div>
    <UNavigationMenu
      :items="items[0]"
      orientation="vertical"
    />

    <UNavigationMenu
      :items="items[1]"
      orientation="vertical"
      class="mt-auto"
    />
  </div>
</template>
