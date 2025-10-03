<template>
  <div class="flex flex-col px-4">
    <button
      class="grid size-12 place-items-center self-end"
      @click="closeWindow"
    >
      <Icon name="ph:x" size="24" />
    </button>
    <form class="mt-20">
      <div class="flex flex-col">
        <label for="new-food" class="sr-only">Log new food</label>
        <textarea
          id="new-food"
          ref="textareaRef"
          rows="3"
          class="rounded-lg px-2 py-1 text-neutral-500 shadow-2xs outline outline-neutral-950/8"
          placeholder="a large burger with fries and orange juice"
        />
      </div>
      <BaseButton type="submit" class="mt-4 !h-10">Send</BaseButton>
    </form>
    <section class="mt-10 mb-16 space-y-4 overflow-y-auto">
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
import { ref, onMounted } from "vue"; // 2. Import ref and onMounted
import BaseButton from "~/components/BaseButton.vue";

import { format } from "date-fns";
import { useFoodDiaryStore } from "@/stores/foodDiary";

const foodDiary = useFoodDiaryStore();

definePageMeta({
  layout: "onboarding",
});

const router = useRouter();
const textareaRef = ref(null); // 3. Create a ref

// 4. Use onMounted to focus the element after the component mounts
onMounted(() => {
  textareaRef.value?.focus();
});

const closeWindow = () => {
  router.push("/food-diary");
};
</script>
