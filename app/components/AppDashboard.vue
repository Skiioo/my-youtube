<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items: NavigationMenuItem[][] = [
  [
    {
      label: "Home",
      icon: "i-lucide-house",
      to: "/",
    },
    {
      label: "Subs",
      icon: "i-lucide-circle-user-round",
      badge: "4",
      to: "/subscription",
    },
    {
      label: "You",
      icon: "i-lucide-youtube",
      defaultOpen: true,
      children: [
        {
          label: "Historical",
          to: "/historical",
        },
        {
          label: "Members",
        },
        {
          label: "Notifications",
        },
      ],
    },
  ],
];
</script>

<template>
  <UDashboardGroup class="flex gap-2 mt-16 w-content">
    <UDashboardSidebar
      id="main-sidebar"
      collapsible
      class="h-full overflow-y-auto"
    >
      <template #header>
        <UDashboardSidebarCollapse variant="subtle" class="z-2" />
      </template>

      <template #default="{ collapsed }">
        <UNavigationMenu
          :key="'menu1-' + collapsed"
          :collapsed="collapsed"
          :items="items[0]"
          orientation="vertical"
        >
        </UNavigationMenu>
      </template>
      
    </UDashboardSidebar>

    <UDashboardPanel class="h-full overflow-y-auto">
      <NuxtPage class="mt-15" />
    </UDashboardPanel>
  </UDashboardGroup>
</template>
