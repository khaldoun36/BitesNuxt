<template>
  <div>
    <dates-header :current-date="currentDate" />
    <section class="mt-10">
      <article
        class="space-y-4 rounded-lg bg-white p-4 shadow-2xs outline outline-neutral-950/8"
      >
        <h2 class="label-lg text-neutral-500">Calories</h2>
        <div class="grid grid-cols-1 grid-rows-1">
          <div
            class="col-start-1 row-start-1 h-12 w-full rounded-lg bg-neutral-950/8"
          />

          <div
            :class="
              twMerge(
                'col-start-1 row-start-1 flex h-12 items-center justify-end rounded-lg bg-blue-500 pr-4',
                consumedPercentage > 100 && 'bg-red-500',
              )
            "
            :style="{ width: `${consumedPercentage}%` }"
          >
            <span v-show="consumedPercentage >= 15" class="label-lg text-white"
              >{{ consumedCalories }}
            </span>
          </div>

          <p
            :class="
              twMerge(
                'label-lg col-start-1 row-start-1 pt-3 pr-4 text-end text-neutral-800',
                consumedPercentage > 85 && 'text-transparent',
              )
            "
          >
            {{ dailyCalories }}
          </p>
        </div>
      </article>
    </section>
  </div>
</template>

<script setup>
import { twMerge } from "tailwind-merge";
import { ref, computed } from "vue";
import DatesHeader from "~/components/DatesHeader.vue";

const currentDate = new Date();

const dailyCalories = ref(2400);
const consumedCalories = ref(380);

// Calculate the percentage of calories consumed
const consumedPercentage = computed(() => {
  if (dailyCalories.value === 0) return 0; // Avoid division by zero
  return (consumedCalories.value / dailyCalories.value) * 100;
});
</script>
