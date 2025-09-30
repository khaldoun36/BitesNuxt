<template>
  <div>
    <dates-header />
    <section class="mt-10 mb-16 space-y-4">
      <calories-card />
      <macros-card />
    </section>
  </div>
</template>

<script setup>
import DatesHeader from "~/components/DatesHeader.vue";
import CaloriesCard from "~/components/CaloriesCard.vue";
import MacrosCard from "~/components/MacrosCard.vue";
</script>
