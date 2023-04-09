<template>
    <div class="flex items-center p-4">
        <img class="w-10 h-10 rounded-full" :src="author.profileImage" :alt="author.name">
        <span class="ml-3 font-medium text-gray-800">{{ author.name }}</span>
        <span class="ml-3 font-medium text-sm text-gray-500">
            <nuxt-link to="#">{{ author.handle }}</nuxt-link> . {{ tweet.postedAt }}
        </span>
    </div>
</template>

<script>
export default {
    props: ['tweet'],
    setup(props) {
        const tweet = ref(props.tweet)
        const author = ref(props.tweet.author);
        return {
            tweet,
            author,
        }
    }
}
</script>