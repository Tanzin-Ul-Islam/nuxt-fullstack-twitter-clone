<template>
  <div class="flex flex-col h-screen">
    <div class="p-2 my-2 rounded-full hover:bg-blue-50 w-min" :class="defaultTransition">
      <nuxt-link to="/">
        <div class="h-8 w-8">
          <LogoTwitter />
        </div>
      </nuxt-link>
    </div>
    <SidebarLeftTab>
      
    </SidebarLeftTab>
  </div>
</template>

<script>
import { HomeIcon  } from '@heroicons/vue/24/solid'
export default {
  components: {
    HomeIcon ,
  },
  setup() {
    const { defaultTransition } = useTailwindConfig();
    return {
      defaultTransition,
    };
  },
};
</script>
