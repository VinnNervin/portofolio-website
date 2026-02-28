<script setup lang="ts">

const props = defineProps<{
  className?: string;
}>();


</script>

<template>
  <div :class="props.className" class="neo-card p-6 relative overflow-hidden group">
    <slot></slot>
  </div>
</template>