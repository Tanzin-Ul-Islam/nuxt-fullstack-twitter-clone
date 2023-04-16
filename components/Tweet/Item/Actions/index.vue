<template>
    <div class="flex items-center justify-around w-full">
        <TweetItemActionsIcon :size="size">
            <template v-slot:icon="{ classes }">
                <ChatBubbleOvalLeftIcon :class="classes" />
            </template>
            <template v-if="showStats" v-slot:count>
                5
            </template>
        </TweetItemActionsIcon>
        <TweetItemActionsIcon :size="size">
            <template v-slot:icon="{ classes }">
                <HeartIcon :class="classes" />
            </template>
            <template v-if="showStats" v-slot:count>
                5
            </template>
        </TweetItemActionsIcon>
        <TweetItemActionsIcon :size="size">
            <template v-slot:icon="{ classes }">
                <ArrowPathIcon :class="classes" />
            </template>
            <template v-if="showStats" v-slot:count>
                5
            </template>
        </TweetItemActionsIcon>
        <TweetItemActionsIcon :size="size">
            <template v-slot:icon="{ classes }">
                <ArrowUpOnSquareStackIcon :class="classes" />
            </template>
            <template v-if="showStats" v-slot:count>
                5
            </template>
        </TweetItemActionsIcon>
    </div>
</template>
<script>
import { ChatBubbleOvalLeftIcon, HeartIcon, ArrowUpOnSquareStackIcon, ArrowPathIcon } from '@heroicons/vue/24/outline';
import { computed } from '@vue/reactivity';
export default {
    components: {
        ChatBubbleOvalLeftIcon,
        HeartIcon,
        ArrowUpOnSquareStackIcon,
        ArrowPathIcon
    },
    props: ['compact'],
    setup(props) {
        const size = computed(() => ((props.compact && props.compact == true) ? 5 : 8));
        const showStats = computed(() => (props.compact ? true : false));
        return {
            size,
            showStats
        }
    }
}
</script>