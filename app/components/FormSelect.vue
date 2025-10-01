<template>
  <div class="flex flex-col gap-2">
    <label class="label-md text-neutral-800">{{ label }}</label>

    <div
      :class="
        twMerge('grid grid-cols-1 gap-4', options.length === 2 && 'grid-cols-2')
      "
    >
      <div
        v-for="option in options"
        :key="option"
        class="grid place-items-center"
      >
        <input
          :id="`${label}-${option}`"
          v-model="model"
          type="radio"
          :name="label"
          :value="option"
          class="peer sr-only"
        />
        <label
          :for="`${label}-${option}`"
          class="h-full min-h-11 min-w-full cursor-pointer rounded-lg border-0 bg-white px-6 py-2 text-center text-neutral-500 shadow-2xs outline outline-neutral-950/8 backdrop-blur-lg transition-colors peer-checked:border-blue-600 peer-checked:bg-blue-500/90 peer-checked:text-white"
        >
          {{ option }}
        </label>
      </div>
    </div>

    <span v-if="error" class="label-sm text-red-500">{{ error }}</span>
  </div>
</template>

<script setup>
import { twMerge } from "tailwind-merge";

// eslint-disable-next-line vue/require-prop-types
const model = defineModel();

defineProps({
  label: {
    type: String,
    required: true,
  },
  options: {
    type: Array, // ✅ Corrected type to Array
    required: true,
  },
  error: {
    type: String,
    default: null,
  },
});
</script>
