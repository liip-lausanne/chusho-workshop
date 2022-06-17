<script setup>
defineProps({
  index: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="grid grid-cols-[auto_1fr_1fr]">
    <div class="p-10 pr-0 bg-white">
      <div
        class="inline-flex w-12 h-12 items-center justify-center text-white text-3xl font-bold rounded-full bg-green-700"
      >
        {{ index }}
      </div>
    </div>
    <div class="p-10 bg-white">
      <slot name="instructions"></slot>
    </div>
    <div class="p-10">
      <slot name="playground"></slot>
    </div>
  </div>
</template>
