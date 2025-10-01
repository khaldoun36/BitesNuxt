<template>
  <div class="flex flex-col gap-2">
    <label :for="id" class="label-lg text-neutral-800">
      {{ label }}
    </label>
    <input
      :id="id"
      v-model="model"
      type="number"
      inputmode="decimal"
      step="any"
      class="h-11 rounded-lg bg-white px-2 py-1 text-neutral-500 shadow-2xs outline outline-neutral-950/8"
      :class="{ 'ring-red-500': error }"
    />
    <span v-if="error" class="label-sm text-red-500">{{ error }}</span>
  </div>
</template>

<script setup>
// eslint-disable-next-line vue/require-prop-types
const model = defineModel();

defineProps({
  label: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  error: {
    type: String,
    default: null,
  },
});
</script>
