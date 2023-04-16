<template>
    <div @click="$router.push('/status/'+item.id)">
        <TweetItemHeader :tweet="item" />
        <div :class="tweetBodyWrap">
            <p class="flex-shrink w-auto font-medium text-gray-900" :class="textSize">
                {{ item.text }}
            </p>
            <div v-for="(image, index) in item.mediaFiles" :key="index" class="flex my-3 mr-2 border-2 rounded-2xl">
                <img :src="image.url" :alt="image.url" class="w-full rounded-2xl">
            </div>
            <div class="mt-2">
                <TweetItemActions :compact="props.compact"/>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    props: ["tweet", "compact"],
    setup(props) {
        const item = ref(props.tweet);
        const tweetBodyWrap = computed(() => (props.compact ? 'ml-16' : 'ml-2 mt-4'));
        const textSize = computed(() => (props.compact ? 'text-base' : 'text-2xl'));
        return {
            props,
            item,
            tweetBodyWrap,
            textSize
        };
    },
}
</script>