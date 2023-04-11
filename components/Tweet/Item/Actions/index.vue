<template>
    <div class="flex items-center justify-around w-full">
        <TweetItemActionsIcon>
            <template v-slot:icon="{ classes }">
                <ChatBubbleOvalLeftIcon :class="classes" />
            </template>
            <template v-slot:count>
                5
            </template>
        </TweetItemActionsIcon>
        <TweetItemActionsIcon>
            <template v-slot:icon="{ classes }">
                <HeartIcon :class="classes" />
            </template>
            <template v-slot:count>
                5
            </template>
        </TweetItemActionsIcon>
        <TweetItemActionsIcon>
            <template v-slot:icon="{ classes }">
                <ArrowPathIcon :class="classes" />
            </template>
            <template v-slot:count>
                5
            </template>
        </TweetItemActionsIcon>
        <TweetItemActionsIcon>
            <template v-slot:icon="{ classes }">
                <ArrowUpOnSquareStackIcon :class="classes" />
            </template>
            <template v-slot:count>
                5
            </template>
        </TweetItemActionsIcon>
    </div>
</template>
<script>
import { ChatBubbleOvalLeftIcon, HeartIcon, ArrowUpOnSquareStackIcon, ArrowPathIcon } from '@heroicons/vue/24/outline';
export default {
    components: {
        ChatBubbleOvalLeftIcon,
        HeartIcon,
        ArrowUpOnSquareStackIcon,
        ArrowPathIcon
    }
}
</script>