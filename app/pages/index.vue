<template>
  <div>
    <dates-header />
    <section class="space-y-4 pt-10 pb-20">
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
