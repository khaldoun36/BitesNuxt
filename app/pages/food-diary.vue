<template>
  <div>
    <dates-header />
    <section class="mt-10 mb-16 space-y-4">
      <article
        v-for="item in foodDiary.logInReverseChrono"
        :key="item.id"
        class="rounded-lg bg-white p-4 shadow-2xs outline outline-neutral-950/8"
      >
        <time
          class="label-lg block text-end text-neutral-500"
          datetime="11:30"
          >{{ format(item.timestamp, "h:mm aaa") }}</time
        >
        <ul class="mt-3 list-disc space-y-1.5 pl-4">
          <li
            v-for="(foodItem, index) in item.names"
            :key="index"
            class="label-lg text-neutral-800"
          >
            {{ foodItem }}
          </li>
        </ul>
        <div class="mt-4 grid grid-cols-[1.25fr_1fr_1fr_1fr] gap-2">
          <p
            class="rounded-lg bg-neutral-50 py-2 text-center outline-[0.5px] outline-neutral-950/8"
          >
            <span class="label-sm block text-neutral-500">Calories</span>
            <span class="label-lg text-neutral-800">{{ item.calories }}</span>
            <span class="label-sm text-neutral-500"> Kcal</span>
          </p>
          <p
            class="rounded-lg bg-lime-50 py-2 text-center outline outline-lime-700/8"
          >
            <span class="label-sm block text-neutral-500">Protein</span>
            <span class="label-lg text-neutral-800">{{ item.protein }}</span>
            <span class="label-sm text-neutral-500"> g</span>
          </p>
          <p
            class="rounded-lg bg-amber-50 py-2 text-center outline outline-amber-700/8"
          >
            <span class="label-sm block text-neutral-500">Carbs</span>
            <span class="label-lg text-neutral-800">{{ item.carbs }}</span>
            <span class="label-sm text-neutral-500"> g</span>
          </p>
          <p
            class="rounded-lg bg-sky-50 py-2 text-center outline outline-sky-700/8"
          >
            <span class="label-sm block text-neutral-500">Fats</span>
            <span class="label-lg text-neutral-800">{{ item.fats }}</span>
            <span class="label-sm text-neutral-500"> g</span>
          </p>
        </div>
      </article>
    </section>
  </div>
</template>

<script setup>
import { format } from "date-fns";
import { useFoodDiaryStore } from "@/stores/foodDiary";
import DatesHeader from "~/components/DatesHeader.vue";
const foodDiary = useFoodDiaryStore();
</script>
