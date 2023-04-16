<template>
    <div v-if="isLoading" class="flex justify-center items-center p-4 border-b">
        <UiSpinner />
    </div>
    <div v-else>
        <TweetItem v-if="Object.keys(tweet).length > 0" :tweet="tweet" />
        <TweetForm v-if="Object.keys(tweet).length > 0" :user="user" @onSubmit="handleFormSubmit"
            :placeholder="'tweet your reply.'" :replyTo="replyTo" />
        <TweetFeed :tweetList="replies" :notFoundMsg="'Ooops! No tweet found..'" :title="'Replies'" :compact="true" />
    </div>
</template>
<script>
import { ref, watch } from 'vue';
export default {
    props: ['tweet', 'user', 'isLoading'],
    emits: ['onSuccess'],
    setup(props, { emit }) {
        const tweet = ref({});
        const { postTweet } = useTweet();
        const user = ref(props.user);
        const replies = ref([]);
        const replyTo = ref("");
        const isLoading = ref(props.isLoading);
        async function handleFormSubmit(data) {
            try {
                const { showLoading, ...formData } = data;
                const response = await postTweet({
                    text: formData.text,
                    replyTo: formData.replyTo,
                    mediaFiles: formData.mediaFiles
                });
                emit('onSuccess', { response: response, success: true });
            } catch (error) {
                console.log(error);
            } finally {
                loading.value = false;
            }
        }
        watch(props, (newVal, oldVal) => {
            tweet.value = newVal.tweet;
            replyTo.value = tweet.value.id;
            replies.value = tweet.value?.replies;
            isLoading.value = newVal.isLoading;
        })
        return {
            props,
            tweet,
            user,
            handleFormSubmit,
            isLoading,
            replies,
            replyTo
        }
    }
}
</script>