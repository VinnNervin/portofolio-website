<script setup lang="ts">
const props = withDefaults(defineProps<{
  url?: string;
  name: string;
  className?: string;
  padding?: string;
  hoverType?: 'down' | 'up';
}>(), {
  hoverType: 'down'
});
</script>


<template>
  <div :class="[
    'flex group relative w-fit items-center justify-center font-black h-fit text-black border-4 border-black transition-all cursor-pointer',
    props.hoverType === 'up'
      ? 'shadow-none hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1'
      : 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1',
    props.className ? props.className : ''
  ]">
    <a :href="props.url" target="_blank" :class="['block w-full h-full', props.padding ? props.padding : '']">
      {{ props.name }}
    </a>
  </div>
</template>