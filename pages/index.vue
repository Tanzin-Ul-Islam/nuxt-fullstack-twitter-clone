
import { MainSection } from '~~/.nuxt/components';

<template>
    <MainSection :title="'Home'" :loading="loading">

    </MainSection>
</template>
<script>
import { ref } from 'vue';
export default {
    setup() {
        let loading = ref(false);

        return {
            loading,
        }
    }
}
</script>