<template>
    <div>
        <div v-if="loading" class="flex justify-center items-center p-4 border-b">
            <UiSpinner />
        </div>
        <div v-else class="border-b">
            <TweetForm :user="user" @onSubmit="handleFormSubmit" />
        </div>
    </div>
    <div class="border-b">
        <div v-if="tweetLoading" class="flex justify-center items-center p-4 border-b">
            <UiSpinner />
        </div>
        <TweetFeed v-else :tweetList="tweetList" />
    </div>
</template>

<script>
import userAuth from '~~/composables/userAuth';
import useTweet from '~~/composables/useTweet';
import { ref, onBeforeMount } from 'vue';
export default {
    props: ['title'],
    setup(props) {
        const { useAuthUser } = userAuth();
        const { postTweet, getTweet } = useTweet();
        const user = useAuthUser();
        const tweetList = ref([]);
        const loading = ref(false);
        const tweetLoading = ref(false);
        async function handleFormSubmit(data) {
            try {
                const { showLoading, ...formData } = data;
                loading.value = showLoading;
                await postTweet({
                    text: formData.text,
                    mediaFiles: formData.mediaFiles
                });
                loading.value = false;
                await getTweetData();
            } catch (error) {
                console.log(error);
            } finally {
                loading.value = false;
            }
        }
        async function getTweetData() {
            tweetLoading.value = true;
            tweetList.value = await getTweet();
            tweetLoading.value = false;
        }

        onBeforeMount(async () => {
            await getTweetData();
        })

        return {
            props,
            user,
            loading,
            tweetLoading,
            tweetList,
            handleFormSubmit
        }
    }
}
</script>