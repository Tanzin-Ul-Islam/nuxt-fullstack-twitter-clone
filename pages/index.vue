<template>
    <MainSection :title="'Home'">
        <Head>
            <title>Home/Twitter</title>
        </Head>
        <TweetListFeed />
    </MainSection>
</template>
<script>
import { ref } from 'vue';
export default {
    setup() {
        let loading = ref(false);
        return {
            loading,
        };
    }
}
</script>