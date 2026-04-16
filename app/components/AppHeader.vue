<template>
  <nav
    class="flex place-content-between items-center p-4 h-15 fixed top-0 w-full backdrop-blur-xs"
  >
    <div class="flex items-center gap-5">
      <NuxtLink to="/">
        <div class="flex gap-1">
          <UIcon
            name="i-lucide-youtube"
            class="size-6"
          />
          <span
            class="hidden md:inline-block md:w-32 lg:w-48 overflow-hidden truncate whitespace-nowrap"
          >My Youtube</span>
        </div>
      </NuxtLink>
    </div>
    <div class="mr-4 flex gap-2">
      <div>
        <UInput
          v-model="value"
          placeholder="Search..."
          :ui="{
            trailing: 'pe-1',
            base: '!rounded-full',
            wrapper: '!rounded-full !w-[600px]',
            inner: '!rounded-full'
          }"
          size="xl"
          icon="i-lucide-search"
          class="w-[500px]"
        />
      </div>
    </div>
    <div class="flex gap-4 items-center">
      <UIcon
        name="i-lucide-bell"
        class="size-8 hover:cursor-pointer"
      />
      <UIcon
        name="i-lucide-circle-user-round"
        class="size-8 hover:cursor-pointer"
      />
    </div>
  </nav>
</template>

<script setup>
const value = ref('')
</script>
