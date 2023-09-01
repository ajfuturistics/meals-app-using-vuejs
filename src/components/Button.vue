<script setup>
const props = defineProps({
  href: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <a
    :href="props.href"
    target="_blank"
    class="px-3 py-2 rounded transition-colors"
  >
    <slot></slot>
  </a>
</template>

<style scoped></style>
