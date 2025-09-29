<template>
  <div>
    <dates-header :current-date="currentDate" />
    <section class="mt-10 space-y-4">
      <calories-card />
      <macros-card />
    </section>
  </div>
</template>

<script setup>
import DatesHeader from "~/components/DatesHeader.vue";
import CaloriesCard from "~/components/CaloriesCard.vue";
import MacrosCard from "~/components/MacrosCard.vue";

const currentDate = new Date();
</script>
