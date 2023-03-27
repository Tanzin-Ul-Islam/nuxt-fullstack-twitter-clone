<template>
  <nuxt-link to="/" class="flex items-center p-3 w-min hover:bg-gray-300 rounded-full" :class="defaultTransition">
    <div class="w-6 h-6 text-dark">
      <slot name="icon"></slot>
    </div>
    <div :class="['hidden', 'ml-4', 'text-xl', 'xl:block', textClass]">
      <slot name="name"></slot>
    </div>
  </nuxt-link>
</template>

<script>
import useTailwindConfig from "../../../composables/useTailwindConfig";
export default {
  props:['active'],
  setup(props) {
    const { defaultTransition } = useTailwindConfig();
    const textClass = computed(() => props.active ? 'font-semibold' : 'font-normal');
    return {
      defaultTransition,
      textClass,
    }
  },
};
</script>
