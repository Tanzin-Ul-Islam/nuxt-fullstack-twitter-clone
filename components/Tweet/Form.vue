<template>
    <div>
        <form @submit.prevent="handleFormSubmit">
            <div class="flex item-center flex-shrink-0 p-4 pb-0">
                <div class="flex w-12 items-top">
                    <img :src="user?.profileImage" alt="" class="inline-block w-10 h-10 rounded-full">
                </div>
                <div class="w-full p-2">
                    <textarea id="message" rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write your thoughts here..." v-model="tweet"></textarea>
                </div>
            </div>
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 px-3 py-1 rounded text-white font-bold">Tweet</button>
        </form>

    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    props: ['user'],
    emits: ['onSubmit'],
    setup(props, { emit }) {
        const user = ref(props.user);
        const tweet = ref("");
        function handleFormSubmit() {
            emit('onSubmit', {
                text: tweet.value
            });
        }
        return {
            user,
            tweet,
            handleFormSubmit
        }
    }
}

</script>