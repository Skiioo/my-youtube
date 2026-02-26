<template>
  <div class="h-screen flex flex-col overflow-hidden">
    <Header />

    <div class="flex flex-1 overflow-hidden">
      <UDashboardGroup class="flex gap-2 mt-16 w-content">
        <UDashboardSidebar id="main-sidebar" collapsible  class="h-full overflow-y-auto">
          <template #header>
            <UDashboardSidebarCollapse variant="subtle" class="z-2" />
          </template>
          
          <template #default="{ collapsed }">
            <UNavigationMenu
              :collapsed="collapsed"
              :items="items[0]"
              orientation="vertical"
            />

            <UNavigationMenu
              :collapsed="collapsed"
              :items="items[1]"
              orientation="vertical"
              class="mt-auto"
            />
          </template>
        </UDashboardSidebar>

        <UDashboardPanel 
          class="h-full overflow-y-auto" 
        >
          <NuxtPage />
        </UDashboardPanel>
      </UDashboardGroup>
    </div>
  </div>
</template>

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
      label: "Subscription",
      icon: "i-lucide-inbox",
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
