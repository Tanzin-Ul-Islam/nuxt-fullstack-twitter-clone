<template>
    <h1 class="font-semibold text-lg text-gray-700">{{ props.title ? props.title : 'Feed' }}</h1>
    <div v-if="emptyTweet">
        <div v-if="props.notFoundMsg" class="flex flex-col items-center p-4">
            <span class="ml-3 font-medium text-gray-800">{{ props.notFoundMsg }}</span>
        </div>
        <div v-else class="flex flex-col items-center p-4">
            <img class="w-50 h-60 rounded-full" src="assets/image/twitter-sleepy.png" :alt="'sleepy-twitter'">
            <span class="ml-3 font-medium text-gray-800">Opps!! No Tweet Found!</span>
        </div>
    </div>
    <div v-else class="pb-4 border-b hover:bg-blue-100 cursor-pointer" v-for="(data, index) in props.tweetList"
        :key="index">
        <TweetItem :tweet="data" />
    </div>
    <!-- <ul>
        <li >{{data.text}}</li>
    </ul> -->
</template>
<script>
import { ref, computed } from 'vue';
export default {
    props: ['tweetList', 'notFoundMsg', 'title'],
    setup(props) {
        const emptyTweet = computed(() => (props.tweetList.length === 0));
        return {
            props,
            emptyTweet
        }
    }
}
</script>