<template>
  <div class="mx-auto min-h-dvh max-w-xl px-4">
    <slot />
    <TapBar />
  </div>
</template>

<script setup>
import TapBar from "@/components/TapBar.vue";
</script>
