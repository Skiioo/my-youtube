<template>
  <nav
    class="flex place-items-center z-2 h-15 fixed top-0 w-full backdrop-blur-xs"
  >
    <div class="flex place-items-center ml-4 gap-5">
      <NuxtLink to="/">
        <div class="flex gap-1">
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-youtube-icon lucide-youtube"
          >
            <path
              d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
            />
            <path d="m10 15 5-3-5-3z" />
          </svg>
          <span
            class="hidden md:inline-block md:w-32 lg:w-48 overflow-hidden truncate whitespace-nowrap"
            >My Youtube</span
          >
        </div>
      </NuxtLink>
    </div>

    <NuxtLink to="/">Logo</NuxtLink>
    <NuxtLink to="/subscription">Subscription</NuxtLink>
  </nav>
</template>
