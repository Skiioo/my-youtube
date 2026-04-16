<template>
  <div>Historical test</div>
</template>

<script setup>
const route = useRoute();

const pageTitle = computed(() => {
  const segments = route.path.split("/").filter(Boolean);
  if (!segments.length) return "Home";
  return segments
    .at(-1)
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
});

useSeoMeta({ title: pageTitle.value });
</script>
