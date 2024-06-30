<template>
  <button class="a-button" :class="type">
    <slot name="icon" />
    <slot class="content" />
  </button>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "AButton",
  props: {
    type: {
      type: String as PropType<"primary" | "secondary" | "outline" | "text">,
      default: "primary",
    },
  },
});
</script>
<style scoped>
.a-button {
  @apply rounded-xl px-4 py-2 m-1 font-sans font-medium text-base outline-none 
	hover:ease-in-out transition-all duration-300;
}

.a-button:not(.text) {
  @apply shadow-md active:shadow-none;
}

.a-button:is(.primary) {
  @apply text-white bg-sky-400
	active:bg-sky-600 hover:bg-sky-500 focus:bg-sky-500;
}

.a-button:is(.outline) {
  @apply text-sky-400 ring-1 ring-sky-200
	focus:ring-sky-400 active:ring-sky-500 hover:ring-sky-300;
}

.a-button:is(.secondary) {
  @apply text-sky-500 bg-sky-200
	active:bg-sky-50 hover:bg-sky-100 focus:bg-sky-100;
}

.a-button:is(.text) {
  @apply text-sky-400 shadow-none
	active:text-sky-600 hover:text-sky-500 focus:text-sky-500;
}
</style>
