<template>
  <nav
    class="fixed right-4 bottom-4 left-4 grid grid-cols-[1fr_auto] place-items-center gap-6"
  >
    <div
      class="grid min-w-full grid-cols-3 place-items-center gap-2 rounded-4xl p-1 outline outline-neutral-950/8 backdrop-blur"
    >
      <NuxtLink
        to="/"
        class="label-lg grid h-12 w-full place-content-center rounded-4xl px-2 py-1 outline outline-neutral-950/10"
      >
        <Icon name="ph:house" size="24px" />
      </NuxtLink>
      <NuxtLink
        to="food-diary"
        class="label-lg grid h-12 w-full place-content-center rounded-4xl px-2 py-1 outline outline-neutral-950/10"
      >
        <Icon name="ph:notebook" size="24px" />
      </NuxtLink>
      <NuxtLink
        to="profile"
        class="xp2 label-lg grid h-12 w-full place-content-center rounded-4xl py-1 outline outline-neutral-950/10"
      >
        <Icon name="ph:user" size="24px" />
      </NuxtLink>
    </div>
    <NuxtLink
      class="xp2 label-lg grid aspect-square h-14 w-full place-content-center rounded-4xl bg-blue-500/70 p-4 py-1 text-white outline outline-blue-600 backdrop-blur-lg"
    >
      <Icon name="ph:plus" size="24px" />
    </NuxtLink>
  </nav>
</template>

<script setup></script>

<style scoped>
a {
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}
.router-link-active,
.router-link-exact-active {
  background-color: var(--color-neutral-950);
  color: white;
}
</style>
