<template>
  <form class="space-y-6 overflow-y-auto px-4 py-10" @submit="onSubmit">
    <form-input
      id="current-weight"
      v-model="currentWeight"
      label="Current weight (kg)"
      :error="currentWeightError"
    />
    <form-input
      id="goal-weight"
      v-model="goalWeight"
      label="Goal weight (kg)"
      :error="goalWeightError"
    />
    <form-input id="age" v-model="age" label="Age" :error="ageError" />
    <form-input
      id="height"
      v-model="height"
      label="Height (cm)"
      :error="heightError"
    />
    <form-select
      v-model="gender"
      label="Gender"
      :options="genderOptions"
      :error="genderError"
    />

    <form-select
      v-model="activityLevel"
      label="Activity level"
      :options="activityOptions"
      :error="activityLevelError"
    />
    <base-button type="submit" class="mt-8">Submit</base-button>
  </form>
</template>

<script setup>
import { useUserDataStore } from "~/stores/userData";
import { useForm, useField } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import FormInput from "~/components/FormInput.vue";
import FormSelect from "~/components/FormSelect.vue";
import BaseButton from "~/components/BaseButton.vue";

definePageMeta({
  layout: "onboarding",
});

const router = useRouter();

// ✅ 1. Initialize your store. Nuxt auto-imports `useUserDataStore`.
const userDataStore = useUserDataStore();

const genderOptions = ["Male", "Female"];
const activityOptions = [
  "Little or no exercise",
  "Light: 1–3 workouts per week",
  "Moderate: 3–5 workouts per week",
  "Active: 6–7 workouts per week",
  "Very Active: Daily intense exercise or physical job",
];

const validationSchema = toTypedSchema(
  z
    .object({
      currentWeight: z.coerce
        .number({ invalid_type_error: "Please enter your weight as a number." })
        .min(1, "Please enter a valid weight."),
      goalWeight: z.coerce
        .number({
          invalid_type_error: "Please enter your goal weight as a number.",
        })
        .min(1, "Please enter a valid weight."),
      age: z.coerce.number({
        invalid_type_error: "Please enter your age as a number.",
      }),
      height: z.coerce
        .number({ invalid_type_error: "Please enter your height as a number." })
        .min(1, "Please enter a valid height."),
      gender: z.string({
        required_error: "Please select your gender.",
      }),
      activityLevel: z.string({
        required_error: "Please select your activity level.",
      }),
    })
    .refine(
      (data) => {
        if (data.currentWeight && data.goalWeight) {
          return Math.abs(data.goalWeight - data.currentWeight) <= 5;
        }
        return true;
      },
      {
        message: "Goal weight must be within 5 kg of your current weight.",
        path: ["goalWeight"],
      },
    ),
);

// ✅ 2. Set initial values for the form from the store.
// This is useful if the user navigates away and comes back.
const { handleSubmit } = useForm({
  validationSchema,
  initialValues: {
    currentWeight: userDataStore.currentWeight,
    goalWeight: userDataStore.goalWeight,
    height: userDataStore.height,
    age: useUserDataStore.age,
    gender: userDataStore.gender,
    activityLevel: userDataStore.activityLevel,
  },
});

const { value: currentWeight, errorMessage: currentWeightError } =
  useField("currentWeight");
const { value: goalWeight, errorMessage: goalWeightError } =
  useField("goalWeight");
const { value: height, errorMessage: heightError } = useField("height");
const { value: age, errorMessage: ageError } = useField("age");
const { value: gender, errorMessage: genderError } = useField("gender");
const { value: activityLevel, errorMessage: activityLevelError } =
  useField("activityLevel");

const onSubmit = handleSubmit((values) => {
  // ✅ 3. On successful validation, call the store's action.
  userDataStore.updateDetails(values);

  router.push("/");
});
</script>
