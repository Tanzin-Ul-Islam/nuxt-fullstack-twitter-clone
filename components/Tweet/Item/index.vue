<template>
    <div>
        <TweetItemHeader :tweet="item"/>
        <div class="ml-16">
            <p class="flex-shrink w-auto font-medium text-gray-900">
                {{ item.text }}
            </p>
            <div v-for="(image, index) in item.mediaFiles" :key="index" class="flex my-3 mr-2 border-2 rounded-2xl">
                <img :src="image.url" :alt="image.url" class="w-full rounded-2xl">
            </div>
            <div class="mt-2">
                <TweetItemActions/>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    props: ["tweet"],
    setup(props) {
        const item = ref(props.tweet);
        return {
            item
        };
    },
}
</script>