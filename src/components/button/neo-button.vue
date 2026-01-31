<script setup lang="ts">
const props = defineProps<{
  url: string;
  name: string;
  className?: string;
}>();

</script>


<template>
  <div class="flex flex-wrap gap-4 mt-8">
    <!-- combine additional style with default style -->
    <a :href="props.url" target="_blank" :class="props.className"
      class="group relative inline-flex items-center justify-center font-black px-2 py-2 text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all cursor-pointer">
      {{ props.name }}
    </a>

  </div>
</template>