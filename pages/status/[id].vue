<template>
    <MainSection :title="'Home'" :loading="loading">
        <Head>
            <title>Home/Twitter/Status</title>
        </Head>
        <TweetDetails :tweet="tweet" :user="user" :isLoading="isLoading"/>
    </MainSection>
</template>
<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import useTweet from '~~/composables/useTweet';
import userAuth from '~~/composables/userAuth';
export default {
    setup() {
        const { getTweetById } = useTweet();
        const { useAuthUser } = userAuth();
        const route = useRoute();
        const { id } = route.params;
        const tweet = ref({});
        const user = useAuthUser().value;
        const isLoading = ref(true);

        onBeforeMount(async () => {
            isLoading.value = true;
            tweet.value = await getTweetById(id);
            isLoading.value = false;
        })

        return {
            isLoading,
            tweet,
            user
        }
    }
}
</script>