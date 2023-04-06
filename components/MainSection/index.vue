<template>
    <div class="border-x">
        <div class="sticky top-0 px-3 py-4 bg-white/80 backdrop-blur-md">
            <h2 class="text-xl font-bold text-gray-800">{{ props.title }}</h2>
        </div>
        <div v-if="loading" class="flex justify-center items-center p-4 border-b">
            <UiSpinner />
        </div>
        <div v-else>
            <TweetForm :user="user" @onSubmit="handleFormSubmit" />
        </div>
        <slot></slot>
    </div>
</template>

<script>
import userAuth from '~~/composables/userAuth';
import useTweet from '~~/composables/useTweet';
export default {
    props: ['title', 'loading'],
    setup(props) {
        const { useAuthUser } = userAuth();
        const { postTweet } = useTweet()
        const user = useAuthUser();
        let loading = ref(props.loading);
        async function handleFormSubmit(data) {
            try {
                const { showLoading, ...formData } = data;
                loading.value = showLoading
                await postTweet({
                    text: formData.text,
                    mediaFiles: formData.mediaFiles
                });
            }catch(error){
                console.log(error);
            }finally{
                loading.value = false;
            }
        }
        return {
            props,
            user,
            loading,
            handleFormSubmit
        }
    }
}
</script>