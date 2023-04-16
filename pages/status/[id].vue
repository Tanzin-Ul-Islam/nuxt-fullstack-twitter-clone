<template>
    <MainSection :title="'Home'">
        <Head>
            <title>Home/Twitter/Status</title>
        </Head>
        <TweetDetails :tweet="tweet" :user="user" :isLoading="isLoading" @onSuccess="handleSuccess" />
    </MainSection>
</template>
<script>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import useTweet from '~~/composables/useTweet';
import userAuth from '~~/composables/userAuth';
export default {
    setup() {
        const { getTweetById } = useTweet();
        const { useAuthUser } = userAuth();
        const route = useRoute();
        let { id } = route.params;
        const tweet = ref({});
        const user = useAuthUser().value;
        const isLoading = ref(true);

        async function getTweetData() {
            isLoading.value = true;
            tweet.value = await getTweetById(id);
            isLoading.value = false;
        }

        async function handleSuccess(data) {
            if (data.success) {
                await getTweetData();
            }
        }


        onBeforeMount(async () => {
            await getTweetData();
        })

        onBeforeRouteUpdate(async (to, from, next) => {
            id = to.params.id;
            await getTweetData()
            next();
        })



        return {
            isLoading,
            tweet,
            user,
            handleSuccess,
            route,
        }
    }
}
</script>