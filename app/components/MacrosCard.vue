<template>
  <article
    class="rounded-lg bg-white p-4 shadow-2xs outline outline-neutral-950/8"
  >
    <h3 class="label-lg text-neutral-500">Macros</h3>
    <VueApexCharts
      type="radialBar"
      :options="chartOptions"
      :series="consumedMacrosPercentae"
    />
    <div class="divide-y divide-neutral-950/8">
      <p class="flex items-baseline-last justify-between gap-8 pb-2">
        <span class="label-sm text-neutral-500">Carbohydrates</span>
        <span
          :class="
            twMerge(
              'label-lg text-lime-500',
              foodDiary.totalCarbs / goalMacros.carbs > 1 && 'text-red-500',
            )
          "
        >
          {{ foodDiary.totalCarbs + "g" + " / " + goalMacros.carbs }}
        </span>
      </p>
      <p class="flex items-baseline-last justify-between gap-8 py-2">
        <span class="label-sm text-neutral-500">Protein</span>
        <span
          :class="
            twMerge(
              'label-lg text-amber-500',
              foodDiary.totalProtein / goalMacros.protein > 1 && 'text-red-500',
            )
          "
        >
          {{ foodDiary.totalProtein + "g" + " / " + goalMacros.protein }}
        </span>
      </p>
      <p class="flex items-baseline-last justify-between gap-8 pt-2">
        <span class="label-sm text-neutral-500">Fat</span>
        <span
          :class="
            twMerge(
              'label-lg text-sky-500',
              foodDiary.totalFats / goalMacros.fat > 1 && 'text-red-500',
            )
          "
        >
          {{ foodDiary.totalFats + "g" + " / " + goalMacros.fat }}
        </span>
      </p>
    </div>
  </article>
</template>

<script setup>
import { twMerge } from "tailwind-merge";
import VueApexCharts from "vue3-apexcharts";
import { useFoodDiaryStore } from "@/stores/foodDiary";

const foodDiary = useFoodDiaryStore();

const goalMacros = reactive({
  protein: 240,
  carbs: 360,
  fat: 80,
});

// const consumedMacros = reactive({
//   protein: ,
//   carbs: ,
//   fat: ,
// });

const consumedMacrosPercentae = computed(() => {
  return [
    Math.round((foodDiary.totalCarbs / goalMacros.carbs) * 100),
    Math.round((foodDiary.totalProtein / goalMacros.protein) * 100),
    Math.round((foodDiary.totalFats / goalMacros.fat) * 100),
  ];
});

const chartOptions = computed(() => ({
  chart: {
    type: "radialBar",
    sparkline: { enabled: true }, // Minimalist look
  },
  plotOptions: {
    radialBar: {
      hollow: { size: "25%" },
      track: {
        background: [
          "var(--color-lime-50)",
          "var(--color-amber-50)",
          "var(--color-sky-50)",
        ], // Dynamic track colors
        strokeWidth: "100%",
        margin: 5,
      },
      dataLabels: { show: false }, // Hide center percentage
    },
  },
  colors: [
    "var(--color-lime-500)",
    "var(--color-amber-500)",
    "var(--color-sky-500)",
  ], // Dynamic ring colors
  stroke: {
    lineCap: "round",
  },
  labels: ["p", "c", "f"], // For tooltips
}));
</script>
