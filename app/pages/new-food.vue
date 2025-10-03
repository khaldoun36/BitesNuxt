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
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"; // 2. Import ref and onMounted

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
