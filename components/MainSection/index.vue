<template>
    <div class="border-x">
        <div class="sticky top-0 px-3 py-4 bg-white/80 backdrop-blur-md">
            <h2 class="text-xl font-bold text-gray-800">{{ props.title }}</h2>
        </div>
        <div v-if="loading" class="flex justify-center items-center p-4 border-b">
            <UiSpinner />
        </div>
        <div v-else>
            <div class="border-b">
                <TweetForm :user="user" @onSubmit="handleFormSubmit" />
            </div>
        </div>
        <div class="border-b">
            <TweetFeed :tweetList="tweetList" />
        </div>
        <slot></slot>
    </div>
</template>

<script>
import userAuth from '~~/composables/userAuth';
import useTweet from '~~/composables/useTweet';
import { ref, onBeforeMount, onMounted } from 'vue';
export default {
    props: ['title', 'loading'],
    setup(props) {
        const { useAuthUser } = userAuth();
        const { postTweet, getTweet } = useTweet();
        const user = useAuthUser();
        const tweetList = ref([]);
        let loading = ref(props.loading);
        async function handleFormSubmit(data) {
            try {
                const { showLoading, ...formData } = data;
                loading.value = showLoading;
                await postTweet({
                    text: formData.text,
                    mediaFiles: formData.mediaFiles
                });
                await getTweetData();
            } catch (error) {
                console.log(error);
            } finally {
                loading.value = false;
            }
        }
        async function getTweetData(){
            tweetList.value = await getTweet();
        }

        onBeforeMount(async () => {
            await getTweetData();
        })

        return {
            props,
            user,
            loading,
            tweetList,
            handleFormSubmit
        }
    }
}
</script>