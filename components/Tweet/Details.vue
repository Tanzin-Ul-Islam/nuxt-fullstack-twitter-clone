<template>
    <div v-if="isLoading" class="flex justify-center items-center p-4 border-b">
        <UiSpinner />
    </div>
    <div v-else>
        <TweetItem v-if="Object.keys(tweet).length > 0" :tweet="tweet" />
        <TweetForm :user="user" @onSubmit="handleFormSubmit" :placeholder="'tweet your reply.'" />
        <TweetFeed :tweetList="replies" :notFoundMsg="'Ooops! No tweet found..'" :title="'Replies'"/>
    </div>
</template>
<script>
import { ref, watchEffect, watch } from 'vue';
import _ from "lodash";
export default {
    props: ['tweet', 'user', 'isLoading'],
    setup(props) {
        const tweet = ref({});
        const user = ref(props.user);
        const isLoading = ref(props.isLoading);
        const replies = computed(() => (props.tweet?.replies ? props.tweet.replies : []))
        function handleFormSubmit() {

        }
        watch(props, (newVal, oldVal) => {
            tweet.value = newVal.tweet;
            isLoading.value = newVal.isLoading;
        })
        return {
            tweet,
            user,
            handleFormSubmit,
            isLoading,
            replies
        }
    }
}
</script>